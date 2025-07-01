self.__uv$config = {
    prefix: '/static/load/',
    bare:'https://backend.infrared.bomberfish.ca/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/static/uv/uv.handler.js',
    bundle: '/static/uv/uv.bundle.js',
    config: '/static/uv/uv.config.js',
    sw: '/static/uv/uv.sw.js',
}

// aHR0cHM6Ly9iYWNrZW5kLmluZnJhcmVkLmJvbWJlcmZpc2guY2Ev
// https://bare.commander.whimsy.me/ - doenst load gf assets
// https://koyeb.koyeb.app/fq/ laggy ah geforce 100ms ping better than nothing
// https://searchequinox.com/bare/ slower than mexi only gfnow tho
// https://equinox-beta-one.vercel.app/bare/ - my one 
