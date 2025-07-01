self.__uv$config = {
    prefix: '/static/load/',
    bare:'https://zc.fishoho.com/bare/', // https://infrared.zrhe2016.workers.dev/, https://skibidi.cfd/bare/, https://zc.fishoho.com/bare/
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/static/uv/uv.handler.js',
    bundle: '/static/uv/uv.bundle.js',
    config: '/static/uv/uv.config.js',
    sw: '/static/uv/uv.sw.js',
}
