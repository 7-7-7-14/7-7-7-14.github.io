self.__uv$config = {
    prefix: '/static/load/',
    bare:'https://skibidi.cfd/bare/', // https://infrared.zrhe2016.workers.dev, https://bare.lbss.dev.tc/
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/static/uv/uv.handler.js',
    bundle: '/static/uv/uv.bundle.js',
    config: '/static/uv/uv.config.js',
    sw: '/static/uv/uv.sw.js',
}
