self.__uv$config = {
    prefix: '/static/load/',
    bare:'https://void.radio.fm/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/static/uv/uv.handler.js',
    bundle: '/static/uv/uv.bundle.js',
    config: '/static/uv/uv.config.js',
    sw: '/static/uv/uv.sw.js',
}

// https://void.radio.fm/bare/
// https://backend.infrared.bomberfish.ca/
// https://infrared.zrhe2016.workers.dev/
// https://math.cinevez.lol/bare/
