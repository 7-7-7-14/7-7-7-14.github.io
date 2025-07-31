self.__uv$config = {
    prefix: '/static/load/',
    bare:'https://trigonometry.texasmath.net/bare/', // https://astroid.wtf/bare/, https://r2fh2387hv2b2rfbiz.site, https://when.casaye.com/bare/, https://bare2.mysticmath.workers.dev, https://play.szvy.win/bare/
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/static/uv/uv.handler.js',
    bundle: '/static/uv/uv.bundle.js',
    config: '/static/uv/uv.config.js',
    sw: '/static/uv/uv.sw.js',
}
