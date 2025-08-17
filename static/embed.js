const iframe = document.querySelector("#proxy-iframe");
iframe.src = `/static/load/${__uv$config.encodeUrl(link)}`;

// Listen for the iframe to load and replace title/favicon
iframe.onload = () => {
  const doc = iframe.contentDocument || iframe.contentWindow.document;

  // Only replace for /static/load/ URLs
  if (doc.location.pathname.startsWith("/static/load/")) {
    // Replace title
    doc.title = "Home";

    // Replace favicon
    let linkTag = doc.querySelector("link[rel*='icon']");
    if (!linkTag) {
      linkTag = doc.createElement("link");
      linkTag.rel = "icon";
      doc.head.appendChild(linkTag);
    }
    linkTag.href = "/storage/images/googleclasroom.png"; // your Home favicon PNG
  }
};
