self.__uv$config = {
    prefix: '/static/load/',
    bare:'https://when.casaye.com/bare/', // https://astroid.wtf/bare/, https://r2fh2387hv2b2rfbiz.site, https://v2202412246404304352.megasrv.de/bare/, https://when.casaye.com/bare/
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/static/uv/uv.handler.js',
    bundle: '/static/uv/uv.bundle.js',
    config: '/static/uv/uv.config.js',
    sw: '/static/uv/uv.sw.js',
}
