self.__uv$config = {
    prefix: '/static/load/',
    bare:'https://incog.dev/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/static/uv/uv.handler.js',
    bundle: '/static/uv/uv.bundle.js',
    config: '/static/uv/uv.config.js',
    sw: '/static/uv/uv.sw.js',
}

// https://void.radio.fm/bare/
// https://backend.infrared.bomberfish.ca/
// https://infrared.zrhe2016.workers.dev/ - works w geforce
// https://incog.dev/bare/ - may be blocked by CORS

// Backup default Bare and define special one for GeForce NOW
const defaultBare = self.__uv$config.bare;
const geforceBare = "https://infrared.zrhe2016.workers.dev/"; // works with GeForce NOW

// Function to launch a site via UV
function launchSite(url) {
  // Check if URL matches GeForce NOW
  if (url.startsWith("https://play.geforcenow.com")) {
    self.__uv$config.bare = geforceBare;
  } else {
    self.__uv$config.bare = defaultBare;
  }

  // Encode and redirect to the UV-encoded URL
  const encoded = self.__uv$config.prefix + Ultraviolet.codec.xor.encode(url);
  window.location.href = encoded;
}
