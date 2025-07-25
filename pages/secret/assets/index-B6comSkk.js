(function() {
    const l = document.createElement("link").relList;
    if (l && l.supports && l.supports("modulepreload")) return;
    for (const e of document.querySelectorAll('link[rel="modulepreload"]')) n(e);
    new MutationObserver(e => {
        for (const r of e)
            if (r.type === "childList")
                for (const d of r.addedNodes) d.tagName === "LINK" && d.rel === "modulepreload" && n(d)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function i(e) {
        const r = {};
        return e.integrity && (r.integrity = e.integrity), e.referrerPolicy && (r.referrerPolicy = e.referrerPolicy), e.crossOrigin === "use-credentials" ? r.credentials = "include" : e.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r
    }

    function n(e) {
        if (e.ep) return;
        e.ep = !0;
        const r = i(e);
        fetch(e.href, r)
    }
})();

function c(t) {
    t.addEventListener("click", () => {
        const l = document.querySelector("#container"),
            i = document.querySelector("video");
        document.querySelector("#video-overlay").classList.toggle("hidden"), l.classList.remove("hidden"), i.play()
    })
}
const a = ["1.mp4", "2.mp4", "3.mp4", "4.mp4", "5.mp4", "6.mp4", "7.mp4"];

function p(t) {
    const l = Math.floor(Math.random() * t.length);
    return t[l]; 
}
const f = p(a);
document.querySelector("#app").innerHTML = `
  <div id="loading-screen" class="hidden absolute w-full h-full lg:flex justify-center items-center bg-video z-20">
    <p class="text-white text-lg">Loading...</p>
  </div>
  
  <div class="bg-video min-h-screen flex justify-center items-center">
    <div id="container" class="grow flex">
      <div id="video-container" class="w-full relative">
        <div id="link-overlay" class="bg-blue absolute z-20 right-[10%] top-[12%] w-[68%] h-[11%]">
          <a href="https://www.youtube.com/watch?v=VufDd-QL1c0" target="_blank" class="w-full h-full block"></a>
        </div>
        <div id="video-overlay" class="absolute w-full h-full items-center justify-center flex z-10">
          <div>
            <button id="play" class="bg-black py-2 px-4 w-[100px] md:w-[300px] text-white text-lg relative top-[40px] left-[40%] md:left-[15%] xl:top-[120px] xl:left-[40%]">
              Play 
            </button>
          </div>
        </div>
        <video 
          id="video-player" 
          class="w-full h-full"
          playsinline
          preload="metadata"
        >
          <source src="${f}" type="video/mp4" />
        </video>
      </div>
      <div class="bg-transparent w-0 md:w-[110px] lg:w-[200px] xl:w-[300px] h-auto flex justify-center items-center shrink-0">
      </div>
    </div>
  </div>
`;
const o = document.getElementById("video-player"),
    s = document.getElementById("loading-screen");
o.addEventListener("loadedmetadata", () => {
    s.style.display = "none"
});
o.addEventListener("ended", () => {
    o.style.cursor = "pointer", o.addEventListener("click", function t() {
        o.play(), o.style.cursor = "default", o.removeEventListener("click", t)
    })
});
c(document.querySelector("#play"));
o.addEventListener("error", t => {
    console.error("Error loading video:", t), s.innerHTML = `
    <p class="text-white text-lg">Error loading video. Please try again.</p>
  `, s.style.display = "flex"
});
