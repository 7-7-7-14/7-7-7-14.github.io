"use strict";

// === CONFIGURATION ===
const CACHE_NAME_PREFIX = "c3offline";
const OFFLINE_DATA_FILE = "offline.json";
const BROADCASTCHANNEL_NAME = "offline";

// === GLOBALS ===
const broadcastChannel = typeof BroadcastChannel !== "undefined" ? new BroadcastChannel(BROADCASTCHANNEL_NAME) : null;

// === UTILITIES ===
const log = (...args) => console.log("[SW]", ...args);
const error = (...args) => console.error("[SW]", ...args);
const delayBroadcast = (type, data = {}) => {
  if (broadcastChannel) broadcastChannel.postMessage({ type, ...data });
};

// === PARALLEL FETCH THROTTLE ===
class PromiseThrottle {
  constructor(max) {
    this._maxParallel = max;
    this._queue = [];
    this._activeCount = 0;
  }
  Add(fn) {
    return new Promise((resolve, reject) => {
      this._queue.push({ fn, resolve, reject });
      this._next();
    });
  }
  async _next() {
    if (!this._queue.length || this._activeCount >= this._maxParallel) return;
    this._activeCount++;
    const task = this._queue.shift();
    try {
      const result = await task.fn();
      task.resolve(result);
    } catch (err) {
      task.reject(err);
    }
    this._activeCount--;
    this._next();
  }
}
const networkThrottle = new PromiseThrottle(20);

// === CACHE NAMES ===
const getBaseCacheName = () => `${CACHE_NAME_PREFIX}-${self.registration.scope}`;
const getCacheVersionName = v => `${getBaseCacheName()}-v${v}`;
const getAvailableCacheNames = async () =>
  (await caches.keys()).filter(name => name.startsWith(getBaseCacheName()));

// === FETCH WRAPPER ===
const fetchWithBypass = (req, bypass) =>
  fetch(typeof req === "string" ? new Request(req) : req, {
    cache: bypass ? "no-store" : req.cache,
    mode: req.mode,
    credentials: req.credentials,
    redirect: req.redirect,
    headers: req.headers
  });

// === CACHE MANAGER ===
async function cacheResources(cacheName, urls, bypass) {
  const cache = await caches.open(cacheName);
  await Promise.all(urls.map(async url => {
    try {
      const res = await networkThrottle.Add(() => fetchWithBypass(url, bypass));
      if (res.ok) await cache.put(url, res.clone());
      else error("Fetch failed:", url, res.status);
    } catch (e) {
      error("Error caching:", url, e);
    }
  }));
}

// === MAIN UPDATE CHECK ===
async function updateCheck(isInstall) {
  try {
    const response = await fetchWithBypass(OFFLINE_DATA_FILE, true);
    if (!response.ok) throw new Error("offline.json " + response.statusText);
    const { version, fileList = [], lazyLoad = [] } = await response.json();
    const cacheName = getCacheVersionName(version);
    const existingCaches = await getAvailableCacheNames();

    if (existingCaches.includes(cacheName)) {
      const isPending = existingCaches.length >= 2;
      delayBroadcast(isPending ? "update-pending" : "up-to-date");
      return;
    }

    const mainUrl = await getMainPageUrl();
    if (mainUrl && !fileList.includes(mainUrl)) fileList.unshift(mainUrl);
    fileList.unshift("./");

    log("Caching", fileList.length, "files");
    delayBroadcast(isInstall ? "downloading" : "downloading-update", { version });
    await cacheResources(cacheName, fileList, !isInstall);

    const isNowPending = await isUpdatePending();
    delayBroadcast(isNowPending ? "update-ready" : "offline-ready", { version });

  } catch (err) {
    error("Update check failed:", err);
  }
}

async function isUpdatePending() {
  return (await getAvailableCacheNames()).length >= 2;
}

async function getMainPageUrl() {
  const clientsList = await clients.matchAll({ type: "window", includeUncontrolled: true });
  for (const client of clientsList) {
    let url = client.url;
    if (url.startsWith(self.registration.scope)) {
      url = url.substring(self.registration.scope.length);
      if (url && url !== "/") return url.startsWith("?") ? "/" + url : url;
    }
  }
  return "";
}

async function getCacheToUse(names, isNav) {
  if (names.length === 1 || !isNav) return names[0];
  if ((await clients.matchAll()).length > 1) return names[0];
  const latest = names[names.length - 1];
  log("Clearing old caches...");
  await Promise.all(names.slice(0, -1).map(c => caches.delete(c)));
  return latest;
}

async function handleFetch(event, isNavigation) {
  const cacheNames = await getAvailableCacheNames();
  if (!cacheNames.length) return fetch(event.request);

  const cacheName = await getCacheToUse(cacheNames, isNavigation);
  const cache = await caches.open(cacheName);
  const match = await cache.match(event.request);
  if (match) return match;

  try {
    const response = await fetch(event.request);
    return response;
  } catch {
    return new Response("Offline", { status: 503, statusText: "Offline" });
  }
}

// === EVENT LISTENERS ===
self.addEventListener("install", e => {
  self.skipWaiting();
  e.waitUntil(updateCheck(true));
});

self.addEventListener("activate", e => {
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;

  const isNav = e.request.mode === "navigate";
  const response = handleFetch(e, isNav);
  if (isNav) e.waitUntil(updateCheck(false));
  e.respondWith(response);
});
