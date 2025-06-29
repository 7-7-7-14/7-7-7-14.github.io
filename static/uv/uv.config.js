self.__uv$config = {
    prefix: '/static/load/',
    bare:'https://searchequinox.com/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/static/uv/uv.handler.js',
    bundle: '/static/uv/uv.bundle.js',
    config: '/static/uv/uv.config.js',
    sw: '/static/uv/uv.sw.js',
}

// https://void.radio.fm/bare/ - mid, loads gf, blocked by CORS!!!
// https://backend.infrared.bomberfish.ca/ - gf doesnt load
// https://infrared.zrhe2016.workers.dev/ - gf doesnt load
// https://incog.dev/bare/ - fast, blocked by CORS
// https://bare.commander.whimsy.me/ - doenst load gf assets
// https://parallel-daphene-ijuslostmydooohg-021a963b.koyeb.app/fq/ - no connect to gfnow servers
// https://dm-unbl0cker-bare-server-dusky.vercel.app/
// https://bare-2wn.pages.dev/ - blocked in school
// https://koyeb.koyeb.app/fq/ laggy ah geforce 100ms ping better than nothing
// https://mexi.rest/bare/ ts so slow 🥀
// https://searchequinox.com/bare/ testing rn
