importScripts("/static/uv/uv.sw.js");

const sw = new UVServiceWorker();

self.addEventListener("fetch", (event) => {
    event.respondWith(
        sw.fetch(event).then(async (response) => {
            try {
                const contentType = response.headers.get("content-type") || "";
                if (contentType.includes("text/html")) {
                    let text = await response.text();

                    // Decode UV URL
                    const url = new URL(event.request.url);
                    const decoded = UV.decode(url.pathname);

                    // Only override for /static/load/ pages
                    if (decoded.startsWith("/static/load/")) {
                        // Replace <title>
                        text = text.replace(/<title>.*?<\/title>/i, "<title>Home</title>");

                        // Replace or add favicon (PNG)
                        if (/rel=['"]icon['"]/.test(text)) {
                            text = text.replace(
                                /<link[^>]+rel=['"]icon['"][^>]*>/i,
                                '<link rel="icon" href="/assets/images/googleclassroom.png">'
                            );
                        } else {
                            text = text.replace(/<\/head>/i, '<link rel="icon" href="/assets/ggc-favicon.png"></head>');
                        }
                    }

                    return new Response(text, {
                        status: response.status,
                        statusText: response.statusText,
                        headers: response.headers
                    });
                }

                return response;
            } catch (e) {
                console.error("Error in SW HTML override:", e);
                return response;
            }
        })
    );
});
