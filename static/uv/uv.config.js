self.__uv$config = {
    bare:'https://trigonometry.texasmath.net/spiders/',
    encodeUrl: Ultrablocc.codec.base64.encode,
    decodeUrl: Ultrablocc.codec.base64.decode,
    handler: '/static/uv/uv.handler.js',
    bundle: '/static/uv/uv.bundle.js',
    sw: '/static/uv/uv.sw.js',
}

self.__uv$config.prefix = '/static/load/';
self.__uv$config.config = '/static/uv/uv.config.js';
