window.addEventListener('load', () => {
  const link = new URLSearchParams(window.location.search).get('p');
  if (!link) return;

  if (link.startsWith("https://play.geforcenow.com")) {
    self.__uv$config.bare = "https://infrared.zrhe2016.workers.dev/";
  } else {
    self.__uv$config.bare = 'https://incog.dev/bare/';
  }

  const encoded = self.__uv$config.prefix + Ultraviolet.codec.xor.encode(link);
  console.log('Redirecting to:', encoded);
  window.location.href = encoded;
});
