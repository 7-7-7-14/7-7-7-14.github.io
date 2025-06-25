document.addEventListener("DOMContentLoaded", () => {
  const link = new URLSearchParams(window.location.search).get('p');
  if (link) {
    if (link.startsWith("https://play.geforcenow.com")) {
      self.__uv$config.bare = "https://infrared.zrhe2016.workers.dev/";
    } else {
      self.__uv$config.bare = 'https://incog.dev/bare/';
    }
    window.location.href = `${self.__uv$config.prefix}${self.__uv$config.encodeUrl(link)}`;
  }
});
