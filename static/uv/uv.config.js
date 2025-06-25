self.__uv$config = {
    prefix: '/static/load/',
    bare:' https://void.radio.fm/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/static/uv/uv.handler.js',
    bundle: '/static/uv/uv.bundle.js',
    config: '/static/uv/uv.config.js',
    sw: '/static/uv/uv.sw.js',
}

// https://void.radio.fm/bare/ - slow, loads gf
// https://backend.infrared.bomberfish.ca/ - gf doesnt load
// https://infrared.zrhe2016.workers.dev/ - gf doesnt load
// https://incog.dev/bare/ - fast, blocked by CORS
// https://bare.commander.whimsy.me/
