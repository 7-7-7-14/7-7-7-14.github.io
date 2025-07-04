self.__uv$config = {
    prefix: '/static/load/',
    bare:'https://infrared.zrhe2016.workers.dev/', // https://infrared.zrhe2016.workers.dev/, https://zc.fishoho.com/bare/, https://ojojojojojoj.vercel.app/bare/
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/static/uv/uv.handler.js',
    bundle: '/static/uv/uv.bundle.js',
    config: '/static/uv/uv.config.js',
    sw: '/static/uv/uv.sw.js',
}
