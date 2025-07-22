/*
taken from https://www.myinstants.com/en/trending/us/
last updated: 1750052177780

(() => {
  return Array.from(document.querySelectorAll("#instants_container .instant")).map(el => ({
    name: el.querySelector(".instant-link")?.textContent.trim(),
    color: el.querySelector(".circle")?.style.backgroundColor,
    mp3: el.querySelector("button[onclick^='play']")?.getAttribute("onclick")?.match(/'([^']+\.mp3)'/)?.[1]
  }));
})()
*/
export const sounds =
// SPLITTER ---------------
[
    {
        "name": "VINE BOOM SOUND",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom.mp3"
    },
    {
        "name": "Apple Pay",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/applepay.mp3"
    },
    {
        "name": "italian brainrot ringtone",
        "color": "rgb(120, 38, 38)",
        "mp3": "/media/sounds/italian-brainrot-ringtone.mp3"
    },
    {
        "name": "Tuco: GET OUT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tuco-get-out.mp3"
    },
    {
        "name": "Fart",
        "color": "rgb(102, 51, 0)",
        "mp3": "/media/sounds/dry-fart.mp3"
    },
    {
        "name": "rizz sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rizz-sound-effect.mp3"
    },
    {
        "name": "Anime Wow",
        "color": "rgb(255, 51, 102)",
        "mp3": "/media/sounds/anime-wow-sound-effect.mp3"
    },
    {
        "name": "Lancer splat",
        "color": "rgb(29, 46, 255)",
        "mp3": "/media/sounds/lancer-splat.mp3"
    },
    {
        "name": "Among Us role reveal sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/among-us-role-reveal-sound.mp3"
    },
    {
        "name": "BRUH",
        "color": "rgb(255, 255, 51)",
        "mp3": "/media/sounds/movie_1.mp3"
    },
    {
        "name": "**Gay**",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gay_CRD979V.mp3"
    },
    {
        "name": "Metal pipe clang",
        "color": "rgb(92, 92, 92)",
        "mp3": "/media/sounds/metal-pipe-clang.mp3"
    },
    {
        "name": "Syfm",
        "color": "rgb(145, 183, 255)",
        "mp3": "/media/sounds/syfm.mp3"
    },
    {
        "name": "SpongeBob Fail",
        "color": "rgb(202, 195, 26)",
        "mp3": "/media/sounds/spongebob-fail.mp3"
    },
    {
        "name": "Smoke Detector Beep",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/smoke-detector-beep.mp3"
    },
    {
        "name": "flashbanggg",
        "color": "rgb(4, 0, 255)",
        "mp3": "/media/sounds/flashbanggg.mp3"
    },
    {
        "name": "Prowler Sound Effect",
        "color": "rgb(101, 32, 124)",
        "mp3": "/media/sounds/prowler-sound-effect_6bXErot.mp3"
    },
    {
        "name": "my mommy said no more skibidi toilet",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/my-mommy-said-no-more-skibidi-toilet.mp3"
    },
    {
        "name": "Pew_Pew",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/pew_pew-dknight556-1379997159.mp3"
    },
    {
        "name": "Long brain fart",
        "color": "rgb(0, 127, 255)",
        "mp3": "/media/sounds/long-brain-fart.mp3"
    },
    {
        "name": "oh my god bro oh hell nah man",
        "color": "rgb(7, 255, 6)",
        "mp3": "/media/sounds/oh-my-god-bro-oh-hell-nah-man.mp3"
    },
    {
        "name": "Discord Notification",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-notification.mp3"
    },
    {
        "name": "cat laugh meme 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cat-laugh-meme-1.mp3"
    },
    {
        "name": "sad meow song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sad-meow-song.mp3"
    },
    {
        "name": "Buzzer",
        "color": "rgb(204, 0, 153)",
        "mp3": "/media/sounds/wrong-answer-sound-effect.mp3"
    },
    {
        "name": "YIPPEEEEEEEEEEEEEE",
        "color": "rgb(40, 137, 255)",
        "mp3": "/media/sounds/yippeeeeeeeeeeeeee.mp3"
    },
    {
        "name": "let me know",
        "color": "rgb(255, 22, 208)",
        "mp3": "/media/sounds/let-me-know.mp3"
    },
    {
        "name": "Yes King AHHHHHHHHHHHHHHHH",
        "color": "rgb(255, 186, 194)",
        "mp3": "/media/sounds/yes-king-ahhhhhhhhhhhhhhhh.mp3"
    },
    {
        "name": "Taco Bell Bong",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/taco-bell-bong-sfx.mp3"
    },
    {
        "name": "baby laughing meme",
        "color": "rgb(0, 233, 255)",
        "mp3": "/media/sounds/baby-laughing-meme.mp3"
    },
    {
        "name": "Scream meme",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/y2mate_5gbydy1.mp3"
    },
    {
        "name": "Sad Violin (the meme one)",
        "color": "rgb(0, 255, 51)",
        "mp3": "/media/sounds/tf_nemesis.mp3"
    },
    {
        "name": "Bone Crack",
        "color": "rgb(255, 255, 160)",
        "mp3": "/media/sounds/bone-crack.mp3"
    },
    {
        "name": "Fart Button",
        "color": "rgb(51, 153, 0)",
        "mp3": "/media/sounds/perfect-fart.mp3"
    },
    {
        "name": "The Undertaker Bell",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/undertakers-bell_2UwFCIe.mp3"
    },
    {
        "name": "Apple Pay Sound",
        "color": "rgb(33, 77, 255)",
        "mp3": "/media/sounds/apple-pay-sound.mp3"
    },
    {
        "name": "Death sound (Fortnite)",
        "color": "rgb(255, 0, 142)",
        "mp3": "/media/sounds/tmp_7901-951678082.mp3"
    },
    {
        "name": "The Undertaker Bell",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/undertakers-bell_2UwFCIe.mp3"
    },
    {
        "name": "Apple Pay Sound",
        "color": "rgb(33, 77, 255)",
        "mp3": "/media/sounds/apple-pay-sound.mp3"
    },
    {
        "name": "Hub Intro Sound",
        "color": "rgb(255, 150, 30)",
        "mp3": "/media/sounds/hub-intro-sound.mp3"
    },
    {
        "name": "Error SOUNDSS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/error_CDOxCYm.mp3"
    },
    {
        "name": "dun dun dunnnnnnnn",
        "color": "rgb(255, 44, 44)",
        "mp3": "/media/sounds/dun-dun-dun-sound-effect-brass_8nFBccR.mp3"
    },
    {
        "name": "Galaxy meme",
        "color": "rgb(25, 75, 255)",
        "mp3": "/media/sounds/galaxy-meme.mp3"
    },
    {
        "name": "indian song 7sek",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/panjabi-mc-mundian-to-bach-ke-the-dictator-soundtrack-0s-7s-djztxj2gpfk.mp3"
    },
    {
        "name": "Emotional Damage Meme",
        "color": "rgb(229, 0, 0)",
        "mp3": "/media/sounds/emotional-damage-meme.mp3"
    },
    {
        "name": "Yo phone lining",
        "color": "rgb(95, 255, 46)",
        "mp3": "/media/sounds/yo-phone-lining.mp3"
    },
    {
        "name": "Door Knocking SOUND EFFECT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crazy-realistic-knocking-sound-troll-twitch-streamers_small.mp3"
    },
    {
        "name": "Shocked sound",
        "color": "rgb(255, 238, 135)",
        "mp3": "/media/sounds/shocked-sound-effect.mp3"
    },
    {
        "name": "Pluh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pluh.mp3"
    },
    {
        "name": "lack of a father figure?",
        "color": "rgb(211, 16, 255)",
        "mp3": "/media/sounds/lack-of-a-father-figure.mp3"
    },
    {
        "name": "ding sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ding-sound-effect_2.mp3"
    },
    {
        "name": "Punch Sound",
        "color": "rgb(42, 141, 255)",
        "mp3": "/media/sounds/punch-gaming-sound-effect-hd_RzlG1GE.mp3"
    },
    {
        "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        "color": "rgb(2, 27, 255)",
        "mp3": "/media/sounds/aaaaaaaa-online-audio-converter_r9waVUO.mp3"
    },
    {
        "name": "instagram thud",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom-sound-effect_KT89XIq.mp3"
    },
    {
        "name": "Rat dance Music",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/rat-dance-music.mp3"
    },
    {
        "name": "Rizz sounds",
        "color": "rgb(30, 0, 255)",
        "mp3": "/media/sounds/rizz-sounds.mp3"
    },
    {
        "name": "Tung tung sahur",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/tung-tung-sahur.mp3"
    },
    {
        "name": "ЪЭХ",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ekh.mp3"
    },
    {
        "name": "outro song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/outro-song_oqu8zAg.mp3"
    },
    {
        "name": "MUSTARDDDDDDDD",
        "color": "rgb(236, 211, 52)",
        "mp3": "/media/sounds/mustardddddddd.mp3"
    },
    {
        "name": "ROBLOX oof",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-death-sound_1.mp3"
    },
    {
        "name": "jixaw metal pipe falling sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jixaw-metal-pipe-falling-sound.mp3"
    },
    {
        "name": "goofy ahh sounds",
        "color": "rgb(247, 255, 2)",
        "mp3": "/media/sounds/goofy-ahh-sounds.mp3"
    },
    {
        "name": "spiderman meme song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spiderman-meme-song.mp3"
    },
    {
        "name": "Fart Meme Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-meme-sound.mp3"
    },
    {
        "name": "goku drip",
        "color": "rgb(182, 255, 56)",
        "mp3": "/media/sounds/drip-goku-meme-song-original-dragon-ball-super-music-clash-of-gods-in-description.mp3"
    },
    {
        "name": "-999 Social Credit Siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/999-social-credit-siren.mp3"
    },
    {
        "name": "Chicken Jockey",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/chicken-jockey.mp3"
    },
    {
        "name": "Goofy ahh car horn sound effect",
        "color": "rgb(40, 40, 40)",
        "mp3": "/media/sounds/goofy-ahh-car-horn-sound-effect.mp3"
    },
    {
        "name": "a few moments later sponge bob sfx fun",
        "color": "rgb(6, 255, 39)",
        "mp3": "/media/sounds/a-few-moments-later-sponge-bob-sfx-fun.mp3"
    },
    {
        "name": "Huh? Ceeday",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ceeday-huh-sound-effect.mp3"
    },
    {
        "name": "YAAAAAAAAY",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kids-saying-yay-sound-effect_3.mp3"
    },
    {
        "name": "(mafioso) scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-scream.mp3"
    },
    {
        "name": "YAAAAAAAAY",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kids-saying-yay-sound-effect_3.mp3"
    },
    {
        "name": "Oh Brother, This Guy Stinks!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-brother-this-guy-stinks.mp3"
    },
    {
        "name": "Ralsei Splat",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ralsei-splat.mp3"
    },
    {
        "name": "Lobotomy Sound Effect",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/lobotomy-sound-effect.mp3"
    },
    {
        "name": "SYFM LOUD",
        "color": "rgb(58, 0, 255)",
        "mp3": "/media/sounds/syfm-loud.mp3"
    },
    {
        "name": "*Snore* mimimimimimi",
        "color": "rgb(173, 255, 255)",
        "mp3": "/media/sounds/snore-mimimimimimi.mp3"
    },
    {
        "name": "Womp Womp Womp",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/downer_noise.mp3"
    },
    {
        "name": "MUSTARDDDDDDDD",
        "color": "rgb(236, 211, 52)",
        "mp3": "/media/sounds/mustardddddddd.mp3"
    },
    {
        "name": "Censor Beep 1",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/censor-beep-1.mp3"
    },
    {
        "name": "Oh My God Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-my-god-meme.mp3"
    },
    {
        "name": "Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/are-you-out-of-your-mind-greenscreen-change-quality-and-end-wont-cut-off_2.mp3"
    },
    {
        "name": "Extremely loud incorrect buzzer",
        "color": "rgb(173, 255, 96)",
        "mp3": "/media/sounds/extremely-loud-incorrect-buzzer_0cDaG20.mp3"
    },
    {
        "name": "Aww",
        "color": "rgb(255, 0, 153)",
        "mp3": "/media/sounds/studio-audience-awwww-sound-fx.mp3"
    },
    {
        "name": "RUN vine",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/run-vine-sound-effect.mp3"
    },
    {
        "name": "Nooo la polizia",
        "color": "rgb(43, 128, 255)",
        "mp3": "/media/sounds/nooo-la-polizia.mp3"
    },
    {
        "name": "Whip",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crack_the_whip.mp3"
    },
    {
        "name": "Panther Roar",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/panther3.mp3"
    },
    {
        "name": "discord call",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-call-sound.mp3"
    },
    {
        "name": "Bad to the Bone Meme",
        "color": "rgb(204, 255, 239)",
        "mp3": "/media/sounds/bad-to-the-bone-meme.mp3"
    },
    {
        "name": "Daddyy Chill",
        "color": "rgb(255, 138, 239)",
        "mp3": "/media/sounds/daddyy-chill.mp3"
    },
    {
        "name": "FUCK, sound effect meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fuck-sound-effect-meme.mp3"
    },
    {
        "name": "Explosion meme",
        "color": "rgb(255, 201, 52)",
        "mp3": "/media/sounds/explosion-meme_dTCfAHs.mp3"
    },
    {
        "name": "Wait wait wait what the hell legend sound",
        "color": "rgb(185, 63, 255)",
        "mp3": "/media/sounds/wait-wait-wait-what-the-hell-legend-sound.mp3"
    },
    {
        "name": "HAha funny laugh",
        "color": "rgb(70, 255, 24)",
        "mp3": "/media/sounds/ny-video-online-audio-converter.mp3"
    },
    {
        "name": "\"Aw Shit! Here go again.\" CJ from GTA SA",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gta-san-andreas-ah-shit-here-we-go-again_BWv0Gvc.mp3"
    },
    {
        "name": "Omni man are you sure",
        "color": "rgb(48, 186, 255)",
        "mp3": "/media/sounds/omni-man-are-you-sure.mp3"
    },
    {
        "name": "NFL Bass Boosted",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nfl.mp3"
    },
    {
        "name": "what da dog doin",
        "color": "rgb(113, 105, 255)",
        "mp3": "/media/sounds/yt1s_wU4BGgD.mp3"
    },
    {
        "name": "Gta v notification",
        "color": "rgb(69, 255, 0)",
        "mp3": "/media/sounds/gta-v-notification.mp3"
    },
    {
        "name": "tung tung tung tung sahur",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tung-tung-tung-tung-sahur.mp3"
    },
    {
        "name": "DDG Boom",
        "color": "rgb(89, 238, 255)",
        "mp3": "/media/sounds/ddg-boom_KZ9NU4w.mp3"
    },
    {
        "name": "and his name is John Cenaaaaaa",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/and-his-name-is-john-cena-1.mp3"
    },
    {
        "name": ".moaning plankton meme.",
        "color": "rgb(57, 12, 255)",
        "mp3": "/media/sounds/moaning-plankton-meme.mp3"
    },
    {
        "name": "'What' Bottom Text Meme (Sanctuary Guardian) - S",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-bottom-text-meme-sanctuary-guardian-sound-effect-hd.mp3"
    },
    {
        "name": "oh no no no laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-no-no-no-no-laugh.mp3"
    },
    {
        "name": "FUCK, sound effect meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fuck-sound-effect-meme.mp3"
    },
    {
        "name": "what da dog doin",
        "color": "rgb(113, 105, 255)",
        "mp3": "/media/sounds/yt1s_wU4BGgD.mp3"
    },
    {
        "name": "DDG Boom",
        "color": "rgb(89, 238, 255)",
        "mp3": "/media/sounds/ddg-boom_KZ9NU4w.mp3"
    },
    {
        "name": "Metal Gear Solid Alert",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tindeck_1.mp3"
    },
    {
        "name": "oh no no no laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-no-no-no-no-laugh.mp3"
    },
    {
        "name": ".moaning plankton meme.",
        "color": "rgb(57, 12, 255)",
        "mp3": "/media/sounds/moaning-plankton-meme.mp3"
    },
    {
        "name": "MLG AIR HORN!!!!!!!!!!!",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/mlg-airhorn.mp3"
    },
    {
        "name": "'What' Bottom Text Meme (Sanctuary Guardian) - S",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-bottom-text-meme-sanctuary-guardian-sound-effect-hd.mp3"
    },
    {
        "name": "What the Helly",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-the-helly.mp3"
    },
    {
        "name": "FNAF Jumpscare Scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/five-nights-at-freddys-full-scream-sound_2.mp3"
    },
    {
        "name": "Discord Leave Noise",
        "color": "rgb(102, 0, 255)",
        "mp3": "/media/sounds/discord-leave-noise.mp3"
    },
    {
        "name": "Gta v notification",
        "color": "rgb(69, 255, 0)",
        "mp3": "/media/sounds/gta-v-notification.mp3"
    },
    {
        "name": "Mac Quack",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mac-quack.mp3"
    },
    {
        "name": "DJ Airhorn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dj-airhorn-sound-effect-kingbeatz_1.mp3"
    },
    {
        "name": "GUBBY",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gubby.mp3"
    },
    {
        "name": "Fart Meme Sound (Better and louder)",
        "color": "rgb(146, 93, 52)",
        "mp3": "/media/sounds/fartmeme.mp3"
    },
    {
        "name": "You're taking too long",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/youre-taking-too-long.mp3"
    },
    {
        "name": "Wrong Answer Buzzer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wrong-answer-buzzer.mp3"
    },
    {
        "name": "Huh Cat",
        "color": "rgb(0, 72, 255)",
        "mp3": "/media/sounds/huh-cat.mp3"
    },
    {
        "name": "brain fart slowed",
        "color": "rgb(141, 85, 60)",
        "mp3": "/media/sounds/brain-fart-slowed.mp3"
    },
    {
        "name": "La vida es un carrusel",
        "color": "rgb(85, 0, 255)",
        "mp3": "/media/sounds/la-vida-es-un-carrusel.mp3"
    },
    {
        "name": "Rehehehe",
        "color": "rgb(108, 255, 150)",
        "mp3": "/media/sounds/rehehehe.mp3"
    },
    {
        "name": "the weeknd rizzz",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-weeknd-rizzz.mp3"
    },
    {
        "name": "MICHAEL DONT LEAVE ME HERE",
        "color": "rgb(131, 0, 0)",
        "mp3": "/media/sounds/michael-dont-leave-me-here.mp3"
    },
    {
        "name": "Bruh meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/movie_1_C2K5NH0.mp3"
    },
    {
        "name": "and his name is John Cenaaaaaa",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/and-his-name-is-john-cena-1.mp3"
    },
    {
        "name": "We do not care (TikTok Sound)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/we-do-not-care_phB0mEB.mp3"
    },
    {
        "name": "asian meme huh?",
        "color": "rgb(186, 255, 255)",
        "mp3": "/media/sounds/huh_37bAoRo.mp3"
    },
    {
        "name": "danger alarm sound effect meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/danger-alarm-sound-effect-meme.mp3"
    },
    {
        "name": "Sponge Stank Noise",
        "color": "rgb(255, 11, 156)",
        "mp3": "/media/sounds/sponge-stank-noise.mp3"
    },
    {
        "name": "sus clapping",
        "color": "rgb(251, 255, 0)",
        "mp3": "/media/sounds/sus-clapping_7e8OtBO.mp3"
    },
    {
        "name": "Pop SFX",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pop_7e9Is8L.mp3"
    },
    {
        "name": "lego breaking",
        "color": "rgb(255, 245, 0)",
        "mp3": "/media/sounds/lego-breaking.mp3"
    },
    {
        "name": "Awkward cricket",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/awkward-cricket-sound-effect.mp3"
    },
    {
        "name": "running sound",
        "color": "rgb(93, 255, 202)",
        "mp3": "/media/sounds/1-108.mp3"
    },
    {
        "name": "Jeopardy Theme Song!",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/jeopardy-themelq.mp3"
    },
    {
        "name": "Bruh meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/movie_1_C2K5NH0.mp3"
    },
    {
        "name": "asian meme huh?",
        "color": "rgb(186, 255, 255)",
        "mp3": "/media/sounds/huh_37bAoRo.mp3"
    },
    {
        "name": "heavenly musiic",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/heavenly-music-gaming-sound-effect-hd-mp3cut.mp3"
    },
    {
        "name": "Awkward cricket",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/awkward-cricket-sound-effect.mp3"
    },
    {
        "name": "vine boom bass boost sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom-bass-boost-sound-effect.mp3"
    },
    {
        "name": "sus clapping",
        "color": "rgb(251, 255, 0)",
        "mp3": "/media/sounds/sus-clapping_7e8OtBO.mp3"
    },
    {
        "name": "Dune Scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dune-scream.mp3"
    },
    {
        "name": "Jeopardy Theme Song!",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/jeopardy-themelq.mp3"
    },
    {
        "name": "Slap *oh*",
        "color": "rgb(114, 88, 255)",
        "mp3": "/media/sounds/slap-oh_LGvkhyt.mp3"
    },
    {
        "name": "spongebob boowomp",
        "color": "rgb(255, 249, 26)",
        "mp3": "/media/sounds/spongebob-boowomp.mp3"
    },
    {
        "name": "fart with extra reverb",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-with-extra-reverb.mp3"
    },
    {
        "name": "Amongus Sus",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/53b1bab6-a8c3-4a1a-82db-7110ce1c29ef_6KNDGWD.mp3"
    },
    {
        "name": "Le fart de Simon",
        "color": "rgb(75, 255, 0)",
        "mp3": "/media/sounds/le-fart-de-simon.mp3"
    },
    {
        "name": "Windows XP Error",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/erro.mp3"
    },
    {
        "name": "GopGopGop",
        "color": "rgb(255, 250, 206)",
        "mp3": "/media/sounds/gopgopgop.mp3"
    },
    {
        "name": "Roblox Explosion Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-explosion-sound.mp3"
    },
    {
        "name": "yippee tbh",
        "color": "rgb(30, 125, 36)",
        "mp3": "/media/sounds/yippee-tbh.mp3"
    },
    {
        "name": "Another One DJ Khaled",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/another-one_dPvHt2Z.mp3"
    },
    {
        "name": "WIDE PUTIN MEME",
        "color": "rgb(33, 255, 100)",
        "mp3": "/media/sounds/my-movie-6_0RlWMvM.mp3"
    },
    {
        "name": "Correct Answer GameShow",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/correct.mp3"
    },
    {
        "name": "Shut your fuckin mouth",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/shut-your-fuckin-mouth.mp3"
    },
    {
        "name": "FBI OPEN UP (with explosion)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fbi-open-up_dwLhIFf.mp3"
    },
    {
        "name": "GunShottttt",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunshotjbudden.mp3"
    },
    {
        "name": "wet fart",
        "color": "rgb(204, 102, 0)",
        "mp3": "/media/sounds/wet-fart_1.mp3"
    },
    {
        "name": "BASS BOOST discord call",
        "color": "rgb(93, 0, 255)",
        "mp3": "/media/sounds/bass-boost-discord-call.mp3"
    },
    {
        "name": "Mephiles Evil Laugh",
        "color": "rgb(51, 51, 51)",
        "mp3": "/media/sounds/mephiles-laughs-btw-go-watch-my-other-stuff.mp3"
    },
    {
        "name": "LEBRON",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lebron.mp3"
    },
    {
        "name": "Lagging/loading",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/loading-lost-connection-green-screen-with-sound-effect-2_K8HORkT.mp3"
    },
    {
        "name": "oh shit not good",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/wcgertcz074.mp3"
    },
    {
        "name": "ACK",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ack.mp3"
    },
    {
        "name": "Core Sound Effect",
        "color": "rgb(105, 0, 0)",
        "mp3": "/media/sounds/core-sound-effect.mp3"
    },
    {
        "name": "Yes, Daddy...",
        "color": "rgb(89, 211, 255)",
        "mp3": "/media/sounds/yes-daddy_CKEAffI.mp3"
    },
    {
        "name": "They ask you how you are meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/they-ask-you-how-you-are-and-you-just-have-to-say-that-youre-fine-sound-effect_IgYM1CV.mp3"
    },
    {
        "name": "BRUH sound effect!",
        "color": "rgb(49, 255, 6)",
        "mp3": "/media/sounds/bruh-sound-effect_WstdzdM.mp3"
    },
    {
        "name": "angry roblox",
        "color": "rgb(129, 26, 26)",
        "mp3": "/media/sounds/angry-roblox.mp3"
    },
    {
        "name": "Ngakak laugh annoying",
        "color": "rgb(214, 255, 142)",
        "mp3": "/media/sounds/ngakak-laugh-annoying.mp3"
    },
    {
        "name": "What The Hell Meme Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-the-hell-meme-sound-effect.mp3"
    },
    {
        "name": "Asian Gong & Music",
        "color": "rgb(233, 255, 0)",
        "mp3": "/media/sounds/asian-gong-music.mp3"
    },
    {
        "name": "Doge bonk",
        "color": "rgb(67, 179, 180)",
        "mp3": "/media/sounds/bonk_BEtiM8g.mp3"
    },
    {
        "name": "FBI OPEN UP (with explosion)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fbi-open-up_dwLhIFf.mp3"
    },
    {
        "name": "bonk doge",
        "color": "rgb(255, 201, 121)",
        "mp3": "/media/sounds/bonk_7zPAD7C.mp3"
    },
    {
        "name": "Cave Ambience 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cave11_0QWMESM.mp3"
    },
    {
        "name": "BRUH sound effect!",
        "color": "rgb(49, 255, 6)",
        "mp3": "/media/sounds/bruh-sound-effect_WstdzdM.mp3"
    },
    {
        "name": "Yes, Daddy...",
        "color": "rgb(89, 211, 255)",
        "mp3": "/media/sounds/yes-daddy_CKEAffI.mp3"
    },
    {
        "name": "discord join call",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yt1s_nYWSz5R.mp3"
    },
    {
        "name": "plankton augh",
        "color": "rgb(49, 108, 87)",
        "mp3": "/media/sounds/plankton-augh.mp3"
    },
    {
        "name": "You Need to Leave!",
        "color": "rgb(111, 59, 255)",
        "mp3": "/media/sounds/you-need-to-leave_wDmQeme.mp3"
    },
    {
        "name": "YOUR PHONE IS RINGING PICK IT UP NOW",
        "color": "rgb(2, 0, 23)",
        "mp3": "/media/sounds/your-phone-is-ringing-pick-it-up-now.mp3"
    },
    {
        "name": "The Price is Right Losing Horn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-price-is-right-losing-horn.mp3"
    },
    {
        "name": "Chalo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/chalo.mp3"
    },
    {
        "name": "minecraft eating sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nom-nom-nom_gPJiWn4.mp3"
    },
    {
        "name": "Punch Effect",
        "color": "rgb(59, 255, 0)",
        "mp3": "/media/sounds/punch_u4LmMsr.mp3"
    },
    {
        "name": "na na na",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/funny-sound-that-will-make-you-to-laugh_1.mp3"
    },
    {
        "name": "--Gay Moan--",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gay-moan.mp3"
    },
    {
        "name": "brain fart",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/brain-fart.mp3"
    },
    {
        "name": "sans voice",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/voice_sans.mp3"
    },
    {
        "name": "Man shut yo b*tch ass up!!!!!",
        "color": "rgb(255, 53, 208)",
        "mp3": "/media/sounds/man-stfu.mp3"
    },
    {
        "name": "Chipmunk Laugh",
        "color": "rgb(241, 255, 0)",
        "mp3": "/media/sounds/funny_82hiegE.mp3"
    },
    {
        "name": "angry roblox",
        "color": "rgb(129, 26, 26)",
        "mp3": "/media/sounds/angry-roblox.mp3"
    },
    {
        "name": "It was at this moment he knew",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/heknew.mp3"
    },
    {
        "name": "Money SoundFX",
        "color": "rgb(255, 253, 0)",
        "mp3": "/media/sounds/money-soundfx.mp3"
    },
    {
        "name": "Eww brother eww",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/eww-brother-eww.mp3"
    },
    {
        "name": "nuclear diarrhea",
        "color": "rgb(109, 58, 10)",
        "mp3": "/media/sounds/nuclear-diarrhea.mp3"
    },
    {
        "name": "Clapping",
        "color": "rgb(255, 0, 51)",
        "mp3": "/media/sounds/aplausos_2.mp3"
    },
    {
        "name": "You are an idiot!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-are-an-idiot.mp3"
    },
    {
        "name": "MAN SNORING MEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/man-snoring-meme_ctrllNn.mp3"
    },
    {
        "name": "Tralalero Tralala Meme",
        "color": "rgb(159, 178, 197)",
        "mp3": "/media/sounds/tralalero-tralala-meme_R8mqoQo.mp3"
    },
    {
        "name": "VERY LOUD AIRHORN",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/veryloudairhorn.mp3"
    },
    {
        "name": "sudden suspense",
        "color": "rgb(255, 251, 0)",
        "mp3": "/media/sounds/sudden-suspense-sound-effect.mp3"
    },
    {
        "name": "Snoop Dogg meme",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpbxydyrz3.mp3"
    },
    {
        "name": "C00lkidd hawk tuah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/c00lkidd-hawk-tuah.mp3"
    },
    {
        "name": "AUUGHHH",
        "color": "rgb(0, 33, 255)",
        "mp3": "/media/sounds/auughhh.mp3"
    },
    {
        "name": "Eww brother eww",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/eww-brother-eww.mp3"
    },
    {
        "name": "discord troll",
        "color": "rgb(0, 255, 17)",
        "mp3": "/media/sounds/mikejebait-3.mp3"
    },
    {
        "name": "FNAF Yay Children",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crowd_small_chil_ec049202_9klCwI6.mp3"
    },
    {
        "name": "SUBWAY SURFERS BASS BOOSTED",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/subway-surfers-bass-boosted.mp3"
    },
    {
        "name": "discordjoin",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-sounds.mp3"
    },
    {
        "name": "Cartoon Slip",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoonslip.mp3"
    },
    {
        "name": "Shut up!",
        "color": "rgb(204, 102, 153)",
        "mp3": "/media/sounds/shutup.swf.mp3"
    },
    {
        "name": "Fnaf 2 Hallway",
        "color": "rgb(94, 94, 94)",
        "mp3": "/media/sounds/hallway-ambiance-extended-five-nights-at-freddys-2-music.mp3"
    },
    {
        "name": "Doom Eternal",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/doom-eternal.mp3"
    },
    {
        "name": "English or Spanish Song",
        "color": "rgb(144, 212, 255)",
        "mp3": "/media/sounds/english-or-spanish-song.mp3"
    },
    {
        "name": "ta-da!",
        "color": "rgb(0, 145, 255)",
        "mp3": "/media/sounds/ta-da_yrvBrlS.mp3"
    },
    {
        "name": "The Price is Right Losing Horn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-price-is-right-losing-horn.mp3"
    },
    {
        "name": "Bad to the Bone Riff",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bad-to-the-bone.mp3"
    },
    {
        "name": "Friday the 13th: Chchch-Ahahah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/friday_the_13th_sound_effect_test_chchch_ahahah_ki_ki_ki_ma_ma_malistenvid.mp3"
    },
    {
        "name": "Punch Effect",
        "color": "rgb(59, 255, 0)",
        "mp3": "/media/sounds/punch_u4LmMsr.mp3"
    },
    {
        "name": "DEJA VU MEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/deja-vu.mp3"
    },
    {
        "name": "brain fart",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/brain-fart.mp3"
    },
    {
        "name": "sudden suspense",
        "color": "rgb(255, 251, 0)",
        "mp3": "/media/sounds/sudden-suspense-sound-effect.mp3"
    },
    {
        "name": "Snoop Dogg meme",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpbxydyrz3.mp3"
    },
    {
        "name": "FEIN FEIN FEIN FEIN",
        "color": "rgb(255, 154, 220)",
        "mp3": "/media/sounds/fein-fein-fein-fein.mp3"
    },
    {
        "name": "Tralalero Tralala Meme",
        "color": "rgb(159, 178, 197)",
        "mp3": "/media/sounds/tralalero-tralala-meme_R8mqoQo.mp3"
    },
    {
        "name": "wut",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/record-scratch-2.mp3"
    },
    {
        "name": "correct (ding)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ding-sound-effect_1.mp3"
    },
    {
        "name": "Noooo!",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/nooo.swf.mp3"
    },
    {
        "name": "We Got Him Meme Song Loud",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ladies-and-gentlemen-we-got-him-song.mp3"
    },
    {
        "name": "“Hello There” Obi Wan",
        "color": "rgb(90, 197, 255)",
        "mp3": "/media/sounds/obi-wan_says_hello_thereyoutubetomp4.mp3"
    },
    {
        "name": "Wet fart meme",
        "color": "rgb(109, 73, 20)",
        "mp3": "/media/sounds/wet-fart-meme.mp3"
    },
    {
        "name": "Mii Channel Music",
        "color": "rgb(213, 226, 255)",
        "mp3": "/media/sounds/mii-channel-music.mp3"
    },
    {
        "name": "Jogo do botão",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/psycho-scream-soundbible.mp3"
    },
    {
        "name": "Brrr brrr patapim",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/brrr-brrr-patapim.mp3"
    },
    {
        "name": "Slumber That Brother Gone",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/slumber-that-brother-gone-meme_pXziXJ1.mp3"
    },
    {
        "name": "discord cat scream",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/discord-cat-scream.mp3"
    },
    {
        "name": "Hell Naw Dog",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hell-naw-dog.mp3"
    },
    {
        "name": "hold up tiktok",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/hold-up-tiktok.mp3"
    },
    {
        "name": "I am Steve",
        "color": "rgb(48, 169, 255)",
        "mp3": "/media/sounds/i-am-steve.mp3"
    },
    {
        "name": "AUUGHHH",
        "color": "rgb(0, 33, 255)",
        "mp3": "/media/sounds/auughhh.mp3"
    },
    {
        "name": "Meow 1",
        "color": "rgb(202, 155, 0)",
        "mp3": "/media/sounds/meow-1.mp3"
    },
    {
        "name": "GET OUT Tuco",
        "color": "rgb(162, 69, 255)",
        "mp3": "/media/sounds/get-out-tuco.mp3"
    },
    {
        "name": "why are you gay",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/why-are-you-gay.mp3"
    },
    {
        "name": "I'm conquesting it",
        "color": "rgb(221, 221, 221)",
        "mp3": "/media/sounds/im-conquesting-it.mp3"
    },
    {
        "name": "hold up tiktok",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/hold-up-tiktok.mp3"
    },
    {
        "name": "EAGLE RAHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eagle-rahhh.mp3"
    },
    {
        "name": "Hey let her go!",
        "color": "rgb(42, 255, 0)",
        "mp3": "/media/sounds/let-her-go.mp3"
    },
    {
        "name": "frog laughing meme",
        "color": "rgb(255, 71, 224)",
        "mp3": "/media/sounds/frog-laughing-meme.mp3"
    },
    {
        "name": "BYE BYE! ~ Lumi Athena SFX",
        "color": "rgb(29, 29, 29)",
        "mp3": "/media/sounds/bye-bye-lumi-athena-sfx.mp3"
    },
    {
        "name": "JOJO SONG",
        "color": "rgb(255, 252, 90)",
        "mp3": "/media/sounds/jojos-golden-wind_kL2WElB.mp3"
    },
    {
        "name": "Bad to the Bone Riff",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bad-to-the-bone.mp3"
    },
    {
        "name": "GTA V - Wasted",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/gta-v-death-sound-effect-102.mp3"
    },
    {
        "name": "ta-da!",
        "color": "rgb(0, 145, 255)",
        "mp3": "/media/sounds/ta-da_yrvBrlS.mp3"
    },
    {
        "name": "tactical nuke incoming!!!",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/tactical-nuke.mp3"
    },
    {
        "name": "Friday the 13th: Chchch-Ahahah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/friday_the_13th_sound_effect_test_chchch_ahahah_ki_ki_ki_ma_ma_malistenvid.mp3"
    },
    {
        "name": "6'7",
        "color": "rgb(196, 255, 183)",
        "mp3": "/media/sounds/67.mp3"
    },
    {
        "name": "Дэпнуть мне",
        "color": "rgb(201, 255, 126)",
        "mp3": "/media/sounds/depnut-mne.mp3"
    },
    {
        "name": "Susie Laugh",
        "color": "rgb(167, 0, 255)",
        "mp3": "/media/sounds/susie-laugh.mp3"
    },
    {
        "name": "Wilhelm Scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/wilhelmscream.mp3"
    },
    {
        "name": "AMOGUS SCREAMING",
        "color": "rgb(255, 214, 49)",
        "mp3": "/media/sounds/guy-yelling-among-us-sound-effect.mp3"
    },
    {
        "name": "mr krabs walking",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mr-krabs-walking.mp3"
    },
    {
        "name": "Duck toy sound",
        "color": "rgb(255, 222, 9)",
        "mp3": "/media/sounds/duck-toy-sound.mp3"
    },
    {
        "name": "Lego Yoda Death Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lego-yoda-death-sound-effect.mp3"
    },
    {
        "name": "Directed by Robert B Weide",
        "color": "rgb(126, 255, 165)",
        "mp3": "/media/sounds/directed-by-robert-b_voI2Z4T.mp3"
    },
    {
        "name": "Tom scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/toms-screams.mp3"
    },
    {
        "name": "sonic ring",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/26f8b9_sonic_ring_sound_effect.mp3"
    },
    {
        "name": "DAMN!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/friday-damn.mp3"
    },
    {
        "name": "No no Wait Wait!",
        "color": "rgb(0, 255, 11)",
        "mp3": "/media/sounds/no-no-wait-wait.mp3"
    },
    {
        "name": "discord cat scream",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/discord-cat-scream.mp3"
    },
    {
        "name": "Cinematic Boom",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cinematicboom.mp3"
    },
    {
        "name": "Hell Naw Dog",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hell-naw-dog.mp3"
    },
    {
        "name": "\"My leg!\" Fish",
        "color": "rgb(255, 204, 0)",
        "mp3": "/media/sounds/my-leg_2.mp3"
    },
    {
        "name": "Keyboard Typing Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/keyboard-typing-sound-effect.mp3"
    },
    {
        "name": "om nom nom roblox",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-eating-sound-effect-nom-nom-nom.mp3"
    },
    {
        "name": "\"Fish!\" you, me, gas station clip",
        "color": "rgb(92, 129, 213)",
        "mp3": "/media/sounds/fish-you-me-gas-station-clip.mp3"
    },
    {
        "name": "oh my god, wow!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/omgwow.mp3"
    },
    {
        "name": "Hell Naw Dog",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hell-naw-dog.mp3"
    },
    {
        "name": "Keyboard Typing Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/keyboard-typing-sound-effect.mp3"
    },
    {
        "name": "\"My leg!\" Fish",
        "color": "rgb(255, 204, 0)",
        "mp3": "/media/sounds/my-leg_2.mp3"
    },
    {
        "name": "\"Fish!\" you, me, gas station clip",
        "color": "rgb(92, 129, 213)",
        "mp3": "/media/sounds/fish-you-me-gas-station-clip.mp3"
    },
    {
        "name": "пердеж",
        "color": "rgb(0, 255, 72)",
        "mp3": "/media/sounds/perdezh_YQ5l54B.mp3"
    },
    {
        "name": "roblox bye",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-bye.mp3"
    },
    {
        "name": "Wet fart meme",
        "color": "rgb(109, 73, 20)",
        "mp3": "/media/sounds/wet-fart-meme.mp3"
    },
    {
        "name": "FBI open UP",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fbi-open-up-sfx.mp3"
    },
    {
        "name": "oiia oiia Sound",
        "color": "rgb(136, 126, 36)",
        "mp3": "/media/sounds/oiia-oiia-sound.mp3"
    },
    {
        "name": "windows xp shutdown",
        "color": "rgb(102, 102, 255)",
        "mp3": "/media/sounds/preview_4.mp3"
    },
    {
        "name": "Slumber That Brother Gone",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/slumber-that-brother-gone-meme_pXziXJ1.mp3"
    },
    {
        "name": "Naruto Sad Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/naruto-sad-music-instant.mp3"
    },
    {
        "name": "the rock sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-rock-sound-effect.mp3"
    },
    {
        "name": "Стоны 250",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stony-250.mp3"
    },
    {
        "name": "discord join + leave sound 8 sec",
        "color": "rgb(212, 93, 255)",
        "mp3": "/media/sounds/discord_join_and_leave_sound_rapidly_zFIRVsY.mp3"
    },
    {
        "name": "bing chilling",
        "color": "rgb(41, 56, 134)",
        "mp3": "/media/sounds/bing-chilling_fcdGgUc.mp3"
    },
    {
        "name": "Electric Zoo",
        "color": "rgb(248, 255, 58)",
        "mp3": "/media/sounds/spongebob-squarepants-the-yellow-album-21-electric-zoo-audiotrimmer.mp3"
    },
    {
        "name": "Teleport sound",
        "color": "rgb(102, 204, 255)",
        "mp3": "/media/sounds/dbz-teleport.mp3"
    },
    {
        "name": "Crowd cheering",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/cheering.mp3"
    },
    {
        "name": "I Love Repo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-love-repo_ZkwBQrN.mp3"
    },
    {
        "name": "Звук литвина",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/zvuk-litvina.mp3"
    },
    {
        "name": "YOUR TAKING TOO LONG",
        "color": "rgb(255, 147, 53)",
        "mp3": "/media/sounds/your-taking-too-long.mp3"
    },
    {
        "name": "“Hello There” Obi Wan",
        "color": "rgb(90, 197, 255)",
        "mp3": "/media/sounds/obi-wan_says_hello_thereyoutubetomp4.mp3"
    },
    {
        "name": "X files",
        "color": "rgb(153, 153, 153)",
        "mp3": "/media/sounds/expedientes-secretos-x-musica22.mp3"
    },
    {
        "name": "Uncle Ruckus",
        "color": "rgb(142, 235, 255)",
        "mp3": "/media/sounds/uncle-ruckus.mp3"
    },
    {
        "name": "Sonic.exe scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sonic-exe-scream.mp3"
    },
    {
        "name": "daddys home",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/daddys-home.mp3"
    },
    {
        "name": "Mii Channel Music",
        "color": "rgb(213, 226, 255)",
        "mp3": "/media/sounds/mii-channel-music.mp3"
    },
    {
        "name": "wiwiwi kitten",
        "color": "rgb(114, 102, 123)",
        "mp3": "/media/sounds/wiwiwi-kitten.mp3"
    },
    {
        "name": "Clown Circus music",
        "color": "rgb(17, 231, 255)",
        "mp3": "/media/sounds/clown-circus-music.mp3"
    },
    {
        "name": "JAWS THEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jaws-theme_TDORPKA.mp3"
    },
    {
        "name": "UwU daddy~",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/uwu-daddy_1P3wrjJ.mp3"
    },
    {
        "name": "Нет иди нахуй",
        "color": "rgb(120, 155, 25)",
        "mp3": "/media/sounds/net-idi-nakhui.mp3"
    },
    {
        "name": "Minecraft Villager Sound",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/minecraft-villager-sound-effect.mp3"
    },
    {
        "name": "SPONGEBOB A FEW MOMENTS LATER",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/a-few-moments-later-hd.mp3"
    },
    {
        "name": "uwu discord gorl",
        "color": "rgb(252, 204, 255)",
        "mp3": "/media/sounds/uwu-discord-gorl.mp3"
    },
    {
        "name": "metal gear alert sound effect",
        "color": "rgb(127, 185, 255)",
        "mp3": "/media/sounds/metal-gear-alert-sound-effect_XKoHReZ.mp3"
    },
    {
        "name": "uwu discord gorl",
        "color": "rgb(252, 204, 255)",
        "mp3": "/media/sounds/uwu-discord-gorl.mp3"
    },
    {
        "name": "randy march",
        "color": "rgb(255, 104, 250)",
        "mp3": "/media/sounds/randy-march.mp3"
    },
    {
        "name": "Minecraft drinking sound",
        "color": "rgb(0, 255, 13)",
        "mp3": "/media/sounds/minecraft-drinking-sound-effect.mp3"
    },
    {
        "name": "Camera Flash Sound Effect",
        "color": "rgb(255, 132, 224)",
        "mp3": "/media/sounds/camera-flash-sound-effect.mp3"
    },
    {
        "name": "sitcom laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sitcom-laughing-1.mp3"
    },
    {
        "name": "Technoloyia Technologia Tecnologia",
        "color": "rgb(117, 255, 151)",
        "mp3": "/media/sounds/technoloyia-technologia-tecnologia.mp3"
    },
    {
        "name": "Zelda - Item Get",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/139-item-catch.mp3"
    },
    {
        "name": "Fart Effect",
        "color": "rgb(50, 255, 112)",
        "mp3": "/media/sounds/09037.mp3"
    },
    {
        "name": "Family Feud YES Ding",
        "color": "rgb(0, 163, 2)",
        "mp3": "/media/sounds/family-feud-good-answer.mp3"
    },
    {
        "name": "Thank You For Your Patronage",
        "color": "rgb(255, 217, 63)",
        "mp3": "/media/sounds/thank-you-for-your-patronage.mp3"
    },
    {
        "name": "“Mwahahaha”",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mwahahaha.mp3"
    },
    {
        "name": "Mentality",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mentality.mp3"
    },
    {
        "name": "Gerson Laugh",
        "color": "rgb(19, 143, 23)",
        "mp3": "/media/sounds/gerson-laugh.mp3"
    },
    {
        "name": "Pikmin!",
        "color": "rgb(93, 84, 84)",
        "mp3": "/media/sounds/pikmin-gcn.mp3"
    },
    {
        "name": "iPhone Notification",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/notification_o14egLP.mp3"
    },
    {
        "name": "Service Bell (2)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stupid-f__king-bird.mp3"
    },
    {
        "name": "Gotcha Bit** by Dave Chapelle",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gotcha-bit-by-dave-chapelle.mp3"
    },
    {
        "name": "kanye-east-fortnite-balls",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kanye-east-fortnite-balls_NguabuF.mp3"
    },
    {
        "name": "quack.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/quack_5.mp3"
    },
    {
        "name": "Spongebob disappointed",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-disappointed-sound-effect.mp3"
    },
    {
        "name": "GUNSHOT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunshot1-connor_p-8650_hifi.mp3"
    },
    {
        "name": "eh?eh?ehhhh?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eh-eh-ehhhh.mp3"
    },
    {
        "name": "he fucked up!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/he-fucked-up.mp3"
    },
    {
        "name": "Law and Order DUN DUN",
        "color": "rgb(204, 153, 102)",
        "mp3": "/media/sounds/dun_dun_1.mp3"
    },
    {
        "name": "Swoosh Sound Effects",
        "color": "rgb(64, 51, 255)",
        "mp3": "/media/sounds/swoosh-sound-effects.mp3"
    },
    {
        "name": "noo la policia",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/noo-la-policia.mp3"
    },
    {
        "name": "Tusk CHIMIMI!",
        "color": "rgb(255, 128, 198)",
        "mp3": "/media/sounds/tusk-chimimi.mp3"
    },
    {
        "name": "Hyper-Reallistic Knocking",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/crazy-realistic-knocking-sound-trim.mp3"
    },
    {
        "name": "Lightskin Rizz (Sin City)",
        "color": "rgb(156, 153, 207)",
        "mp3": "/media/sounds/lightskin-rizz-sin-city.mp3"
    },
    {
        "name": "hitmarker.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hitmarker_2.mp3"
    },
    {
        "name": "Cartoon Bite",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoon_bite_sound_effect.mp3"
    },
    {
        "name": "he he he ha clash royale (DEEP FRIED)",
        "color": "rgb(88, 85, 255)",
        "mp3": "/media/sounds/he-he-he-ha-clash-royale-deep-fried.mp3"
    },
    {
        "name": "BRR BRR PATAPIM",
        "color": "rgb(255, 164, 164)",
        "mp3": "/media/sounds/brr-brr-patapim.mp3"
    },
    {
        "name": "Get Out [MEMES}",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/get-out-memes.mp3"
    },
    {
        "name": "Corrupt Nature! (c00lkidd)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/corrupt-nature-c00lkidd.mp3"
    },
    {
        "name": "skibidi toilet",
        "color": "rgb(226, 247, 255)",
        "mp3": "/media/sounds/skibidi-toilet.mp3"
    },
    {
        "name": "bass drop sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bass-drop-edit_mixdown.mp3"
    },
    {
        "name": "TF2 Critical hit",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/critical-hit-sounds-effect.mp3"
    },
    {
        "name": "Grindr Sound",
        "color": "rgb(204, 204, 0)",
        "mp3": "/media/sounds/grindr-notification-sound.mp3"
    },
    {
        "name": "Load and Gunshot Fire",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunshot-one.mp3"
    },
    {
        "name": "SEND THEM TO THE SLAUGHTERHOUSE REEEEEEEEEEEEEEE",
        "color": "rgb(217, 0, 0)",
        "mp3": "/media/sounds/send-them-to-the-slaughterhouse-reeeeeeeeeeeeeee.mp3"
    },
    {
        "name": "Minecraft Hurt",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/classic_hurt.mp3"
    },
    {
        "name": "Smoke alarm beep",
        "color": "rgb(0, 26, 255)",
        "mp3": "/media/sounds/smoke-alarm-beep.mp3"
    },
    {
        "name": "Re:Zero Return by Death",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/re-zero-return-by-death.mp3"
    },
    {
        "name": "Ankle breaker",
        "color": "rgb(255, 136, 0)",
        "mp3": "/media/sounds/ankle-breaker_j3Df0TU.mp3"
    },
    {
        "name": "The Nut Button",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nut_ZKo5FA9.mp3"
    },
    {
        "name": "R2D2 SCREAM",
        "color": "rgb(0, 0, 204)",
        "mp3": "/media/sounds/r2d2_scream_converted.mp3"
    },
    {
        "name": "spongebob laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-laughing-sound-effect.mp3"
    },
    {
        "name": "Metal Pipe Falling Sound Effect",
        "color": "rgb(87, 69, 96)",
        "mp3": "/media/sounds/metal-pipe-falling-sound-effect.mp3"
    },
    {
        "name": "♥︎~Yamete Kudasai~♥︎",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/yamete-kudasai_gxXaCWn.mp3"
    },
    {
        "name": "backgroundmusic",
        "color": "rgb(199, 185, 255)",
        "mp3": "/media/sounds/backgroundmusic.mp3"
    },
    {
        "name": "Fortnite default dance bass boost",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fortnite-default-dance-bass-boosted.mp3"
    },
    {
        "name": "Nuclear Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nuclear-fart-1.mp3"
    },
    {
        "name": "Kids Cheering",
        "color": "rgb(0, 204, 0)",
        "mp3": "/media/sounds/kids_cheering.mp3"
    },
    {
        "name": "Super Mario Death",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-mario-death-sound-sound-effect.mp3"
    },
    {
        "name": "TF2 Scout Metal Bat",
        "color": "rgb(0, 221, 255)",
        "mp3": "/media/sounds/bat_hit.mp3"
    },
    {
        "name": "McDonalds Beeping Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mcdonalds-beeping-sound.mp3"
    },
    {
        "name": "UwU mommy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/uwu-mommy_dP6eEG8.mp3"
    },
    {
        "name": "We Can Be Bees",
        "color": "rgb(255, 230, 0)",
        "mp3": "/media/sounds/we-can-be-bees.mp3"
    },
    {
        "name": "To be Continued (jojo)",
        "color": "rgb(204, 153, 51)",
        "mp3": "/media/sounds/untitled_1071.mp3"
    },
    {
        "name": "YEET",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yeet-sound-effect.mp3"
    },
    {
        "name": "Among us",
        "color": "rgb(138, 255, 29)",
        "mp3": "/media/sounds/among.mp3"
    },
    {
        "name": "You What?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-what-spongebob.mp3"
    },
    {
        "name": "Here Comes The Money",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/money_2.mp3"
    },
    {
        "name": "Pookie Bear",
        "color": "rgb(255, 0, 200)",
        "mp3": "/media/sounds/pookie-bear.mp3"
    },
    {
        "name": "TF2 - Frying Pan",
        "color": "rgb(51, 51, 51)",
        "mp3": "/media/sounds/melee_frying_pan_01.mp3"
    },
    {
        "name": "RAAAAH",
        "color": "rgb(255, 84, 84)",
        "mp3": "/media/sounds/raaaah.mp3"
    },
    {
        "name": "invincible title car sound",
        "color": "rgb(255, 254, 50)",
        "mp3": "/media/sounds/invincible-title-car-sound.mp3"
    },
    {
        "name": "Spongebob fog horn",
        "color": "rgb(69, 47, 9)",
        "mp3": "/media/sounds/spongebob-fog-horn.mp3"
    },
    {
        "name": "squidward walking sound",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/squidward-walking-sound.mp3"
    },
    {
        "name": "CINEMATIC SUSPENSE RISER",
        "color": "rgb(132, 66, 255)",
        "mp3": "/media/sounds/cinematic-suspense-riser.mp3"
    },
    {
        "name": "Pookie Bear",
        "color": "rgb(255, 0, 200)",
        "mp3": "/media/sounds/pookie-bear.mp3"
    },
    {
        "name": "squidward walking sound",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/squidward-walking-sound.mp3"
    },
    {
        "name": "RAAAAH",
        "color": "rgb(255, 84, 84)",
        "mp3": "/media/sounds/raaaah.mp3"
    },
    {
        "name": "COD Zombies Evil Laugh",
        "color": "rgb(0, 108, 13)",
        "mp3": "/media/sounds/cod-zombies-evil-laugh.mp3"
    },
    {
        "name": "yes king teach me",
        "color": "rgb(251, 255, 52)",
        "mp3": "/media/sounds/yes-king-teach-me.mp3"
    },
    {
        "name": "undertale - sans talking",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/just-sans-talking.mp3"
    },
    {
        "name": "Twitch Alert",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/for-inspiration-twitch_hitbox-alert-sound-normal-donation-sound-youtube.mp3"
    },
    {
        "name": "CINEMATIC SUSPENSE RISER",
        "color": "rgb(132, 66, 255)",
        "mp3": "/media/sounds/cinematic-suspense-riser.mp3"
    },
    {
        "name": "зайка давай",
        "color": "rgb(240, 41, 255)",
        "mp3": "/media/sounds/zaika-davai.mp3"
    },
    {
        "name": "Princess Peach Moans",
        "color": "rgb(255, 0, 188)",
        "mp3": "/media/sounds/princess-peach-moans.mp3"
    },
    {
        "name": "erm what the sigma",
        "color": "rgb(117, 187, 255)",
        "mp3": "/media/sounds/erm-what-the-sigma_su7GnzC.mp3"
    },
    {
        "name": "Cartoon run take off",
        "color": "rgb(51, 255, 59)",
        "mp3": "/media/sounds/take-off_2YqCEjc.mp3"
    },
    {
        "name": "Boxing Bell",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/boxing-bell.mp3"
    },
    {
        "name": "Ultra Instinct",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ultra-instinct-theme-official-version.mp3"
    },
    {
        "name": "slap31",
        "color": "rgb(255, 20, 20)",
        "mp3": "/media/sounds/slap-sound-effect-free.mp3"
    },
    {
        "name": "roblox horror",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/do-not-open.mp3"
    },
    {
        "name": "help me!",
        "color": "rgb(173, 0, 0)",
        "mp3": "/media/sounds/2020-10-29-21-41-22.mp3"
    },
    {
        "name": "Cartoon boing sfx",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoon-boing_7vRWDlc.mp3"
    },
    {
        "name": "punch sound effect meme",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/punch-sound-effect-meme.mp3"
    },
    {
        "name": "Ching Cheng Hanji",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/ching-cheng-hanji.mp3"
    },
    {
        "name": "star wars Seismic charge",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/star-wars-seismic-charge.mp3"
    },
    {
        "name": "adrian explain our friend group",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/adrian-explain-our-friend-group.mp3"
    },
    {
        "name": "Eagle Screech",
        "color": "rgb(43, 119, 50)",
        "mp3": "/media/sounds/eagle-screech.mp3"
    },
    {
        "name": "Oi Oi! Forsaken",
        "color": "rgb(4, 90, 3)",
        "mp3": "/media/sounds/oi-oi-forsaken.mp3"
    },
    {
        "name": "(mafioso) i love knocking out teeth",
        "color": "rgb(6, 0, 0)",
        "mp3": "/media/sounds/mafioso-i-love-knocking-out-teeth.mp3"
    },
    {
        "name": "niggeralarm",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/niggeralarm_HRJ9stz.mp3"
    },
    {
        "name": "Careless Whisper",
        "color": "rgb(153, 255, 204)",
        "mp3": "/media/sounds/careless_whispers.mp3"
    },
    {
        "name": "Clown Horn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/clown-horn-sound-effect_1.mp3"
    },
    {
        "name": "yoshi tongue",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/yoshi-tongue.mp3"
    },
    {
        "name": "You Are My Sunshine Lebron James",
        "color": "rgb(241, 255, 180)",
        "mp3": "/media/sounds/you-are-my-sunshine-lebron-james.mp3"
    },
    {
        "name": "wee weee weee",
        "color": "rgb(49, 255, 221)",
        "mp3": "/media/sounds/weeeee_original_1193597514938524841.mp3"
    },
    {
        "name": "Sonic.EXE laugh",
        "color": "rgb(17, 45, 255)",
        "mp3": "/media/sounds/sonic-exe-laugh.mp3"
    },
    {
        "name": "app",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aplausos_3.mp3"
    },
    {
        "name": "GULP GULP GULP",
        "color": "rgb(255, 0, 208)",
        "mp3": "/media/sounds/gulp-gulp-gulp.mp3"
    },
    {
        "name": "Nani FULL",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nani-meme-sound-effect.mp3"
    },
    {
        "name": "Victory Screech - Spongebob",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/victoryscreech.mp3"
    },
    {
        "name": "Доброе утро моя девочка",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/dobroe-utro-moia-devochka.mp3"
    },
    {
        "name": "moanlol",
        "color": "rgb(1, 255, 219)",
        "mp3": "/media/sounds/moanlol.mp3"
    },
    {
        "name": "Oh brother this guy STINKS spongebob",
        "color": "rgb(44, 149, 255)",
        "mp3": "/media/sounds/oh-brother-this-guy-stinks_FFdigtm.mp3"
    },
    {
        "name": "Som do Zap Zap estourado",
        "color": "rgb(3, 250, 63)",
        "mp3": "/media/sounds/som-do-zap-zap-estourado.mp3"
    },
    {
        "name": "Roblox Gravity Coil",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-gravity-coil.mp3"
    },
    {
        "name": "Munch (eating / biting)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/munch-sound-effect.mp3"
    },
    {
        "name": "shocking!",
        "color": "rgb(146, 239, 255)",
        "mp3": "/media/sounds/shocking_0NL2w3I.mp3"
    },
    {
        "name": "Арматура",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/armatura_P29FH2w.mp3"
    },
    {
        "name": "RickRoll Tralalero Tralala",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rickroll-tralalero-tralala.mp3"
    },
    {
        "name": "eunoia cake!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eunoia-cake.mp3"
    },
    {
        "name": "Discord Leaving",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/discord_leave_sound_effect_download.mp3"
    },
    {
        "name": "You Not Worthy Of My Nut",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-not-worthy-of-my-nut.mp3"
    },
    {
        "name": "Got a Item BOTW",
        "color": "rgb(36, 101, 3)",
        "mp3": "/media/sounds/zelda_-botw-item-get-sound-effect_360p-online-audio-converter.mp3"
    },
    {
        "name": "Coffin Dance Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate-mp3cut_sRzY6rh.mp3"
    },
    {
        "name": "Disappear",
        "color": "rgb(161, 160, 255)",
        "mp3": "/media/sounds/disappear.mp3"
    },
    {
        "name": "Popular Riser metallic sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/popular-riser-metallic-sound-effect.mp3"
    },
    {
        "name": "N word not complete",
        "color": "rgb(46, 31, 0)",
        "mp3": "/media/sounds/n-word-not-complete.mp3"
    },
    {
        "name": "Adit tolongin dit",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/adit-tolongin-dit.mp3"
    },
    {
        "name": "c00lkidd theme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/c00lkidd-theme.mp3"
    },
    {
        "name": "jojo - ayayay",
        "color": "rgb(255, 197, 60)",
        "mp3": "/media/sounds/jojos-bizarre-adventure-ay-ay-ay-ay-_-sound-effect.mp3"
    },
    {
        "name": "WHAT DID HE SAY",
        "color": "rgb(68, 247, 255)",
        "mp3": "/media/sounds/5s_to_7s_what_did_he_say_tik_tok.mp3"
    },
    {
        "name": "Angry Indian Scammer",
        "color": "rgb(0, 255, 227)",
        "mp3": "/media/sounds/getfromytcom-the-angriest-scamme-1.mp3"
    },
    {
        "name": "Sharingan",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/collen-eyes-efect.mp3"
    },
    {
        "name": "toilet sounds",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/video0_czt1xZo.mp3"
    },
    {
        "name": "Stand Ready For My Arrival Worm",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/stand-ready-for-my-arrival-worm.mp3"
    },
    {
        "name": "Knock 3D",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/knock-3d.mp3"
    },
    {
        "name": "turbopaja",
        "color": "rgb(169, 255, 84)",
        "mp3": "/media/sounds/turbopaja.mp3"
    },
    {
        "name": "u just got lancered",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/u-just-got-lancered.mp3"
    },
    {
        "name": "you made me laugh salty boy(persian)",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpwsqcqsyf.mp3"
    },
    {
        "name": "Roblox Sword",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/roblox-sword.mp3"
    },
    {
        "name": "Groan Tube 2",
        "color": "rgb(0, 102, 255)",
        "mp3": "/media/sounds/groan-tube-2_xK05nvu.mp3"
    },
    {
        "name": "Cupcakke Gulp Gulp Gulp (fast)",
        "color": "rgb(187, 0, 255)",
        "mp3": "/media/sounds/cupcakke-gulp-gulp-gulp-fast.mp3"
    },
    {
        "name": "Goofy Yell",
        "color": "rgb(51, 102, 255)",
        "mp3": "/media/sounds/goofy-yell.mp3"
    },
    {
        "name": "FNAF Balloon Boy Hello",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/echo3b.mp3"
    },
    {
        "name": "Bo-womp",
        "color": "rgb(255, 239, 82)",
        "mp3": "/media/sounds/bo-womp.mp3"
    },
    {
        "name": "WEAVE",
        "color": "rgb(132, 0, 255)",
        "mp3": "/media/sounds/weave.mp3"
    },
    {
        "name": "WHAT DID HE SAY",
        "color": "rgb(68, 247, 255)",
        "mp3": "/media/sounds/5s_to_7s_what_did_he_say_tik_tok.mp3"
    },
    {
        "name": "instant transmission",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/dragon_ball_z_tele.mp3"
    },
    {
        "name": "Homelander going crazy angry violin theme song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/homelander-going-crazy-angry-violin-theme-song.mp3"
    },
    {
        "name": "Got a Item BOTW",
        "color": "rgb(36, 101, 3)",
        "mp3": "/media/sounds/zelda_-botw-item-get-sound-effect_360p-online-audio-converter.mp3"
    },
    {
        "name": "su hijo esta viendo nopor",
        "color": "rgb(255, 81, 214)",
        "mp3": "/media/sounds/1_fD2Qond.mp3"
    },
    {
        "name": "N word not complete",
        "color": "rgb(46, 31, 0)",
        "mp3": "/media/sounds/n-word-not-complete.mp3"
    },
    {
        "name": "Crickets",
        "color": "rgb(51, 153, 0)",
        "mp3": "/media/sounds/crickets.swf.mp3"
    },
    {
        "name": "Mario screaming 1",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpcoj3v_01.mp3"
    },
    {
        "name": "Minecraft XP Sound",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/orb.mp3"
    },
    {
        "name": "Angry Indian Scammer",
        "color": "rgb(0, 255, 227)",
        "mp3": "/media/sounds/getfromytcom-the-angriest-scamme-1.mp3"
    },
    {
        "name": "Sharingan",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/collen-eyes-efect.mp3"
    },
    {
        "name": "Roblox Sword",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/roblox-sword.mp3"
    },
    {
        "name": "Among us Imposter Reveal SE",
        "color": "rgb(221, 0, 0)",
        "mp3": "/media/sounds/among-us-imposter-reveal-se.mp3"
    },
    {
        "name": "Adit tolongin dit",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/adit-tolongin-dit.mp3"
    },
    {
        "name": "u just got lancered",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/u-just-got-lancered.mp3"
    },
    {
        "name": "CS - Holy shit",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/holy-shit.mp3"
    },
    {
        "name": "Stand Ready For My Arrival Worm",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/stand-ready-for-my-arrival-worm.mp3"
    },
    {
        "name": "POU ESTOURADO",
        "color": "rgb(255, 210, 73)",
        "mp3": "/media/sounds/pou-estourado_zIWCpMy.mp3"
    },
    {
        "name": "Knock 3D",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/knock-3d.mp3"
    },
    {
        "name": "1738 song",
        "color": "rgb(223, 255, 219)",
        "mp3": "/media/sounds/1738-song.mp3"
    },
    {
        "name": "Man screaming aaaah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/man-screaming-aaaah.mp3"
    },
    {
        "name": "turbopaja",
        "color": "rgb(169, 255, 84)",
        "mp3": "/media/sounds/turbopaja.mp3"
    },
    {
        "name": "you made me laugh salty boy(persian)",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpwsqcqsyf.mp3"
    },
    {
        "name": "Hey listen !",
        "color": "rgb(51, 153, 255)",
        "mp3": "/media/sounds/hey_listen.mp3"
    },
    {
        "name": "Windows XP - Startup Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/windows-xp-startup.mp3"
    },
    {
        "name": "FNAF Balloon Boy Hello",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/echo3b.mp3"
    },
    {
        "name": "Groan Tube 2",
        "color": "rgb(0, 102, 255)",
        "mp3": "/media/sounds/groan-tube-2_xK05nvu.mp3"
    },
    {
        "name": "Cupcakke Gulp Gulp Gulp (fast)",
        "color": "rgb(187, 0, 255)",
        "mp3": "/media/sounds/cupcakke-gulp-gulp-gulp-fast.mp3"
    },
    {
        "name": "Why are you running?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/why-are.mp3"
    },
    {
        "name": "Pokemon-Level Up!",
        "color": "rgb(0, 255, 204)",
        "mp3": "/media/sounds/12_3.mp3"
    },
    {
        "name": "BOING . MP3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/boing_lmke36X.mp3"
    },
    {
        "name": "Super Saiyan Aura",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/saiyan.mp3"
    },
    {
        "name": "Violin screech meme",
        "color": "rgb(71, 255, 83)",
        "mp3": "/media/sounds/violin-screech-meme.mp3"
    },
    {
        "name": "Scary Tiktok Music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scary-tiktok-music.mp3"
    },
    {
        "name": "Loud Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart_2.mp3"
    },
    {
        "name": "Knocked Player Fortnite",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ui-negative-alert.mp3"
    },
    {
        "name": "Anime Girl \"Senpai!\"",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/anime-girl-senpai.mp3"
    },
    {
        "name": "PUMP SHOTGUN FORTNITE LOUD",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pump-shotgun-fortnite-loud.mp3"
    },
    {
        "name": "Uncle ruckus GUILTY",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/uncle-ruckus-guilty.mp3"
    },
    {
        "name": "LET ME KNOWWWWWW",
        "color": "rgb(255, 33, 236)",
        "mp3": "/media/sounds/let-me-knowwwwww.mp3"
    },
    {
        "name": "Stop the Cap",
        "color": "rgb(79, 255, 211)",
        "mp3": "/media/sounds/zias-stop-the-cap_RjHQpxU.mp3"
    },
    {
        "name": "Mario screaming 1",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpcoj3v_01.mp3"
    },
    {
        "name": "PACKING LOUDEST",
        "color": "rgb(94, 0, 0)",
        "mp3": "/media/sounds/packing-loudest.mp3"
    },
    {
        "name": "Roblox Sword",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/roblox-sword.mp3"
    },
    {
        "name": "moan1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/moan1_65z8lB1.mp3"
    },
    {
        "name": "WTF BOOM!",
        "color": "rgb(255, 153, 204)",
        "mp3": "/media/sounds/wtf_boom.mp3"
    },
    {
        "name": "windows xp21",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/windows-xp-startup_1ph012N.mp3"
    },
    {
        "name": "Victory Screech - Spongebob",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/victoryscreech.mp3"
    },
    {
        "name": "WHAT DID HE SAY",
        "color": "rgb(68, 247, 255)",
        "mp3": "/media/sounds/5s_to_7s_what_did_he_say_tik_tok.mp3"
    },
    {
        "name": "Goku Yelling",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/gokuyelling.mp3"
    },
    {
        "name": "bfdi scream",
        "color": "rgb(103, 255, 141)",
        "mp3": "/media/sounds/the_bfdi_scream.mp3"
    },
    {
        "name": "Among us Imposter Reveal SE",
        "color": "rgb(221, 0, 0)",
        "mp3": "/media/sounds/among-us-imposter-reveal-se.mp3"
    },
    {
        "name": "moanlol",
        "color": "rgb(1, 255, 219)",
        "mp3": "/media/sounds/moanlol.mp3"
    },
    {
        "name": "HitlerSpeechThijs",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hitlerspeechthijs.mp3"
    },
    {
        "name": "jojo - ayayay",
        "color": "rgb(255, 197, 60)",
        "mp3": "/media/sounds/jojos-bizarre-adventure-ay-ay-ay-ay-_-sound-effect.mp3"
    },
    {
        "name": "Wah wah wah waaaaaaaahhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wah-wah-sound-effect.mp3"
    },
    {
        "name": "Super Saiyan Aura",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/saiyan.mp3"
    },
    {
        "name": "You Know the Rules, Say Goodbye",
        "color": "rgb(193, 0, 0)",
        "mp3": "/media/sounds/you-know-the-rules-and-so-do-i-say-goodbye.mp3"
    },
    {
        "name": "suspense pan",
        "color": "rgb(255, 37, 37)",
        "mp3": "/media/sounds/suspense-1_bLEXV6f.mp3"
    },
    {
        "name": "goofy ahh laugh meme",
        "color": "rgb(240, 255, 0)",
        "mp3": "/media/sounds/goofy-ahh-laugh-meme.mp3"
    },
    {
        "name": "Homelander going crazy angry violin theme song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/homelander-going-crazy-angry-violin-theme-song.mp3"
    },
    {
        "name": "1738 song",
        "color": "rgb(223, 255, 219)",
        "mp3": "/media/sounds/1738-song.mp3"
    },
    {
        "name": "Adit tolongin dit",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/adit-tolongin-dit.mp3"
    },
    {
        "name": "Talking ben saying ben",
        "color": "rgb(255, 231, 133)",
        "mp3": "/media/sounds/talking-ben-saying-ben.mp3"
    },
    {
        "name": "Pokemon-Level Up!",
        "color": "rgb(0, 255, 204)",
        "mp3": "/media/sounds/12_3.mp3"
    },
    {
        "name": "cod zombies scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/call-of-duty-zombie-yell-meme-sound-effect.mp3"
    },
    {
        "name": "scout scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/screaming-scout.mp3"
    },
    {
        "name": "POU ESTOURADO",
        "color": "rgb(255, 210, 73)",
        "mp3": "/media/sounds/pou-estourado_zIWCpMy.mp3"
    },
    {
        "name": "Man screaming aaaah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/man-screaming-aaaah.mp3"
    },
    {
        "name": "Deltarune Weapons Pull",
        "color": "rgb(0, 0, 255)",
        "mp3": "/media/sounds/deltarune-weapons-pull.mp3"
    },
    {
        "name": "eunoia cake!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eunoia-cake.mp3"
    },
    {
        "name": "Darth Vader NOOOOOOOOO!",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/nooo.mp3"
    },
    {
        "name": "WTF BOOM!",
        "color": "rgb(255, 153, 204)",
        "mp3": "/media/sounds/wtf_boom.mp3"
    },
    {
        "name": "Darth Vader NOOOOOOOOO!",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/nooo.mp3"
    },
    {
        "name": "DAMN SON, WHERE'D YA FIND THIS",
        "color": "rgb(0, 0, 204)",
        "mp3": "/media/sounds/damn-son-whered-you-find-this.mp3"
    },
    {
        "name": "FAIL SOUND MEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fail-sound-effect.mp3"
    },
    {
        "name": "World's Smallest Violin",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/worlds-smallest-violin.mp3"
    },
    {
        "name": "Mario Star Power",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-mario-bros-nes-music-star-theme-cut-mp3.mp3"
    },
    {
        "name": "Android Notification Bass Boosted",
        "color": "rgb(0, 255, 9)",
        "mp3": "/media/sounds/android-sound-effect-meme_tcbuori.mp3"
    },
    {
        "name": "Discord Ping",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord_ping_sound_effect.mp3"
    },
    {
        "name": "Rust Headshot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eaolwpzhgsba.mp3"
    },
    {
        "name": "Scary Maze Game Scream Sound",
        "color": "rgb(0, 255, 247)",
        "mp3": "/media/sounds/final_60108db6919bc200b087a3a2_239343.mp3"
    },
    {
        "name": "Crickets = MattHQ",
        "color": "rgb(153, 204, 102)",
        "mp3": "/media/sounds/crickets-hq.mp3"
    },
    {
        "name": "PUMP SHOTGUN FORTNITE LOUD",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pump-shotgun-fortnite-loud.mp3"
    },
    {
        "name": "spongebob walk",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/spongebob-walk.mp3"
    },
    {
        "name": "Loud Explosion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/loud-explosion.mp3"
    },
    {
        "name": "magic fairy",
        "color": "rgb(136, 224, 255)",
        "mp3": "/media/sounds/magic-fairy.mp3"
    },
    {
        "name": "she was a fairy",
        "color": "rgb(104, 150, 255)",
        "mp3": "/media/sounds/she-was-a-fairy.mp3"
    },
    {
        "name": "Hog riders niggers",
        "color": "rgb(46, 31, 23)",
        "mp3": "/media/sounds/hog-riders-niggers.mp3"
    },
    {
        "name": "Rimshot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/badumtss.swf.mp3"
    },
    {
        "name": "FNaF Golden Freddy Scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/full-golden-freddy-scream.mp3"
    },
    {
        "name": "Cartoon Hammer",
        "color": "rgb(235, 255, 71)",
        "mp3": "/media/sounds/cartoon-hammer.mp3"
    },
    {
        "name": "Sponge Bob Disgusting",
        "color": "rgb(211, 199, 0)",
        "mp3": "/media/sounds/sponge-bob-disgusting.mp3"
    },
    {
        "name": "YOU NEED TO LEAVE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-need-to-leave.mp3"
    },
    {
        "name": "Arcade Craniacs sfx lol",
        "color": "rgb(101, 0, 0)",
        "mp3": "/media/sounds/arcade-craniacs-sfx-lol.mp3"
    },
    {
        "name": "I wanna run away Roblox meme",
        "color": "rgb(160, 40, 255)",
        "mp3": "/media/sounds/i-wanna-run-away-roblox-meme.mp3"
    },
    {
        "name": "My Name Is Jeff",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/ringtone_20.mp3"
    },
    {
        "name": "WOW! (Happy - Fairy Tail)",
        "color": "rgb(0, 102, 204)",
        "mp3": "/media/sounds/wow_2.mp3"
    },
    {
        "name": "Stop the Cap",
        "color": "rgb(79, 255, 211)",
        "mp3": "/media/sounds/zias-stop-the-cap_RjHQpxU.mp3"
    },
    {
        "name": "Bye have a great time!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bye-have-a-great-time.mp3"
    },
    {
        "name": "Galaxy brain meme",
        "color": "rgb(168, 245, 255)",
        "mp3": "/media/sounds/galaxy-brain-meme.mp3"
    },
    {
        "name": "Mouse Click",
        "color": "rgb(123, 57, 205)",
        "mp3": "/media/sounds/clicksoundeffect.mp3"
    },
    {
        "name": "Car Crash SFX",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/car-crash_OwBDipR.mp3"
    },
    {
        "name": "random.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/random-mp3.mp3"
    },
    {
        "name": "crowd gasp",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gasp_SJHmiqB.mp3"
    },
    {
        "name": "pizza roblox",
        "color": "rgb(211, 255, 108)",
        "mp3": "/media/sounds/trim_7tpktqR.mp3"
    },
    {
        "name": "scout scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/screaming-scout.mp3"
    },
    {
        "name": "meow meow meow tiktok",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meow-meow-meow-tiktok.mp3"
    },
    {
        "name": "(mafioso) just shut up and rage quit",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-just-shut-up-and-rage-quit.mp3"
    },
    {
        "name": "ANDREW NEGER",
        "color": "rgb(80, 72, 55)",
        "mp3": "/media/sounds/andrew-neger.mp3"
    },
    {
        "name": "Valorant spike plant",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/valorant-spike-plant.mp3"
    },
    {
        "name": "THINK FAST CHUCKLENUTS",
        "color": "rgb(255, 11, 11)",
        "mp3": "/media/sounds/think-fast-chucklenuts_3ATncZo.mp3"
    },
    {
        "name": "Rust Headshot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eaolwpzhgsba.mp3"
    },
    {
        "name": "spongebob walk",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/spongebob-walk.mp3"
    },
    {
        "name": "Buzzer error",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/buzzer-error.mp3"
    },
    {
        "name": "Jason sound effect",
        "color": "rgb(75, 0, 0)",
        "mp3": "/media/sounds/jason-sound-effect.mp3"
    },
    {
        "name": "Мы пидоры",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/my-pidory.mp3"
    },
    {
        "name": "Capuccino Assasino (Italian Brainrot)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/capuccino-assasino-italian-brainrot.mp3"
    },
    {
        "name": "its so nice to see you dad (c00lkidd) Forsaken",
        "color": "rgb(151, 0, 0)",
        "mp3": "/media/sounds/its-so-nice-to-see-you-dad-c00lkidd-forsaken.mp3"
    },
    {
        "name": "Groan Tube 2",
        "color": "rgb(0, 102, 255)",
        "mp3": "/media/sounds/groan-tube-2_xK05nvu.mp3"
    },
    {
        "name": "turbopaja",
        "color": "rgb(169, 255, 84)",
        "mp3": "/media/sounds/turbopaja.mp3"
    },
    {
        "name": "you made me laugh salty boy(persian)",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpwsqcqsyf.mp3"
    },
    {
        "name": "Oh Hell No (Vine)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-hell-no-sound-effect-free-download.mp3"
    },
    {
        "name": "fnaf 2 scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/five-nights-at-freddys-2-full-scream-sound.mp3"
    },
    {
        "name": "[FNAF] 6 AM",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/five-nights-at-freddys-6-am.mp3"
    },
    {
        "name": "goofy ahh runnin",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/goofy-ahh-runnin.mp3"
    },
    {
        "name": "Nuclear Alarm Siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nuclear-alarm-siren.mp3"
    },
    {
        "name": "Cartoon Hammer",
        "color": "rgb(235, 255, 71)",
        "mp3": "/media/sounds/cartoon-hammer.mp3"
    },
    {
        "name": "c00lkidd crashout",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/c00lkidd-crashout.mp3"
    },
    {
        "name": "Goose HONK!",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/honk-sound.mp3"
    },
    {
        "name": "Discord_Ping",
        "color": "rgb(68, 102, 255)",
        "mp3": "/media/sounds/y2mate_rQlfs1Y.mp3"
    },
    {
        "name": "Eagle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sounds_eng-00381.mp3"
    },
    {
        "name": "HUNTER L4D",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/l4d-scream.mp3"
    },
    {
        "name": "Weezer Riff",
        "color": "rgb(28, 149, 255)",
        "mp3": "/media/sounds/weezer-riff.mp3"
    },
    {
        "name": "YOU NEED TO LEAVE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-need-to-leave.mp3"
    },
    {
        "name": "Squidward Walking",
        "color": "rgb(184, 223, 211)",
        "mp3": "/media/sounds/squidward-walking.mp3"
    },
    {
        "name": "Dandy's world death sound",
        "color": "rgb(33, 41, 29)",
        "mp3": "/media/sounds/dandys-world-death-sound.mp3"
    },
    {
        "name": "Open the noor!",
        "color": "rgb(109, 255, 37)",
        "mp3": "/media/sounds/open-the-noor.mp3"
    },
    {
        "name": "Ka-Ching!",
        "color": "rgb(0, 51, 204)",
        "mp3": "/media/sounds/ka-ching.mp3"
    },
    {
        "name": "White tees rizz",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/white-tees-rizz.mp3"
    },
    {
        "name": "Ear Ringing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ear-ringing.mp3"
    },
    {
        "name": "Hitting that Spot",
        "color": "rgb(49, 34, 255)",
        "mp3": "/media/sounds/hitting-that-spot.mp3"
    },
    {
        "name": "Leave me alone Akira",
        "color": "rgb(90, 7, 255)",
        "mp3": "/media/sounds/leave-me-alone-akira.mp3"
    },
    {
        "name": "Arcade Craniacs sfx lol",
        "color": "rgb(101, 0, 0)",
        "mp3": "/media/sounds/arcade-craniacs-sfx-lol.mp3"
    },
    {
        "name": "Police Panic Button",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/panic-button.mp3"
    },
    {
        "name": "I’m bout to cuh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-bout-to-cuh.mp3"
    },
    {
        "name": "OK - Même",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/okay-meme.mp3"
    },
    {
        "name": "IPhone Ringtone",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/iphone_ringtone_trap_remixbigconverter.mp3"
    },
    {
        "name": "Tom AAAAAAAAA scream",
        "color": "rgb(133, 133, 133)",
        "mp3": "/media/sounds/tom-scream.mp3"
    },
    {
        "name": "HUNTER L4D",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/l4d-scream.mp3"
    },
    {
        "name": "Fire Whoosh",
        "color": "rgb(238, 228, 23)",
        "mp3": "/media/sounds/fire-whoosh.mp3"
    },
    {
        "name": "Miau triste",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/miau-triste.mp3"
    },
    {
        "name": "Capuccino Assasino (Italian Brainrot)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/capuccino-assasino-italian-brainrot.mp3"
    },
    {
        "name": "Yo soy tu padre",
        "color": "rgb(236, 1, 40)",
        "mp3": "/media/sounds/yo-soy-tu-padre.mp3"
    },
    {
        "name": "Bongo Feet",
        "color": "rgb(51, 0, 153)",
        "mp3": "/media/sounds/bongo-feet.mp3"
    },
    {
        "name": "OH SHIT! (echo)",
        "color": "rgb(255, 0, 255)",
        "mp3": "/media/sounds/oh-shit_4.mp3"
    },
    {
        "name": "Knuckles-Oh No",
        "color": "rgb(204, 51, 0)",
        "mp3": "/media/sounds/oh_no_1.mp3"
    },
    {
        "name": "*Click* Nice",
        "color": "rgb(102, 102, 102)",
        "mp3": "/media/sounds/nioce.mp3"
    },
    {
        "name": "im in danger",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fma6waln.mp3"
    },
    {
        "name": "Coin Mario",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/super-mario-coin-sound.mp3"
    },
    {
        "name": "I always come back - ScrapTrap/William Afton",
        "color": "rgb(75, 159, 73)",
        "mp3": "/media/sounds/ialwayscomeback.mp3"
    },
    {
        "name": "Patrick Star Screaming",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/patrick_GojJ8l0.mp3"
    },
    {
        "name": "pop",
        "color": "rgb(102, 51, 204)",
        "mp3": "/media/sounds/comedy_pop_finger_in_mouth_001.mp3"
    },
    {
        "name": "you've got mail",
        "color": "rgb(102, 0, 255)",
        "mp3": "/media/sounds/yougotmail.mp3"
    },
    {
        "name": "Diddy done",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/diddy-done.mp3"
    },
    {
        "name": "Door Knocking (Very Realistic)",
        "color": "rgb(49, 85, 6)",
        "mp3": "/media/sounds/door-knocking-very-realistic.mp3"
    },
    {
        "name": "Dark souls death",
        "color": "rgb(122, 0, 0)",
        "mp3": "/media/sounds/dark-souls-you-died-sound-effect_hm5sYFG.mp3"
    },
    {
        "name": "Whisper Song",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/barney-the-whisper-song.mp3"
    },
    {
        "name": "Hank Hill - Baja Blast",
        "color": "rgb(93, 255, 115)",
        "mp3": "/media/sounds/hank-hill-baja-blast.mp3"
    },
    {
        "name": "Correct sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/answer-correct.mp3"
    },
    {
        "name": "BURP",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/google-chrome-20130527-1558.mp3"
    },
    {
        "name": "Kaching Sound FX",
        "color": "rgb(255, 245, 49)",
        "mp3": "/media/sounds/kaching-sound-fx.mp3"
    },
    {
        "name": "Lingan guli don pollo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lingan-guli-don-pollo.mp3"
    },
    {
        "name": "Come here boy",
        "color": "rgb(131, 79, 168)",
        "mp3": "/media/sounds/daequan-come-here-boy-sound-effect.mp3"
    },
    {
        "name": "JonTron - What? WTF",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jontron-what_K9mOgXd.mp3"
    },
    {
        "name": "Windows 10 USB disconnect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/disconnect.mp3"
    },
    {
        "name": "Windows 10 USB connect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/connect.mp3"
    },
    {
        "name": "Stone Sliding",
        "color": "rgb(115, 114, 118)",
        "mp3": "/media/sounds/stone-sliding.mp3"
    },
    {
        "name": "im spongebob",
        "color": "rgb(255, 221, 0)",
        "mp3": "/media/sounds/im-spongebob.mp3"
    },
    {
        "name": "Mario coin sound",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/mario_coin_sound.mp3"
    },
    {
        "name": "JonTron - What? WTF",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jontron-what_K9mOgXd.mp3"
    },
    {
        "name": "pop",
        "color": "rgb(102, 51, 204)",
        "mp3": "/media/sounds/comedy_pop_finger_in_mouth_001.mp3"
    },
    {
        "name": "Windows 10 USB disconnect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/disconnect.mp3"
    },
    {
        "name": "Stone Sliding",
        "color": "rgb(115, 114, 118)",
        "mp3": "/media/sounds/stone-sliding.mp3"
    },
    {
        "name": "romanceeeeeeeeeeeeee",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/romanceeeeeeeeeeeeee.mp3"
    },
    {
        "name": "TU TU TU DU MAX VERSTAPPEN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tu-tu-tu-du-max-verstappen.mp3"
    },
    {
        "name": "Rahhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rahhh.mp3"
    },
    {
        "name": "CalebCity Yaeger",
        "color": "rgb(67, 255, 50)",
        "mp3": "/media/sounds/2_5s_to_7s_you_better_scramble_like_an_egg_before_.mp3"
    },
    {
        "name": "Ear Ringing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ear-ringing.mp3"
    },
    {
        "name": "Freddy beatbox",
        "color": "rgb(56, 30, 18)",
        "mp3": "/media/sounds/freddy-beatbox.mp3"
    },
    {
        "name": "Train horn meme",
        "color": "rgb(18, 164, 255)",
        "mp3": "/media/sounds/train-horn-meme_v6N3591.mp3"
    },
    {
        "name": "I love you, i love you",
        "color": "rgb(255, 153, 255)",
        "mp3": "/media/sounds/i-love-you_1.mp3"
    },
    {
        "name": "I don't want peace. I want problems, always.",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/i-dont-want-peace.mp3"
    },
    {
        "name": "Omni man fat butt",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/omni-man-fat-butt.mp3"
    },
    {
        "name": "Jason Voorhees Sound",
        "color": "rgb(0, 136, 255)",
        "mp3": "/media/sounds/jason-voorhees-sound.mp3"
    },
    {
        "name": "ai meu cuzin",
        "color": "rgb(255, 174, 37)",
        "mp3": "/media/sounds/ai-meu-cuzin.mp3"
    },
    {
        "name": "Sicko Mode Meme SFX",
        "color": "rgb(255, 170, 0)",
        "mp3": "/media/sounds/the-beginning-of-sicko-mode-sound-effect-for-memes_xAcUeuI.mp3"
    },
    {
        "name": "fnaf 2 scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/five-nights-at-freddys-2-full-scream-sound.mp3"
    },
    {
        "name": "NFL theme song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nfl-theme-song-hq-mp3cut_yjEDUm1.mp3"
    },
    {
        "name": "Applause",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/applause-4.mp3"
    },
    {
        "name": "phasmophobia - ghost attack 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/phasmophobia-ghost-attack-1_b6tVbw6.mp3"
    },
    {
        "name": "peter griffin laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/laugh-3_9wVKqU7.mp3"
    },
    {
        "name": "Gojo I Stroke My Pickle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gojo-i-stroke-my-pickle.mp3"
    },
    {
        "name": "goofy ahh runnin",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/goofy-ahh-runnin.mp3"
    },
    {
        "name": "WTF is a kilometer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wtf-is-a-kilometer.mp3"
    },
    {
        "name": "THE LOUDEST NOISE EVER!",
        "color": "rgb(255, 247, 246)",
        "mp3": "/media/sounds/the-loudest-noise-ever.mp3"
    },
    {
        "name": "Wet Slow Fart",
        "color": "rgb(129, 105, 64)",
        "mp3": "/media/sounds/fartmemereloaded.mp3"
    },
    {
        "name": "Dark Souls - Pain",
        "color": "rgb(204, 0, 204)",
        "mp3": "/media/sounds/voice-mx-damage-m-1.mp3"
    },
    {
        "name": "YOU NEED TO LEAVE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-need-to-leave.mp3"
    },
    {
        "name": "NOW'S YOUR CHANCE TO BE A BIG SHOT",
        "color": "rgb(246, 255, 0)",
        "mp3": "/media/sounds/nows-your-chance-to-be-a-big-shot.mp3"
    },
    {
        "name": "Did you just talk back to me? - Yes King",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/did-you-just-talk-back-to-me-yes-king.mp3"
    },
    {
        "name": "sad music indian",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpauxfo4ff.mp3"
    },
    {
        "name": "Kid Slap *oh*",
        "color": "rgb(255, 15, 27)",
        "mp3": "/media/sounds/kid-slap-oh.mp3"
    },
    {
        "name": "DAMN pukeko",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/damn-pukeko.mp3"
    },
    {
        "name": "Queen laugh",
        "color": "rgb(13, 49, 255)",
        "mp3": "/media/sounds/queen-laugh.mp3"
    },
    {
        "name": "DRUSKI ENERGY",
        "color": "rgb(85, 255, 54)",
        "mp3": "/media/sounds/druski-energy.mp3"
    },
    {
        "name": "Gojo I Stroke My Pickle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gojo-i-stroke-my-pickle.mp3"
    },
    {
        "name": "Don't push the red button!",
        "color": "rgb(102, 0, 0)",
        "mp3": "/media/sounds/explosion-sound-effect.mp3"
    },
    {
        "name": "WTF is a kilometer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wtf-is-a-kilometer.mp3"
    },
    {
        "name": "LOUD ALARM",
        "color": "rgb(255, 11, 11)",
        "mp3": "/media/sounds/video0_k03U0Iy.mp3"
    },
    {
        "name": "THE LOUDEST NOISE EVER!",
        "color": "rgb(255, 247, 246)",
        "mp3": "/media/sounds/the-loudest-noise-ever.mp3"
    },
    {
        "name": "Wet Slow Fart",
        "color": "rgb(129, 105, 64)",
        "mp3": "/media/sounds/fartmemereloaded.mp3"
    },
    {
        "name": "Sparkleeeeeee",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fairy-dust-sound-effect.mp3"
    },
    {
        "name": "YOU NEED TO LEAVE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-need-to-leave.mp3"
    },
    {
        "name": "raaar",
        "color": "rgb(204, 225, 255)",
        "mp3": "/media/sounds/raaar_FerSY7o.mp3"
    },
    {
        "name": "NOW'S YOUR CHANCE TO BE A BIG SHOT",
        "color": "rgb(246, 255, 0)",
        "mp3": "/media/sounds/nows-your-chance-to-be-a-big-shot.mp3"
    },
    {
        "name": "sad music indian",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpauxfo4ff.mp3"
    },
    {
        "name": "Kid Slap *oh*",
        "color": "rgb(255, 15, 27)",
        "mp3": "/media/sounds/kid-slap-oh.mp3"
    },
    {
        "name": "DAMN pukeko",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/damn-pukeko.mp3"
    },
    {
        "name": "Volkswagen das auto remix",
        "color": "rgb(218, 255, 234)",
        "mp3": "/media/sounds/volkswagen-das-auto-remix.mp3"
    },
    {
        "name": "Queen laugh",
        "color": "rgb(13, 49, 255)",
        "mp3": "/media/sounds/queen-laugh.mp3"
    },
    {
        "name": "DRUSKI ENERGY",
        "color": "rgb(85, 255, 54)",
        "mp3": "/media/sounds/druski-energy.mp3"
    },
    {
        "name": "Dog Click",
        "color": "rgb(22, 193, 255)",
        "mp3": "/media/sounds/dog-click.mp3"
    },
    {
        "name": "Rimshot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/badumtss.swf.mp3"
    },
    {
        "name": "That was easy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/that_was_easy.mp3"
    },
    {
        "name": "BADUM TSS",
        "color": "rgb(0, 153, 255)",
        "mp3": "/media/sounds/joke_drum_effect.mp3"
    },
    {
        "name": "windows xp21",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/windows-xp-startup_1ph012N.mp3"
    },
    {
        "name": "I'm fast as f boi",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-fast-as-f-boi.mp3"
    },
    {
        "name": "I can smell you",
        "color": "rgb(51, 0, 153)",
        "mp3": "/media/sounds/morgan-smell.mp3"
    },
    {
        "name": "Roger Roger (Star Wars Droid)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/star-wars-b1-battle-droid_kampfdroide-roger-roger-sound.mp3"
    },
    {
        "name": "LOUD Taco Bell Bong",
        "color": "rgb(255, 245, 176)",
        "mp3": "/media/sounds/taco-bell.mp3"
    },
    {
        "name": "Fart Sound Effect (From 21st Century Memes)",
        "color": "rgb(151, 42, 2)",
        "mp3": "/media/sounds/fart-meme-sound_qo90QRs.mp3"
    },
    {
        "name": "Plug",
        "color": "rgb(24, 255, 44)",
        "mp3": "/media/sounds/plug.mp3"
    },
    {
        "name": "GET OVER HERE Scorpion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scorpion-get_over_here.mp3"
    },
    {
        "name": "Gyatt",
        "color": "rgb(184, 129, 255)",
        "mp3": "/media/sounds/gyatt.mp3"
    },
    {
        "name": "Michael Jackson Hee Hee",
        "color": "rgb(160, 0, 0)",
        "mp3": "/media/sounds/michael-jackson-hee-hee.mp3"
    },
    {
        "name": "Vine - Dramatic Boom Sound Eff",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-dramatic-boom-sound-effect.mp3"
    },
    {
        "name": "sonic rings falling",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/sonic-rings-drop.mp3"
    },
    {
        "name": "Was that the bite of 87",
        "color": "rgb(204, 228, 255)",
        "mp3": "/media/sounds/was-that-the-bite-of-87-markiplier-original-video-clip-sound-clip.mp3"
    },
    {
        "name": "Mmm Cheezburger ROBLOX",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mmm-cheezburger.mp3"
    },
    {
        "name": "Disconnect discord",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate_VKI8qDn.mp3"
    },
    {
        "name": "Watch out randy orton",
        "color": "rgb(102, 255, 255)",
        "mp3": "/media/sounds/randyortonrko-soundeffect.mp3"
    },
    {
        "name": "DRUSKI ENERGY",
        "color": "rgb(85, 255, 54)",
        "mp3": "/media/sounds/druski-energy.mp3"
    },
    {
        "name": "Dog Click",
        "color": "rgb(22, 193, 255)",
        "mp3": "/media/sounds/dog-click.mp3"
    },
    {
        "name": "That was easy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/that_was_easy.mp3"
    },
    {
        "name": "windows xp21",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/windows-xp-startup_1ph012N.mp3"
    },
    {
        "name": "I'm fast as f boi",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-fast-as-f-boi.mp3"
    },
    {
        "name": "Final Fantasy Victory Fanfare",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/final-fantasy-vii-victory-fanfare-1.mp3"
    },
    {
        "name": "I can smell you",
        "color": "rgb(51, 0, 153)",
        "mp3": "/media/sounds/morgan-smell.mp3"
    },
    {
        "name": "Eagle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sounds_eng-00381.mp3"
    },
    {
        "name": "Keemstar Screaming",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/keemstar-screaming.mp3"
    },
    {
        "name": "LOUD Taco Bell Bong",
        "color": "rgb(255, 245, 176)",
        "mp3": "/media/sounds/taco-bell.mp3"
    },
    {
        "name": "Fart Sound Effect (From 21st Century Memes)",
        "color": "rgb(151, 42, 2)",
        "mp3": "/media/sounds/fart-meme-sound_qo90QRs.mp3"
    },
    {
        "name": "Gyatt",
        "color": "rgb(184, 129, 255)",
        "mp3": "/media/sounds/gyatt.mp3"
    },
    {
        "name": "Vine - Dramatic Boom Sound Eff",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-dramatic-boom-sound-effect.mp3"
    },
    {
        "name": "sonic rings falling",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/sonic-rings-drop.mp3"
    },
    {
        "name": "Was that the bite of 87",
        "color": "rgb(204, 228, 255)",
        "mp3": "/media/sounds/was-that-the-bite-of-87-markiplier-original-video-clip-sound-clip.mp3"
    },
    {
        "name": "Disconnect discord",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate_VKI8qDn.mp3"
    },
    {
        "name": "Watch out randy orton",
        "color": "rgb(102, 255, 255)",
        "mp3": "/media/sounds/randyortonrko-soundeffect.mp3"
    },
    {
        "name": "bfdi scream",
        "color": "rgb(103, 255, 141)",
        "mp3": "/media/sounds/the_bfdi_scream.mp3"
    },
    {
        "name": "Minecraft cave1.ogg",
        "color": "rgb(1, 255, 243)",
        "mp3": "/media/sounds/cave1_gqB8CwT.mp3"
    },
    {
        "name": "Dang It Bobby",
        "color": "rgb(230, 255, 75)",
        "mp3": "/media/sounds/dang-it-bobby.mp3"
    },
    {
        "name": "Jackpot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slot-machine-jackpot-sound-effect.mp3"
    },
    {
        "name": "Thanks for the follow!",
        "color": "rgb(255, 65, 198)",
        "mp3": "/media/sounds/follow_vrIWkAR.mp3"
    },
    {
        "name": "spiderman meme song 2.0",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spiderman-meme-song-2-0.mp3"
    },
    {
        "name": "gogogogogo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gogogogogo.mp3"
    },
    {
        "name": "Yesss king",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yesss-king.mp3"
    },
    {
        "name": "It's Pikachu (short)",
        "color": "rgb(255, 231, 82)",
        "mp3": "/media/sounds/its-pikachu-short.mp3"
    },
    {
        "name": "CalebCity pain",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/calebcity-pain_0HTwUeU.mp3"
    },
    {
        "name": "moan.",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/moan_E0F3ZJz.mp3"
    },
    {
        "name": "kasongo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kasongo.mp3"
    },
    {
        "name": "cyberpunk bad word meme",
        "color": "rgb(167, 15, 255)",
        "mp3": "/media/sounds/cyberpunk-bad-word-meme.mp3"
    },
    {
        "name": "I am going to commit great crime",
        "color": "rgb(18, 52, 112)",
        "mp3": "/media/sounds/i-am-going-to-commit-great-crime.mp3"
    },
    {
        "name": "ZA WARUDO, TIME STOP !",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hd-stardust-crusaders-za-warudo_1.mp3"
    },
    {
        "name": "helicopter helicopter parakofer parakofer",
        "color": "rgb(0, 255, 84)",
        "mp3": "/media/sounds/helicopter-helicopter-parakofer-parakofer.mp3"
    },
    {
        "name": "Censor Beep 2",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/censor-beep-2.mp3"
    },
    {
        "name": "Speedrun music",
        "color": "rgb(56, 255, 34)",
        "mp3": "/media/sounds/dreamrunning_trim-1.mp3"
    },
    {
        "name": "AMONGUS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/among_us_trap_remix_bass_boosted_leonz_8455886905626474145-mp3cut.mp3"
    },
    {
        "name": "RAAAAAHHH ‼️‼️‼️",
        "color": "rgb(47, 255, 0)",
        "mp3": "/media/sounds/raaaaahhh.mp3"
    },
    {
        "name": "1,000,000,000 IQ",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/1-000-000-000-iq.mp3"
    },
    {
        "name": "REPO ROBE",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/repo-robe.mp3"
    },
    {
        "name": "1000 Bits - G-MIDÃO DO ZAP",
        "color": "rgb(100, 10, 10)",
        "mp3": "/media/sounds/1000-bits-g-midao-do-zap.mp3"
    },
    {
        "name": "nigge",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nigge_2qZTnMT.mp3"
    },
    {
        "name": "Pretty little baby",
        "color": "rgb(162, 255, 187)",
        "mp3": "/media/sounds/pretty-little-baby.mp3"
    },
    {
        "name": "I am going to Kermit Suicide",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kermitsuicide.mp3"
    },
    {
        "name": "Oh Hell No",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ringtone_7.mp3"
    },
    {
        "name": "Pedro Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pedro-song.mp3"
    },
    {
        "name": "Pew",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/pew-pew-lame-sound-effect.mp3"
    },
    {
        "name": "holy moly emoji",
        "color": "rgb(255, 238, 128)",
        "mp3": "/media/sounds/holy-moly-emoji.mp3"
    },
    {
        "name": "ultra gay",
        "color": "rgb(255, 51, 204)",
        "mp3": "/media/sounds/ultra-gay-seal_1.mp3"
    },
    {
        "name": "Mina Mexicana™ Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mina-mexicanatm-fart.mp3"
    },
    {
        "name": "Crying Baby",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/asdasd_xyorzJ8.mp3"
    },
    {
        "name": "Cow Moo",
        "color": "rgb(204, 102, 255)",
        "mp3": "/media/sounds/cow-moo.mp3"
    },
    {
        "name": "goofy scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/goofy-yell_LvAybRd.mp3"
    },
    {
        "name": "5X30",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/5x30.mp3"
    },
    {
        "name": "funny laugh sound",
        "color": "rgb(126, 135, 255)",
        "mp3": "/media/sounds/funny-laugh-sound-effect.mp3"
    },
    {
        "name": "Poop sound effect",
        "color": "rgb(84, 255, 223)",
        "mp3": "/media/sounds/poop-sound-effect.mp3"
    },
    {
        "name": "whoosh sfx",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/whoosh-sfx.mp3"
    },
    {
        "name": "AAAAAAAAAAAAAAAAAAAA é lutador",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa-e-lutador.mp3"
    },
    {
        "name": "Disappear Scream",
        "color": "rgb(255, 248, 193)",
        "mp3": "/media/sounds/disappear-scream.mp3"
    },
    {
        "name": "N word complete",
        "color": "rgb(90, 64, 17)",
        "mp3": "/media/sounds/n-word-complete.mp3"
    },
    {
        "name": "The Mimic",
        "color": "rgb(109, 102, 255)",
        "mp3": "/media/sounds/the-mimic_bYLQmIG.mp3"
    },
    {
        "name": "Final Fantasy Victory Fanfare",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/final-fantasy-vii-victory-fanfare-1.mp3"
    },
    {
        "name": "helicopter helicopter parakofer parakofer",
        "color": "rgb(0, 255, 84)",
        "mp3": "/media/sounds/helicopter-helicopter-parakofer-parakofer.mp3"
    },
    {
        "name": "Original Sheesh",
        "color": "rgb(255, 11, 11)",
        "mp3": "/media/sounds/original-sheesh.mp3"
    },
    {
        "name": "Shame Bell",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/shame-1.mp3"
    },
    {
        "name": "pokemon battle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pokemon-battle.mp3"
    },
    {
        "name": "Big fart",
        "color": "rgb(153, 51, 0)",
        "mp3": "/media/sounds/faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaart.mp3"
    },
    {
        "name": "Imperial march (star wars)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/imperial_march.mp3"
    },
    {
        "name": "FBI Open the door!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fbi-open-the-door.mp3"
    },
    {
        "name": "\"Heartbeat | Stress\" Phasmophobia",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/phasmophobia-sound-board-effects-07-sound-effects-heartbeat-stress_ohtStgP.mp3"
    },
    {
        "name": "Nani what!?",
        "color": "rgb(47, 255, 40)",
        "mp3": "/media/sounds/nani_-meme-sound-effect-su0k4q3yrfw-mp3cut.mp3"
    },
    {
        "name": "Bad joke (drums)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bad-joke-drums.mp3"
    },
    {
        "name": "Hello It's John Cena",
        "color": "rgb(0, 204, 0)",
        "mp3": "/media/sounds/hello-its-john-cena.mp3"
    },
    {
        "name": "Cartoon Slip and Fall",
        "color": "rgb(204, 255, 51)",
        "mp3": "/media/sounds/slipandfall.mp3"
    },
    {
        "name": "woosh sound effect",
        "color": "rgb(159, 152, 149)",
        "mp3": "/media/sounds/woosh-sound-effect.mp3"
    },
    {
        "name": "funny laugh sound",
        "color": "rgb(126, 135, 255)",
        "mp3": "/media/sounds/funny-laugh-sound-effect.mp3"
    },
    {
        "name": "Poop sound effect",
        "color": "rgb(84, 255, 223)",
        "mp3": "/media/sounds/poop-sound-effect.mp3"
    },
    {
        "name": "AAAAAAAAAAAAAAAAAAAA é lutador",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa-e-lutador.mp3"
    },
    {
        "name": "Disappear Scream",
        "color": "rgb(255, 248, 193)",
        "mp3": "/media/sounds/disappear-scream.mp3"
    },
    {
        "name": "technologia",
        "color": "rgb(243, 255, 71)",
        "mp3": "/media/sounds/technologia.mp3"
    },
    {
        "name": "415-й я база ответьте",
        "color": "rgb(63, 255, 150)",
        "mp3": "/media/sounds/415-i-ia-baza-otvette.mp3"
    },
    {
        "name": "Yes King Now I Understand",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yes-king-now-i-understand.mp3"
    },
    {
        "name": "N word complete",
        "color": "rgb(90, 64, 17)",
        "mp3": "/media/sounds/n-word-complete.mp3"
    },
    {
        "name": "Festa junina",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/festa-junina.mp3"
    },
    {
        "name": "The Mimic",
        "color": "rgb(109, 102, 255)",
        "mp3": "/media/sounds/the-mimic_bYLQmIG.mp3"
    },
    {
        "name": "OH HELLO THERE. ( Shrek )",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/shrek-oh-hello-there_nhnoZHY.mp3"
    },
    {
        "name": "Original Sheesh",
        "color": "rgb(255, 11, 11)",
        "mp3": "/media/sounds/original-sheesh.mp3"
    },
    {
        "name": "Shame Bell",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/shame-1.mp3"
    },
    {
        "name": "pokemon battle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pokemon-battle.mp3"
    },
    {
        "name": "Big fart",
        "color": "rgb(153, 51, 0)",
        "mp3": "/media/sounds/faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaart.mp3"
    },
    {
        "name": "Imperial march (star wars)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/imperial_march.mp3"
    },
    {
        "name": "FBI Open the door!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fbi-open-the-door.mp3"
    },
    {
        "name": "\"Heartbeat | Stress\" Phasmophobia",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/phasmophobia-sound-board-effects-07-sound-effects-heartbeat-stress_ohtStgP.mp3"
    },
    {
        "name": "Bad joke (drums)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bad-joke-drums.mp3"
    },
    {
        "name": "sigma boy bass boosted caca",
        "color": "rgb(10, 14, 255)",
        "mp3": "/media/sounds/sigma-boy-bass-boosted-caca.mp3"
    },
    {
        "name": "Hello It's John Cena",
        "color": "rgb(0, 204, 0)",
        "mp3": "/media/sounds/hello-its-john-cena.mp3"
    },
    {
        "name": "Valorant Kill Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/multikill-1.mp3"
    },
    {
        "name": "I'm Going to Kill You, And then Kill you again.",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/final_5f99b14b144d4b004b4e5eac_638028.mp3"
    },
    {
        "name": "Chomp",
        "color": "rgb(255, 241, 49)",
        "mp3": "/media/sounds/chomp-1.mp3"
    },
    {
        "name": "wet fart 3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wet-fart-2.mp3"
    },
    {
        "name": "Eye Of Rah sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eye-of-rah-sound-effect.mp3"
    },
    {
        "name": "Pistol sound effect",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/pistol-sound-effect_zejYI9w.mp3"
    },
    {
        "name": "Sad Hamster",
        "color": "rgb(15, 80, 206)",
        "mp3": "/media/sounds/sad-hamster.mp3"
    },
    {
        "name": "Godzilla Roar 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/godzilla_2.mp3"
    },
    {
        "name": "I NEED YOU CECIL!!!",
        "color": "rgb(115, 99, 255)",
        "mp3": "/media/sounds/i-need-you-cecil_UfM8J59.mp3"
    },
    {
        "name": "Aayein Meme",
        "color": "rgb(255, 183, 50)",
        "mp3": "/media/sounds/aayein-meme.mp3"
    },
    {
        "name": "(mafioso) your mine",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-your-mine.mp3"
    },
    {
        "name": "Sleep phonk",
        "color": "rgb(41, 0, 255)",
        "mp3": "/media/sounds/sleep-phonk_XPBfmfW.mp3"
    },
    {
        "name": "Dime qué estás orgulloso shifu",
        "color": "rgb(89, 205, 255)",
        "mp3": "/media/sounds/dime-que-estas-orgulloso-shifu.mp3"
    },
    {
        "name": "I NEED YOU CECIL!!!",
        "color": "rgb(115, 99, 255)",
        "mp3": "/media/sounds/i-need-you-cecil_UfM8J59.mp3"
    },
    {
        "name": "Yeah Chant!",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/yeah-chant.mp3"
    },
    {
        "name": "Yes King Now I Understand",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yes-king-now-i-understand.mp3"
    },
    {
        "name": "Sleep phonk",
        "color": "rgb(41, 0, 255)",
        "mp3": "/media/sounds/sleep-phonk_XPBfmfW.mp3"
    },
    {
        "name": "Guest 1337 forsaken",
        "color": "rgb(184, 51, 255)",
        "mp3": "/media/sounds/guest-1337-forsaken.mp3"
    },
    {
        "name": "undertaker bell repeat",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/undertaker-bell-repeat.mp3"
    },
    {
        "name": "Pufferfish",
        "color": "rgb(255, 229, 170)",
        "mp3": "/media/sounds/aaughmp3.mp3"
    },
    {
        "name": "Spongebob - Grass Skirt Chase",
        "color": "rgb(255, 244, 43)",
        "mp3": "/media/sounds/spongebob-music_-grass-skirt-chase-1.mp3"
    },
    {
        "name": "bomboclat",
        "color": "rgb(88, 255, 14)",
        "mp3": "/media/sounds/bomboclat.mp3"
    },
    {
        "name": "Rizz walk",
        "color": "rgb(91, 225, 255)",
        "mp3": "/media/sounds/rizz-walk.mp3"
    },
    {
        "name": "talking benn yes",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/talking-benn-yes.mp3"
    },
    {
        "name": "fart echo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-with-reverb_NcgStsA.mp3"
    },
    {
        "name": "Old Minecraft Zombie Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/old-sound-of-zombie-in-minecraft.mp3"
    },
    {
        "name": "Cash Register",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/audiojoiner120623175716.mp3"
    },
    {
        "name": "sigma boy bass boosted caca",
        "color": "rgb(10, 14, 255)",
        "mp3": "/media/sounds/sigma-boy-bass-boosted-caca.mp3"
    },
    {
        "name": "Why do I hear boss music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/why-do-i-hear-boss-music.mp3"
    },
    {
        "name": "Crickets Chirping",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/crickets-chirping.mp3"
    },
    {
        "name": "rust c4",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rust-c4.mp3"
    },
    {
        "name": "Look at this dude HQ",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bruh_look_at_this_dude1.mp3"
    },
    {
        "name": "Flapjack Scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/flap-jack-scream.mp3"
    },
    {
        "name": "Windows XP ERROR Song",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/windows-xp-error-song-edited-by-dj-cobaltsteel-77.mp3"
    },
    {
        "name": "meowrgh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meowrgh.mp3"
    },
    {
        "name": "MAN SMASHING KEYBOARD",
        "color": "rgb(32, 174, 0)",
        "mp3": "/media/sounds/green-whats-your-problem-audiotrimmer.mp3"
    },
    {
        "name": "extremely loud correct buzzer",
        "color": "rgb(33, 255, 29)",
        "mp3": "/media/sounds/extremely-loud-correct-buzzer.mp3"
    },
    {
        "name": "Bloxy cola",
        "color": "rgb(255, 247, 6)",
        "mp3": "/media/sounds/bloxy-cola.mp3"
    },
    {
        "name": "(Anakin) LIAR",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/liar_Oh2JWEd.mp3"
    },
    {
        "name": "Halo theme oooh",
        "color": "rgb(31, 145, 209)",
        "mp3": "/media/sounds/halo-theme-song-original-2m252s.mp3"
    },
    {
        "name": "Old Church Bell Meme",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/old-church-bell-meme.mp3"
    },
    {
        "name": "HI HI HI HA clash royale",
        "color": "rgb(255, 250, 76)",
        "mp3": "/media/sounds/hi-hi-hi-ha-clash-royale.mp3"
    },
    {
        "name": "Doofenshmirtz Evil Incorporated Jingle",
        "color": "rgb(38, 99, 88)",
        "mp3": "/media/sounds/doofenshmirtz-evil-incorporated-jingle.mp3"
    },
    {
        "name": "Ichigo Bankai Screaming REEEEEEEEEEEEE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ichigo-bankai-screaming-reeeeeeeeeeeee.mp3"
    },
    {
        "name": "Arkh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/arkh.mp3"
    },
    {
        "name": "ДИМОН",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pro-metei-dimon-www.mp3"
    },
    {
        "name": "Trippi Troppi Italian brainrot",
        "color": "rgb(107, 225, 255)",
        "mp3": "/media/sounds/trippi-troppi-italian-brainrot.mp3"
    },
    {
        "name": "Pussy!",
        "color": "rgb(255, 209, 178)",
        "mp3": "/media/sounds/pussy_RnRyRcQ.mp3"
    },
    {
        "name": "Ding Dong Eat it up.",
        "color": "rgb(61, 223, 255)",
        "mp3": "/media/sounds/ding-dong-eat-it-up_ZhlIYUe.mp3"
    },
    {
        "name": "The croods theme",
        "color": "rgb(255, 165, 62)",
        "mp3": "/media/sounds/the-croods-theme.mp3"
    },
    {
        "name": "allah akbar",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/allah-akbar_tTSl947.mp3"
    },
    {
        "name": "MOANNNNN TORTISE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/moannnnn-tortise.mp3"
    },
    {
        "name": "THINK FAST",
        "color": "rgb(181, 94, 44)",
        "mp3": "/media/sounds/think-fast_aoFJrFD.mp3"
    },
    {
        "name": "チーン 効果音",
        "color": "rgb(166, 166, 166)",
        "mp3": "/media/sounds/chin-xiao-guo-yin_s5phJIA.mp3"
    },
    {
        "name": "Tik Tok India",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/panjabi-mc-mundian-tu-bach-ke-0s-16s-kfmq4pgaove_tjS6M4I.mp3"
    },
    {
        "name": "Censor Beep 3",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/censor-beep-3.mp3"
    },
    {
        "name": "Donald Trump: \"Obamna\"",
        "color": "rgb(42, 173, 112)",
        "mp3": "/media/sounds/obamna.mp3"
    },
    {
        "name": "What the Hell Oh My Gawd No Way",
        "color": "rgb(185, 95, 95)",
        "mp3": "/media/sounds/wthomg-pt-2.mp3"
    },
    {
        "name": "The long and winded road fart",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/the-long-and-winded-road-fart-sounds-for-ringtones1.mp3"
    },
    {
        "name": "Netflix intro",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nouveau-jingle-netflix.mp3"
    },
    {
        "name": "Thick Of It Brainrot",
        "color": "rgb(53, 204, 53)",
        "mp3": "/media/sounds/thick-of-it-brainrot.mp3"
    },
    {
        "name": "Undertale - Damage Taken",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/undertale-damage-taken.mp3"
    },
    {
        "name": "romantic",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/45_0HW2p0x.mp3"
    },
    {
        "name": "ROASTED YAOW YAOW",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/roasted_2.mp3"
    },
    {
        "name": "FNAF Hooray!!!!",
        "color": "rgb(12, 255, 0)",
        "mp3": "/media/sounds/fnaf-hooray.mp3"
    },
    {
        "name": "AHHHHHHHHHHHHHHHHHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ahhhhhhhhhhhhhhhh_8axRFzx.mp3"
    },
    {
        "name": "Nice cock!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nice-cock_n6IXwwg.mp3"
    },
    {
        "name": "Squidward Walking",
        "color": "rgb(184, 223, 211)",
        "mp3": "/media/sounds/squidward-walking.mp3"
    },
    {
        "name": "ahh! rblx scared",
        "color": "rgb(0, 255, 183)",
        "mp3": "/media/sounds/ahh-rblx-scared.mp3"
    },
    {
        "name": "Danger Siren Alarm",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/danger-siren-alarm_BfknMds.mp3"
    },
    {
        "name": "screaming monkeys",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/screaming-monkeys.mp3"
    },
    {
        "name": "Cappuccino Assassino",
        "color": "rgb(112, 81, 61)",
        "mp3": "/media/sounds/cappuccino-assassino.mp3"
    },
    {
        "name": "ashes ashes!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ashes-ashes.mp3"
    },
    {
        "name": "You must BOUNCE ON IT",
        "color": "rgb(28, 34, 92)",
        "mp3": "/media/sounds/you-must-bounce-on-it.mp3"
    },
    {
        "name": "you're no fun! :(",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/youre-no-fun.mp3"
    },
    {
        "name": "Roflcopter soi soi soi",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/ms-sam-soi-soi-soi.mp3"
    },
    {
        "name": "roblox screaming kid",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-screaming-kid-140.mp3"
    },
    {
        "name": "Classic Batman Transition",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/batman-transition-download-sound-link.mp3"
    },
    {
        "name": "Squeak Toy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/squeak_Q72c7Tg.mp3"
    },
    {
        "name": "Bass Distortion / Dab Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dab-distortion.mp3"
    },
    {
        "name": "AW HELL NAH MAN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aw-hell-nah-man.mp3"
    },
    {
        "name": "Big Explosion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/big-explosion.mp3"
    },
    {
        "name": "Minecraft Level Up Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/levelup.mp3"
    },
    {
        "name": "Minecraft Train Whistle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/minecraft-train-whistle-cave-sound.mp3"
    },
    {
        "name": "trollface smile",
        "color": "rgb(94, 94, 94)",
        "mp3": "/media/sounds/trollface-smile.mp3"
    },
    {
        "name": "gato riendo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gato-riendo_6bOc2ur.mp3"
    },
    {
        "name": "Im dead AHH- tf2 scout",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-dead-ahh-tf2-scout.mp3"
    },
    {
        "name": "Twitch Default Alert",
        "color": "rgb(0, 255, 170)",
        "mp3": "/media/sounds/default_eKkIk7O.mp3"
    },
    {
        "name": "Cappuccino Assassino",
        "color": "rgb(112, 81, 61)",
        "mp3": "/media/sounds/cappuccino-assassino.mp3"
    },
    {
        "name": "f1 Radio",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/f1-radio_QLwLncI.mp3"
    },
    {
        "name": "IM IN MINECRAFT",
        "color": "rgb(44, 130, 255)",
        "mp3": "/media/sounds/im-in-minecraft.mp3"
    },
    {
        "name": "GET THE F OUT OF MY ROOM IM PLAYING MINECRAFT!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/get-the-f-out-of-my-room-im-playing-minecraft.mp3"
    },
    {
        "name": "Kai Cenat Suspense",
        "color": "rgb(76, 61, 77)",
        "mp3": "/media/sounds/kai-cenat-suspense.mp3"
    },
    {
        "name": "Spamton laugh",
        "color": "rgb(171, 56, 255)",
        "mp3": "/media/sounds/spamton-laugh.mp3"
    },
    {
        "name": "You Got Me Jumping Like Boom Shakalaka",
        "color": "rgb(2, 0, 255)",
        "mp3": "/media/sounds/you-got-me-jumping-like-boom-shakalaka.mp3"
    },
    {
        "name": "Fortnite Default Dance Music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fortnite-dance-moves-emote-music-tv9iv8cxmo0-1.mp3"
    },
    {
        "name": "Cute UwU",
        "color": "rgb(113, 32, 255)",
        "mp3": "/media/sounds/cute-uwu.mp3"
    },
    {
        "name": "Objection!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/phoenix-objection.mp3"
    },
    {
        "name": "FINISH HIM!",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/finish-him.mp3"
    },
    {
        "name": "roblox screaming kid",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-screaming-kid-140.mp3"
    },
    {
        "name": "Old Spice Whistle = MattHQ",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/old-spice-whistle-hq.mp3"
    },
    {
        "name": "Classic Batman Transition",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/batman-transition-download-sound-link.mp3"
    },
    {
        "name": "Donald Trump: \"Obamna\"",
        "color": "rgb(42, 173, 112)",
        "mp3": "/media/sounds/obamna.mp3"
    },
    {
        "name": "Old Minecraft Zombie Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/old-sound-of-zombie-in-minecraft.mp3"
    },
    {
        "name": "What the Hell Oh My Gawd No Way",
        "color": "rgb(185, 95, 95)",
        "mp3": "/media/sounds/wthomg-pt-2.mp3"
    },
    {
        "name": "ALL Goofy Sounds",
        "color": "rgb(0, 217, 255)",
        "mp3": "/media/sounds/all-goofy-sounds.mp3"
    },
    {
        "name": "Drum Roll Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/drum-roll-gaming-sound-effect-hd.mp3"
    },
    {
        "name": "goofy-ah-laugh",
        "color": "rgb(168, 197, 255)",
        "mp3": "/media/sounds/goofy-ah-laugh.mp3"
    },
    {
        "name": "machine gun gunshot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate_aRsvz4g.mp3"
    },
    {
        "name": "hey guys whats going on discord troll",
        "color": "rgb(214, 177, 255)",
        "mp3": "/media/sounds/hey-guys-whats-going-on-discord-troll.mp3"
    },
    {
        "name": "skedaddle",
        "color": "rgb(7, 62, 78)",
        "mp3": "/media/sounds/skedaddle.mp3"
    },
    {
        "name": "EAGLE EARRAPE",
        "color": "rgb(0, 110, 255)",
        "mp3": "/media/sounds/eagle-earrape.mp3"
    },
    {
        "name": "confetti pop sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/confetti-pop-sound.mp3"
    },
    {
        "name": "Nuke Bomb!",
        "color": "rgb(255, 119, 8)",
        "mp3": "/media/sounds/nuke-bomb.mp3"
    },
    {
        "name": "4092 mango phonk",
        "color": "rgb(255, 85, 13)",
        "mp3": "/media/sounds/4092-mango-phonk.mp3"
    },
    {
        "name": "The Moon Haunts You",
        "color": "rgb(100, 255, 247)",
        "mp3": "/media/sounds/the-moon-haunts-you.mp3"
    },
    {
        "name": "Deltarune Weapons Pull",
        "color": "rgb(0, 0, 255)",
        "mp3": "/media/sounds/deltarune-weapons-pull.mp3"
    },
    {
        "name": "Trippi Troppi Italian brainrot",
        "color": "rgb(107, 225, 255)",
        "mp3": "/media/sounds/trippi-troppi-italian-brainrot.mp3"
    },
    {
        "name": "CALVOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
        "color": "rgb(255, 194, 225)",
        "mp3": "/media/sounds/calvoooooooooooooooooooooooooooo.mp3"
    },
    {
        "name": "ford chime",
        "color": "rgb(206, 71, 255)",
        "mp3": "/media/sounds/ford-chime.mp3"
    },
    {
        "name": "Fart Then Moan.mp3 By Mango",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-then-moan-mp3-by-mango.mp3"
    },
    {
        "name": "The Boiled One Message",
        "color": "rgb(105, 0, 0)",
        "mp3": "/media/sounds/the-boiled-one-message.mp3"
    },
    {
        "name": "Africa crying laugh commercial",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/africa-crying-laugh-commercial.mp3"
    },
    {
        "name": "AI MINHA XEREEE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ai-minha-xereee.mp3"
    },
    {
        "name": "Пора вставать хозяин(аниме девочка)",
        "color": "rgb(179, 39, 104)",
        "mp3": "/media/sounds/pora-vstavat-khoziain-anime-devochka.mp3"
    },
    {
        "name": "kqdee",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kqdee.mp3"
    },
    {
        "name": "(Mafioso) I feel no pain",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-i-feel-no-pain.mp3"
    },
    {
        "name": "Chaloo",
        "color": "rgb(100, 234, 46)",
        "mp3": "/media/sounds/chaloo.mp3"
    },
    {
        "name": "indian song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/indian-song.mp3"
    },
    {
        "name": "jevil byebye",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/byebye_ULuN2dz.mp3"
    },
    {
        "name": "Казик по расписанию",
        "color": "rgb(10, 10, 255)",
        "mp3": "/media/sounds/kazik-po-raspisaniiu.mp3"
    },
    {
        "name": "horknee 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/horknee-1.mp3"
    },
    {
        "name": "hehe boi ainsley harriott",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ainsley_harriott_and_his_spicy_meatconverttoaudio.mp3"
    },
    {
        "name": "Objection!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/phoenix-objection.mp3"
    },
    {
        "name": "Screaming Sheep",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/01-the-screaming-sheep.mp3"
    },
    {
        "name": "Hallelujah",
        "color": "rgb(0, 204, 204)",
        "mp3": "/media/sounds/hallelujahshort.swf.mp3"
    },
    {
        "name": "Palpatine Do It",
        "color": "rgb(255, 0, 255)",
        "mp3": "/media/sounds/senator-palpatine-do-it_1.mp3"
    },
    {
        "name": "FINISH HIM!",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/finish-him.mp3"
    },
    {
        "name": "spongebob Hi How Are Ya?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-hi-how-are-ya-.mp3"
    },
    {
        "name": "Old Spice Whistle = MattHQ",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/old-spice-whistle-hq.mp3"
    },
    {
        "name": "SPONGEBOB 2000 YEARS LATER",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-2000-years-later-2019-download-link.mp3"
    },
    {
        "name": "cod zombie scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/img_6228.mp3"
    },
    {
        "name": "Fail Horn",
        "color": "rgb(102, 255, 51)",
        "mp3": "/media/sounds/thepriceisright-loserhorns.mp3"
    },
    {
        "name": "Johnny Test Whip Crack",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/johnny-test-whip-crack.mp3"
    },
    {
        "name": "FNAF Balloon Boy Hi",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/echo1.mp3"
    },
    {
        "name": "Nokia Arabic Ringstone",
        "color": "rgb(144, 251, 255)",
        "mp3": "/media/sounds/nokia-ringtone-arabic.mp3"
    },
    {
        "name": "we do not care",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mike-tomlin-we-do-not-care-trim.mp3"
    },
    {
        "name": "Buddy Holly Weezer Guitar Lick",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/buddy-holly-weezer-guitar-lick.mp3"
    },
    {
        "name": "Ohhh My God",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh_my_god_vine.mp3"
    },
    {
        "name": "Cartoon running",
        "color": "rgb(255, 193, 0)",
        "mp3": "/media/sounds/cartoon-running-sound-effect-online-audio-converter.mp3"
    },
    {
        "name": "Toothless Dancing",
        "color": "rgb(78, 253, 255)",
        "mp3": "/media/sounds/toothless-dancing_rT0J7Pn.mp3"
    },
    {
        "name": "Anime Girl \"Senpai!\"",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/anime-girl-senpai.mp3"
    },
    {
        "name": "Talking Ben No",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/talking-ben-no.mp3"
    },
    {
        "name": "Hooray! tiktok sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hooray-tiktok-sound.mp3"
    },
    {
        "name": "machine gun gunshot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate_aRsvz4g.mp3"
    },
    {
        "name": "hey guys whats going on discord troll",
        "color": "rgb(214, 177, 255)",
        "mp3": "/media/sounds/hey-guys-whats-going-on-discord-troll.mp3"
    },
    {
        "name": "gato riendo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gato-riendo_6bOc2ur.mp3"
    },
    {
        "name": "GET THE F OUT OF MY ROOM IM PLAYING MINECRAFT!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/get-the-f-out-of-my-room-im-playing-minecraft.mp3"
    },
    {
        "name": "I made a steak",
        "color": "rgb(222, 0, 0)",
        "mp3": "/media/sounds/i-made-a-steak.mp3"
    },
    {
        "name": "undertaker bell repeat",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/undertaker-bell-repeat.mp3"
    },
    {
        "name": "DELTARUNE Intro sound",
        "color": "rgb(15, 55, 255)",
        "mp3": "/media/sounds/deltarune-intro-sound.mp3"
    },
    {
        "name": "Ambatukam bass",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ambatukam-bass.mp3"
    },
    {
        "name": "Gemi222 GP",
        "color": "rgb(74, 210, 255)",
        "mp3": "/media/sounds/gemi222-gp.mp3"
    },
    {
        "name": "Clash brasil",
        "color": "rgb(46, 255, 164)",
        "mp3": "/media/sounds/clash-brasil.mp3"
    },
    {
        "name": "Hallelujah",
        "color": "rgb(0, 204, 204)",
        "mp3": "/media/sounds/hallelujahshort.swf.mp3"
    },
    {
        "name": "CHILL GUY",
        "color": "rgb(185, 157, 114)",
        "mp3": "/media/sounds/chill-guy.mp3"
    },
    {
        "name": "Old Spice Whistle = MattHQ",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/old-spice-whistle-hq.mp3"
    },
    {
        "name": "Minecraft Level Up Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/levelup.mp3"
    },
    {
        "name": "Fnaf Freddy’s laugh",
        "color": "rgb(105, 37, 37)",
        "mp3": "/media/sounds/fnaf-freddys-laugh.mp3"
    },
    {
        "name": "Pablo MEME",
        "color": "rgb(90, 255, 8)",
        "mp3": "/media/sounds/yt1s_NSjFWNC.mp3"
    },
    {
        "name": "Minecraft Train Whistle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/minecraft-train-whistle-cave-sound.mp3"
    },
    {
        "name": "Netflix intro",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nouveau-jingle-netflix.mp3"
    },
    {
        "name": "trollface smile",
        "color": "rgb(94, 94, 94)",
        "mp3": "/media/sounds/trollface-smile.mp3"
    },
    {
        "name": "Windows XP ERROR Song",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/windows-xp-error-song-edited-by-dj-cobaltsteel-77.mp3"
    },
    {
        "name": "suspense rising",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/suspense-sound-effect-imovie.mp3"
    },
    {
        "name": "What meme song",
        "color": "rgb(71, 0, 0)",
        "mp3": "/media/sounds/what-bottom-text-meme-sanctuary-guardian-sound-effect-hd_tdDIUTg.mp3"
    },
    {
        "name": "Bloxy cola",
        "color": "rgb(255, 247, 6)",
        "mp3": "/media/sounds/bloxy-cola.mp3"
    },
    {
        "name": "Who invited this kid?",
        "color": "rgb(0, 28, 255)",
        "mp3": "/media/sounds/video0-1-online-audio-converter_2i1mcmV.mp3"
    },
    {
        "name": "Angry Birds Laugh",
        "color": "rgb(169, 0, 0)",
        "mp3": "/media/sounds/angry-birds-laugh.mp3"
    },
    {
        "name": "Halo theme oooh",
        "color": "rgb(31, 145, 209)",
        "mp3": "/media/sounds/halo-theme-song-original-2m252s.mp3"
    },
    {
        "name": "Eagle sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eagle-sound.mp3"
    },
    {
        "name": "AHHHHHHHHHHHHHHHHHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ahhhhhhhhhhhhhhhh_8axRFzx.mp3"
    },
    {
        "name": "confetti pop sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/confetti-pop-sound.mp3"
    },
    {
        "name": "Ichigo Bankai Screaming REEEEEEEEEEEEE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ichigo-bankai-screaming-reeeeeeeeeeeee.mp3"
    },
    {
        "name": "roblox spawn",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/roblox-spawn.mp3"
    },
    {
        "name": "Scooby doo laugh meme",
        "color": "rgb(234, 255, 0)",
        "mp3": "/media/sounds/scooby-doo-laugh-meme.mp3"
    },
    {
        "name": "ДИМОН",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pro-metei-dimon-www.mp3"
    },
    {
        "name": "Base boost censor",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/base-boost-censor.mp3"
    },
    {
        "name": "Trippi Troppi Italian brainrot",
        "color": "rgb(107, 225, 255)",
        "mp3": "/media/sounds/trippi-troppi-italian-brainrot.mp3"
    },
    {
        "name": "Yeah Chant!",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/yeah-chant.mp3"
    },
    {
        "name": "Good boy (voice actor)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/good-boy-voice-actor.mp3"
    },
    {
        "name": "Explosion meme sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/explosion-meme-sound-effect.mp3"
    },
    {
        "name": "Intro PH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/intro-ph.mp3"
    },
    {
        "name": "Ultra instinct Goku",
        "color": "rgb(12, 206, 255)",
        "mp3": "/media/sounds/ultra-instinct-theme-official-version-audiotrimmer.mp3"
    },
    {
        "name": "imagine if ninja got a low taper fade",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/imagine-if-ninja-got-a-low-taper-fade.mp3"
    },
    {
        "name": "The bluetooth device is ready to pair",
        "color": "rgb(0, 136, 255)",
        "mp3": "/media/sounds/the-bluetooth-device-is-ready-to-pair.mp3"
    },
    {
        "name": "Dreamybull/Ambatukam is on his way",
        "color": "rgb(224, 230, 181)",
        "mp3": "/media/sounds/dreamybull-ambatukam-is-on-his-way.mp3"
    },
    {
        "name": "Mysterious Button ?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/and-his-name-is-john-cena-1_16.mp3"
    },
    {
        "name": "fart 2",
        "color": "rgb(102, 51, 0)",
        "mp3": "/media/sounds/fart_1.mp3"
    },
    {
        "name": "Tokyo Drift Alert",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/untitled_zd2ts4l-audiotrimmer.mp3"
    },
    {
        "name": "Minecraft Drop Item/Block Sound Effect",
        "color": "rgb(8, 255, 25)",
        "mp3": "/media/sounds/minecraft-drop-block-sound-effect.mp3"
    },
    {
        "name": "ALL Goofy Sounds",
        "color": "rgb(0, 217, 255)",
        "mp3": "/media/sounds/all-goofy-sounds.mp3"
    },
    {
        "name": "Roblox Yummy",
        "color": "rgb(5, 182, 146)",
        "mp3": "/media/sounds/roblox-yummy.mp3"
    },
    {
        "name": "BMW Chime",
        "color": "rgb(30, 117, 255)",
        "mp3": "/media/sounds/bmw-bong.mp3"
    },
    {
        "name": "roblox footsteps",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/action_footsteps_plastic.mp3"
    },
    {
        "name": "Low honor RDR 2",
        "color": "rgb(128, 0, 0)",
        "mp3": "/media/sounds/low-honor-rdr-2.mp3"
    },
    {
        "name": "roblox spawn",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/roblox-spawn.mp3"
    },
    {
        "name": "Deltarune Weapons Pull",
        "color": "rgb(0, 0, 255)",
        "mp3": "/media/sounds/deltarune-weapons-pull.mp3"
    },
    {
        "name": "ford chime",
        "color": "rgb(206, 71, 255)",
        "mp3": "/media/sounds/ford-chime.mp3"
    },
    {
        "name": "Fart Then Moan.mp3 By Mango",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-then-moan-mp3-by-mango.mp3"
    },
    {
        "name": "АХ ДЯДЯ САША НЕ ТАК ГЛУБОКО",
        "color": "rgb(255, 35, 146)",
        "mp3": "/media/sounds/akh-diadia-sasha-ne-tak-gluboko.mp3"
    },
    {
        "name": "bluudude coughing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bluudude-coughing.mp3"
    },
    {
        "name": "Love Island Text",
        "color": "rgb(184, 255, 42)",
        "mp3": "/media/sounds/yt1s_cizemWX.mp3"
    },
    {
        "name": "Имбо отрыжка",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/imbo-otryzhka.mp3"
    },
    {
        "name": "Jesus is Lord",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jesus-is-lord-sound-effect.mp3"
    },
    {
        "name": "It Pulls The Strings And Makes Them Ring",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/it-pulls-the-strings-and-makes-them-ring_GDL7vgD.mp3"
    },
    {
        "name": "fishy fishy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fishy-fishy.mp3"
    },
    {
        "name": "Mods ban that guy.",
        "color": "rgb(255, 65, 65)",
        "mp3": "/media/sounds/mods-ban-that-guy.mp3"
    },
    {
        "name": "NO GOD! PLEASE NO!!! NOOOOOOOO",
        "color": "rgb(0, 0, 153)",
        "mp3": "/media/sounds/no-god-please-no-noooooooooo.mp3"
    },
    {
        "name": "Evil Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/evillaugh.swf.mp3"
    },
    {
        "name": "Hawk Tuah (Short)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hawk-tuah-short.mp3"
    },
    {
        "name": "Among us Roundstart",
        "color": "rgb(220, 10, 255)",
        "mp3": "/media/sounds/among-us-roundstart.mp3"
    },
    {
        "name": "CELEBRATION",
        "color": "rgb(153, 0, 0)",
        "mp3": "/media/sounds/celebration.mp3"
    },
    {
        "name": "Drake embarrassing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/drake-embarrassing_Ts9wkE9.mp3"
    },
    {
        "name": "Anime girl",
        "color": "rgb(255, 204, 255)",
        "mp3": "/media/sounds/anime-voice-swap1.mp3"
    },
    {
        "name": "Imposter Kill (Among Us)",
        "color": "rgb(219, 64, 64)",
        "mp3": "/media/sounds/stationary-kill_gDwMUvN.mp3"
    },
    {
        "name": "Ambatukam",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ambatukam.mp3"
    },
    {
        "name": "Amogus Full",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/2021-04-07-213841761.mp3"
    },
    {
        "name": "Censor Beep",
        "color": "rgb(153, 204, 0)",
        "mp3": "/media/sounds/censor-beep-7.mp3"
    },
    {
        "name": "quandale dingle",
        "color": "rgb(52, 248, 255)",
        "mp3": "/media/sounds/quandale-dingle.mp3"
    },
    {
        "name": "dry fart",
        "color": "rgb(204, 102, 51)",
        "mp3": "/media/sounds/dry-fart_3.mp3"
    },
    {
        "name": "SPONGEBOB ONE HOUR LATER",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/one-hour-later-spongebob-time-card-96.mp3"
    },
    {
        "name": "Imposter Kill (Among Us)",
        "color": "rgb(219, 64, 64)",
        "mp3": "/media/sounds/stationary-kill_gDwMUvN.mp3"
    },
    {
        "name": "Censor Beep",
        "color": "rgb(153, 204, 0)",
        "mp3": "/media/sounds/censor-beep-7.mp3"
    },
    {
        "name": "Perfect Street Fighter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/perfect-street-fighter-sound-effect.mp3"
    },
    {
        "name": "Donny Thornberry",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/media_va1VnYo.mp3"
    },
    {
        "name": "Singing Angels",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/angels-singing.mp3"
    },
    {
        "name": "what the hell is even that",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/whatthehell_qrePvEr.mp3"
    },
    {
        "name": "Удар от взгляда Скалы",
        "color": "rgb(95, 0, 0)",
        "mp3": "/media/sounds/udar-ot-vzgliada-skaly.mp3"
    },
    {
        "name": "Zelda Secret S",
        "color": "rgb(0, 164, 74)",
        "mp3": "/media/sounds/ringtones-zelda-1.mp3"
    },
    {
        "name": "Mario Mushroom",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super_mario_bros_mushroom_sound_effect_58k.mp3"
    },
    {
        "name": "Man Screaming Meme",
        "color": "rgb(111, 214, 255)",
        "mp3": "/media/sounds/man-screaming-memes-sound-effect-2020-for-pro-content-creators_HU6teNC.mp3"
    },
    {
        "name": "Godzilla Atomic Breath - Fast Charge",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dragon-breath.mp3"
    },
    {
        "name": "Kendrick Lamar Screaming",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kendrick-lamar-screaming.mp3"
    },
    {
        "name": "Discord spam",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-spam.mp3"
    },
    {
        "name": "BMW Chime",
        "color": "rgb(30, 117, 255)",
        "mp3": "/media/sounds/bmw-bong.mp3"
    },
    {
        "name": "CROCODILO PENISINI",
        "color": "rgb(49, 104, 12)",
        "mp3": "/media/sounds/crocodilo-penisini.mp3"
    },
    {
        "name": "ROJÃO SUPER ESTOURADO!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rojao-super-estourado.mp3"
    },
    {
        "name": "Silly pinoy laugh",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/silly-laugh_x4pBItl.mp3"
    },
    {
        "name": "not like us sting",
        "color": "rgb(151, 100, 255)",
        "mp3": "/media/sounds/not-like-us-sting.mp3"
    },
    {
        "name": "soundpad",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/soundpad.mp3"
    },
    {
        "name": "Call me a good boy",
        "color": "rgb(255, 145, 180)",
        "mp3": "/media/sounds/call-me-a-good-boy.mp3"
    },
    {
        "name": "Indian scammer raging",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/indian-scammer-raging.mp3"
    },
    {
        "name": "Bomba en casa",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/bomba-en-casa.mp3"
    },
    {
        "name": "clash royale hog rida",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/clash-royale-hog-rida.mp3"
    },
    {
        "name": "Udin Din Din Dun",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/udin-din-din-dun.mp3"
    },
    {
        "name": "HUAWEI Звонок",
        "color": "rgb(239, 239, 239)",
        "mp3": "/media/sounds/huawei-zvonok_ZNCkv1G.mp3"
    },
    {
        "name": "I think I just busted",
        "color": "rgb(178, 249, 255)",
        "mp3": "/media/sounds/i-think-i-just-busted.mp3"
    },
    {
        "name": "My name is C00lkid yeah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/my-name-is-c00lkid-yeah.mp3"
    },
    {
        "name": "Ya no aguanto más",
        "color": "rgb(168, 217, 255)",
        "mp3": "/media/sounds/ya-no-aguanto-mas.mp3"
    },
    {
        "name": "You stupid ni",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-stupid-ni_XlSP7ih.mp3"
    },
    {
        "name": "Yes, Indeed - Dark Souls III",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yes-indeed_IBLkZGY.mp3"
    },
    {
        "name": "What Lovely Feet",
        "color": "rgb(23, 138, 33)",
        "mp3": "/media/sounds/what-lovely-feet.mp3"
    },
    {
        "name": "Caveman bonk.mp3",
        "color": "rgb(91, 58, 3)",
        "mp3": "/media/sounds/bonk_AgRFvsD.mp3"
    },
    {
        "name": "BING CHILLLLLLING",
        "color": "rgb(255, 246, 122)",
        "mp3": "/media/sounds/bing-chilllllling.mp3"
    },
    {
        "name": "Minecraft Level Up Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/levelup.mp3"
    },
    {
        "name": "PS2 Startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ps2_start_up.mp3"
    },
    {
        "name": "Betrayal - Halo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/betrayal_EKW4y6T.mp3"
    },
    {
        "name": "Hello your computer has virus",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hello-your-computer-has-virus-sound-effect.mp3"
    },
    {
        "name": "Fnaf Freddy’s laugh",
        "color": "rgb(105, 37, 37)",
        "mp3": "/media/sounds/fnaf-freddys-laugh.mp3"
    },
    {
        "name": "trollface smile",
        "color": "rgb(94, 94, 94)",
        "mp3": "/media/sounds/trollface-smile.mp3"
    },
    {
        "name": "Watch out randy orton",
        "color": "rgb(102, 255, 255)",
        "mp3": "/media/sounds/randyortonrko-soundeffect.mp3"
    },
    {
        "name": "Coach Whistle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/whistle_BBvcaZ1.mp3"
    },
    {
        "name": "MAN SMASHING KEYBOARD",
        "color": "rgb(32, 174, 0)",
        "mp3": "/media/sounds/green-whats-your-problem-audiotrimmer.mp3"
    },
    {
        "name": "flint and steel",
        "color": "rgb(115, 236, 255)",
        "mp3": "/media/sounds/flint-and-steel.mp3"
    },
    {
        "name": "Slash undertale",
        "color": "rgb(100, 0, 0)",
        "mp3": "/media/sounds/undertale-attack-slash-green-screen.mp3"
    },
    {
        "name": "Godzilla Atomic Breath - Fast Charge",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dragon-breath.mp3"
    },
    {
        "name": "Pistol sound effect",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/pistol-sound-effect_zejYI9w.mp3"
    },
    {
        "name": "Noot Noot - Pingu",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/noot_p0CPOIz.mp3"
    },
    {
        "name": "let's go meme",
        "color": "rgb(23, 187, 14)",
        "mp3": "/media/sounds/lets-go-meme.mp3"
    },
    {
        "name": "Americas Got Talent Buzzer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate_eb8vm6J.mp3"
    },
    {
        "name": "Minecraft Explosions",
        "color": "rgb(162, 92, 0)",
        "mp3": "/media/sounds/minecraft-explosion-green-screen.mp3"
    },
    {
        "name": "Miss!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/miss_2G4oN9I.mp3"
    },
    {
        "name": "Love, love, love...",
        "color": "rgb(0, 0, 255)",
        "mp3": "/media/sounds/untitlede42rewrwerwerwe.mp3"
    },
    {
        "name": "Halo theme oooh",
        "color": "rgb(31, 145, 209)",
        "mp3": "/media/sounds/halo-theme-song-original-2m252s.mp3"
    },
    {
        "name": "Slap! AHH!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slap-ahh.mp3"
    },
    {
        "name": "yay roblox",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yay-roblox.mp3"
    },
    {
        "name": "С Х**ЛИ ТИША ТАКАЯ!",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/s-kh-li-tisha-takaia.mp3"
    },
    {
        "name": "Old Church Bell Meme",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/old-church-bell-meme.mp3"
    },
    {
        "name": "SEGA! (HD)",
        "color": "rgb(0, 19, 255)",
        "mp3": "/media/sounds/sega-hd.mp3"
    },
    {
        "name": "meme violin (sad violin)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meme-violin-sad-violin.mp3"
    },
    {
        "name": "Low honor RDR 2",
        "color": "rgb(128, 0, 0)",
        "mp3": "/media/sounds/low-honor-rdr-2.mp3"
    },
    {
        "name": "Ichigo Bankai Screaming REEEEEEEEEEEEE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ichigo-bankai-screaming-reeeeeeeeeeeee.mp3"
    },
    {
        "name": "Bobrito Bandito Italian brainrot",
        "color": "rgb(207, 255, 208)",
        "mp3": "/media/sounds/bobrito-bandito-italian-brainrot.mp3"
    },
    {
        "name": "Cat rap",
        "color": "rgb(210, 190, 148)",
        "mp3": "/media/sounds/cat-rap.mp3"
    },
    {
        "name": "crowd panic loud",
        "color": "rgb(122, 9, 139)",
        "mp3": "/media/sounds/crowd-panic-sound-effect-mp3cut_WCIalhC.mp3"
    },
    {
        "name": "Cappuccino Assassino",
        "color": "rgb(112, 81, 61)",
        "mp3": "/media/sounds/cappuccino-assassino.mp3"
    },
    {
        "name": "technologia",
        "color": "rgb(243, 255, 71)",
        "mp3": "/media/sounds/technologia.mp3"
    },
    {
        "name": "Pussy!",
        "color": "rgb(255, 209, 178)",
        "mp3": "/media/sounds/pussy_RnRyRcQ.mp3"
    },
    {
        "name": "GET THE F OUT OF MY ROOM IM PLAYING MINECRAFT!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/get-the-f-out-of-my-room-im-playing-minecraft.mp3"
    },
    {
        "name": "THINK MARK!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/think-mark_u48iMaR.mp3"
    },
    {
        "name": "Montagem Tomada",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/montagem-tomada.mp3"
    },
    {
        "name": "Skibidi Fortnite - @Cartel_Dealer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/skibidi-fortnite-cartel-dealer.mp3"
    },
    {
        "name": "bluudud FORSAKEN Hey, it's me!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bluudud-forsaken-hey-its-me.mp3"
    },
    {
        "name": "Bombardiro Crocodilo!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bombardiro-crocodilo_4kNJ6me.mp3"
    },
    {
        "name": "Ki kore",
        "color": "rgb(255, 42, 42)",
        "mp3": "/media/sounds/ki-kore.mp3"
    },
    {
        "name": "Planting C4 CSGO",
        "color": "rgb(114, 162, 255)",
        "mp3": "/media/sounds/planting-c4-csgo.mp3"
    },
    {
        "name": "lissan al gaib",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lissan-al-gaib.mp3"
    },
    {
        "name": "Eeeee..........",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/its-in-the-game.mp3"
    },
    {
        "name": "Khopdi tor salay ka",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/khopdi-tor-salay-ka.mp3"
    },
    {
        "name": "siren meme",
        "color": "rgb(123, 0, 255)",
        "mp3": "/media/sounds/siren-meme.mp3"
    },
    {
        "name": "Rooster Crow 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/critical-stop.mp3"
    },
    {
        "name": "Peter Griffin snickers",
        "color": "rgb(251, 255, 49)",
        "mp3": "/media/sounds/peter-griffin-snickers.mp3"
    },
    {
        "name": "Arby n Chief - lol",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/arby-lolo.mp3"
    },
    {
        "name": "Fat Bastard - Shitter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/shitter.mp3"
    },
    {
        "name": "Giorno's Theme normal",
        "color": "rgb(255, 250, 114)",
        "mp3": "/media/sounds/giornos-theme-but-only-the-best-part-is-in_vwd15lya_lyb0-online-audio-converter.mp3"
    },
    {
        "name": "aughhhh tiktok",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aughhhh-tiktok.mp3"
    },
    {
        "name": "Among Us Emergency Meeting",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/emergency-meeting-sound-among-us.mp3"
    },
    {
        "name": "Round One Fight",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mortal-kombat-9-sound-drop-round-1-fight.mp3"
    },
    {
        "name": "Super Mario Pipe",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-mario-bros.mp3"
    },
    {
        "name": "dry fart",
        "color": "rgb(204, 102, 51)",
        "mp3": "/media/sounds/dry-fart_3.mp3"
    },
    {
        "name": "Lebron James Kid",
        "color": "rgb(0, 255, 153)",
        "mp3": "/media/sounds/lebron-james.mp3"
    },
    {
        "name": "number one victory royale yeah fortnite we bout",
        "color": "rgb(128, 255, 221)",
        "mp3": "/media/sounds/number-one-victory-royale-yeah-fortnite-we-bout-to-get-down.mp3"
    },
    {
        "name": "rizzzzzzzzing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rizzzzzzzzing.mp3"
    },
    {
        "name": "Singing Angels",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/angels-singing.mp3"
    },
    {
        "name": "autotune baby crying",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmptj_6rrcb.mp3"
    },
    {
        "name": "Man Screaming Meme",
        "color": "rgb(111, 214, 255)",
        "mp3": "/media/sounds/man-screaming-memes-sound-effect-2020-for-pro-content-creators_HU6teNC.mp3"
    },
    {
        "name": "Oh No Knuckles Meme",
        "color": "rgb(26, 0, 255)",
        "mp3": "/media/sounds/oh_no_1_yTNavML.mp3"
    },
    {
        "name": "WWE Ringbell",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/wwe-bell.mp3"
    },
    {
        "name": "patrick - i love you",
        "color": "rgb(255, 0, 51)",
        "mp3": "/media/sounds/i-love-you_2.mp3"
    },
    {
        "name": "twitch bits",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/twitch-bits-donation-sound-effect-sfx.mp3"
    },
    {
        "name": "Android Ringtone",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/android-sound-effect-meme.mp3"
    },
    {
        "name": "Dragon Ball Z Heavy Punch",
        "color": "rgb(38, 190, 255)",
        "mp3": "/media/sounds/dragon-ball-z-heavy-punch.mp3"
    },
    {
        "name": "CROCODILO PENISINI",
        "color": "rgb(49, 104, 12)",
        "mp3": "/media/sounds/crocodilo-penisini.mp3"
    },
    {
        "name": "Cashh Money",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/para-sesi-efekti_PaUswM1.mp3"
    },
    {
        "name": "Minecraft Hit Sound",
        "color": "rgb(236, 255, 154)",
        "mp3": "/media/sounds/y2mate_XL9ozUG.mp3"
    },
    {
        "name": "Crowd Applause w/ Shouting",
        "color": "rgb(255, 142, 32)",
        "mp3": "/media/sounds/crowd-applause-cheer-small-group_tUQjCQt.mp3"
    },
    {
        "name": "not like us sting",
        "color": "rgb(151, 100, 255)",
        "mp3": "/media/sounds/not-like-us-sting.mp3"
    },
    {
        "name": "WHAT! OH HELL NO Grandpa",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-oh-hell-no-grandpa.mp3"
    },
    {
        "name": "Mesg ting",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mesg-ting.mp3"
    },
    {
        "name": "ГОЙДА!!!!",
        "color": "rgb(255, 106, 0)",
        "mp3": "/media/sounds/goida_hRZ6vDr.mp3"
    },
    {
        "name": "formula 1 radio notification",
        "color": "rgb(126, 255, 107)",
        "mp3": "/media/sounds/formula-1-radio-notification.mp3"
    },
    {
        "name": "Call me a good boy",
        "color": "rgb(255, 145, 180)",
        "mp3": "/media/sounds/call-me-a-good-boy.mp3"
    },
    {
        "name": "se me sale la caca",
        "color": "rgb(113, 88, 31)",
        "mp3": "/media/sounds/se-me-sale-la-caca.mp3"
    },
    {
        "name": "I'M GREEK NIGGA_69",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-greek-nigga-69.mp3"
    },
    {
        "name": "(mafioso) you won't live to see the next day",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-you-wont-live-to-see-the-next-day.mp3"
    },
    {
        "name": "C00lkidd Giggle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/c00lkidd-giggle.mp3"
    },
    {
        "name": "Tu madre tiene una",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/tu-madre-tiene-una_4GG4162.mp3"
    },
    {
        "name": "Udin Din Din Dun",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/udin-din-din-dun.mp3"
    },
    {
        "name": "Молитва",
        "color": "rgb(255, 224, 68)",
        "mp3": "/media/sounds/molitva.mp3"
    },
    {
        "name": "My name is C00lkid yeah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/my-name-is-c00lkid-yeah.mp3"
    },
    {
        "name": "GODFATHER THEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/godfather-5.mp3"
    },
    {
        "name": "Meet The Sniper Intro",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meet-the-sniper-intro.mp3"
    },
    {
        "name": "Yes, Indeed - Dark Souls III",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yes-indeed_IBLkZGY.mp3"
    },
    {
        "name": "aduh gantengnya",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aduh-gantengnya.mp3"
    },
    {
        "name": "Cuphead Knockout!",
        "color": "rgb(255, 63, 63)",
        "mp3": "/media/sounds/cuphead-knockout.mp3"
    },
    {
        "name": "discord call but bass boosted",
        "color": "rgb(35, 0, 0)",
        "mp3": "/media/sounds/discord-call-but-bass-boosted.mp3"
    },
    {
        "name": "AUGHHHHH... AUGHHHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aughhhhh-aughhhhh.mp3"
    },
    {
        "name": "omae wa mou shindeiru NANI",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nani_Pmxf5n3.mp3"
    },
    {
        "name": "We'll be right back",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/well-be-right-back.mp3"
    },
    {
        "name": "Seinfeld Theme Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/seinfeld-theme_1.mp3"
    },
    {
        "name": "Stop it Get Some Help",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/untitled3_13.mp3"
    },
    {
        "name": "Caveman bonk.mp3",
        "color": "rgb(91, 58, 3)",
        "mp3": "/media/sounds/bonk_AgRFvsD.mp3"
    },
    {
        "name": "Cloaker Payday 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/payday-2-sound-cloaker-scream.mp3"
    },
    {
        "name": "Tarkov grenade",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/grenade-plonk-sound-effect-tarkov-louder.mp3"
    },
    {
        "name": "One Eternity Later",
        "color": "rgb(51, 0, 204)",
        "mp3": "/media/sounds/one-eternity-later.mp3"
    },
    {
        "name": "SPONGEBOB ONE HOUR LATER",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/one-hour-later-spongebob-time-card-96.mp3"
    },
    {
        "name": "Ain't No Party Like A Diddy Party",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/aint-no-party-like-a-diddy-party.mp3"
    },
    {
        "name": "Chris Smoove Splash",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/chris_smoove_autotune_splash_6qks4-viduu_hi.mp3"
    },
    {
        "name": "PINGAS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pingas-richard-89282878.mp3"
    },
    {
        "name": "Perfect Street Fighter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/perfect-street-fighter-sound-effect.mp3"
    },
    {
        "name": "money money money money",
        "color": "rgb(51, 255, 0)",
        "mp3": "/media/sounds/money-button.mp3"
    },
    {
        "name": "FBI open UP. (with explosion)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fbi-open-up-explosion.mp3"
    },
    {
        "name": "Cloaker Payday 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/payday-2-sound-cloaker-scream.mp3"
    },
    {
        "name": "Tarkov grenade",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/grenade-plonk-sound-effect-tarkov-louder.mp3"
    },
    {
        "name": "One Eternity Later",
        "color": "rgb(51, 0, 204)",
        "mp3": "/media/sounds/one-eternity-later.mp3"
    },
    {
        "name": "SPONGEBOB ONE HOUR LATER",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/one-hour-later-spongebob-time-card-96.mp3"
    },
    {
        "name": "Ain't No Party Like A Diddy Party",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/aint-no-party-like-a-diddy-party.mp3"
    },
    {
        "name": "Chris Smoove Splash",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/chris_smoove_autotune_splash_6qks4-viduu_hi.mp3"
    },
    {
        "name": "i feel good !!!",
        "color": "rgb(102, 0, 153)",
        "mp3": "/media/sounds/james_brown_-_i_got_you_i_feel_good-1-i-got-you-i-feel-goodtrack-1.mp3"
    },
    {
        "name": "PINGAS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pingas-richard-89282878.mp3"
    },
    {
        "name": "Perfect Street Fighter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/perfect-street-fighter-sound-effect.mp3"
    },
    {
        "name": "money money money money",
        "color": "rgb(51, 255, 0)",
        "mp3": "/media/sounds/money-button.mp3"
    },
    {
        "name": "FBI open UP. (with explosion)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fbi-open-up-explosion.mp3"
    },
    {
        "name": "Sad Violin",
        "color": "rgb(255, 204, 0)",
        "mp3": "/media/sounds/sad-violin.mp3"
    },
    {
        "name": "Breaking Bad Intro",
        "color": "rgb(0, 102, 0)",
        "mp3": "/media/sounds/breaking-bad-intro.mp3"
    },
    {
        "name": "Bomb",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/explosion_1.mp3"
    },
    {
        "name": "Godzilla Atomic Breath - Fast Charge",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dragon-breath.mp3"
    },
    {
        "name": "MUSICA DE SIGMA ESTOURADO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/musica-de-sigma-estourado.mp3"
    },
    {
        "name": "Miss!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/miss_2G4oN9I.mp3"
    },
    {
        "name": "Discord spam",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-spam.mp3"
    },
    {
        "name": "Respect +++",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gta-san-andreas-abertura-oficial.mp3"
    },
    {
        "name": "BeReal",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bereal.mp3"
    },
    {
        "name": "omg wow!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/omg-wow.mp3"
    },
    {
        "name": "Twist - Korn",
        "color": "rgb(73, 113, 53)",
        "mp3": "/media/sounds/korn-twist-audiotrimmer.mp3"
    },
    {
        "name": "OH GREAT HEAVENS!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-great-heavens_aL9qGF8.mp3"
    },
    {
        "name": "Cartoon Mr. Krab Walking",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoon-mr-krab-walking.mp3"
    },
    {
        "name": "ahh 169 Roland",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ahh-169-roland.mp3"
    },
    {
        "name": "Жёсткая отрыжка",
        "color": "rgb(45, 224, 0)",
        "mp3": "/media/sounds/zhiostkaia-otryzhka.mp3"
    },
    {
        "name": "СЛЫШ 1",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/slysh-1.mp3"
    },
    {
        "name": "Indian scammer raging",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/indian-scammer-raging.mp3"
    },
    {
        "name": "Bomba en casa",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/bomba-en-casa.mp3"
    },
    {
        "name": "Blocked by james",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/blocked-by-james.mp3"
    },
    {
        "name": "Click sound for GD",
        "color": "rgb(88, 255, 74)",
        "mp3": "/media/sounds/click-sound-for-gd.mp3"
    },
    {
        "name": "c00lkidd [Come out]",
        "color": "rgb(179, 64, 64)",
        "mp3": "/media/sounds/c00lkidd-come-out.mp3"
    },
    {
        "name": "HUAWEI Звонок",
        "color": "rgb(239, 239, 239)",
        "mp3": "/media/sounds/huawei-zvonok_ZNCkv1G.mp3"
    },
    {
        "name": "grug music",
        "color": "rgb(176, 110, 28)",
        "mp3": "/media/sounds/grug-music.mp3"
    },
    {
        "name": "BRR BRR PATAPIM funk",
        "color": "rgb(17, 94, 18)",
        "mp3": "/media/sounds/brr-brr-patapim-funk.mp3"
    },
    {
        "name": "I think I just busted",
        "color": "rgb(178, 249, 255)",
        "mp3": "/media/sounds/i-think-i-just-busted.mp3"
    },
    {
        "name": "CROCODILO PENISINI",
        "color": "rgb(49, 104, 12)",
        "mp3": "/media/sounds/crocodilo-penisini.mp3"
    },
    {
        "name": "Cashh Money",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/para-sesi-efekti_PaUswM1.mp3"
    },
    {
        "name": "Twist - Korn",
        "color": "rgb(73, 113, 53)",
        "mp3": "/media/sounds/korn-twist-audiotrimmer.mp3"
    },
    {
        "name": "Minecraft Hit Sound",
        "color": "rgb(236, 255, 154)",
        "mp3": "/media/sounds/y2mate_XL9ozUG.mp3"
    },
    {
        "name": "Crowd Applause w/ Shouting",
        "color": "rgb(255, 142, 32)",
        "mp3": "/media/sounds/crowd-applause-cheer-small-group_tUQjCQt.mp3"
    },
    {
        "name": "WHAT! OH HELL NO Grandpa",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-oh-hell-no-grandpa.mp3"
    },
    {
        "name": "Mesg ting",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mesg-ting.mp3"
    },
    {
        "name": "Finger Snap",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/finger-snap.mp3"
    },
    {
        "name": "CUPCAKKE AWWH!",
        "color": "rgb(255, 16, 150)",
        "mp3": "/media/sounds/cupcakke-awwh.mp3"
    },
    {
        "name": "СЛЫШ 1",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/slysh-1.mp3"
    },
    {
        "name": "formula 1 radio notification",
        "color": "rgb(126, 255, 107)",
        "mp3": "/media/sounds/formula-1-radio-notification.mp3"
    },
    {
        "name": "Call me a good boy",
        "color": "rgb(255, 145, 180)",
        "mp3": "/media/sounds/call-me-a-good-boy.mp3"
    },
    {
        "name": "se me sale la caca",
        "color": "rgb(113, 88, 31)",
        "mp3": "/media/sounds/se-me-sale-la-caca.mp3"
    },
    {
        "name": "Udin Din Din Dun",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/udin-din-din-dun.mp3"
    },
    {
        "name": "Молитва",
        "color": "rgb(255, 224, 68)",
        "mp3": "/media/sounds/molitva.mp3"
    },
    {
        "name": "Rhymes With Grug",
        "color": "rgb(5, 255, 0)",
        "mp3": "/media/sounds/rhymes-with-grug.mp3"
    },
    {
        "name": "GODFATHER THEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/godfather-5.mp3"
    },
    {
        "name": "Yes, Indeed - Dark Souls III",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yes-indeed_IBLkZGY.mp3"
    },
    {
        "name": "aduh gantengnya",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aduh-gantengnya.mp3"
    },
    {
        "name": "Cuphead Knockout!",
        "color": "rgb(255, 63, 63)",
        "mp3": "/media/sounds/cuphead-knockout.mp3"
    },
    {
        "name": "discord call but bass boosted",
        "color": "rgb(35, 0, 0)",
        "mp3": "/media/sounds/discord-call-but-bass-boosted.mp3"
    },
    {
        "name": "Chewbacca",
        "color": "rgb(102, 51, 0)",
        "mp3": "/media/sounds/chewbacca.swf.mp3"
    },
    {
        "name": "Stop it Get Some Help",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/untitled3_13.mp3"
    },
    {
        "name": "Caveman bonk.mp3",
        "color": "rgb(91, 58, 3)",
        "mp3": "/media/sounds/bonk_AgRFvsD.mp3"
    },
    {
        "name": "Cloaker Payday 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/payday-2-sound-cloaker-scream.mp3"
    },
    {
        "name": "Tarkov grenade",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/grenade-plonk-sound-effect-tarkov-louder.mp3"
    },
    {
        "name": "bomb has been planted",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bomb-has-been-planted-sound-effect-cs-go.mp3"
    },
    {
        "name": "Windows 10 Error Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/windows-10-error-sound.mp3"
    },
    {
        "name": "Animal Crossing Isabelle Voice",
        "color": "rgb(243, 255, 75)",
        "mp3": "/media/sounds/animal-crossing-isabelle-voice-clips-no-background-music-youtubemp3free.mp3"
    },
    {
        "name": "SPONGEBOB ONE HOUR LATER",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/one-hour-later-spongebob-time-card-96.mp3"
    },
    {
        "name": "Chris Smoove Splash",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/chris_smoove_autotune_splash_6qks4-viduu_hi.mp3"
    },
    {
        "name": "i feel good !!!",
        "color": "rgb(102, 0, 153)",
        "mp3": "/media/sounds/james_brown_-_i_got_you_i_feel_good-1-i-got-you-i-feel-goodtrack-1.mp3"
    },
    {
        "name": "PINGAS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pingas-richard-89282878.mp3"
    },
    {
        "name": "Jutsu Activation",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/katon.mp3"
    },
    {
        "name": "FBI open UP. (with explosion)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fbi-open-up-explosion.mp3"
    },
    {
        "name": "Sad Violin",
        "color": "rgb(255, 204, 0)",
        "mp3": "/media/sounds/sad-violin.mp3"
    },
    {
        "name": "Get yo fat ass back here",
        "color": "rgb(45, 235, 240)",
        "mp3": "/media/sounds/get-yo-fat-ass-back-here.mp3"
    },
    {
        "name": "i feel good !!!",
        "color": "rgb(102, 0, 153)",
        "mp3": "/media/sounds/james_brown_-_i_got_you_i_feel_good-1-i-got-you-i-feel-goodtrack-1.mp3"
    },
    {
        "name": "PINGAS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pingas-richard-89282878.mp3"
    },
    {
        "name": "booing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/booing.mp3"
    },
    {
        "name": "Prowler",
        "color": "rgb(118, 49, 154)",
        "mp3": "/media/sounds/prowler.mp3"
    },
    {
        "name": "Street Fighter K.O",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mlg-resource-street-fighter-ko-greenscreen.mp3"
    },
    {
        "name": "Pink Panther",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-pink-panther-theme-song-original-version.mp3"
    },
    {
        "name": "Spiderman 2099 theme",
        "color": "rgb(255, 9, 9)",
        "mp3": "/media/sounds/spiderman-2099-theme.mp3"
    },
    {
        "name": "Pablo MEME",
        "color": "rgb(90, 255, 8)",
        "mp3": "/media/sounds/yt1s_NSjFWNC.mp3"
    },
    {
        "name": "dog whistle",
        "color": "rgb(255, 247, 250)",
        "mp3": "/media/sounds/dog-whistle.mp3"
    },
    {
        "name": "Yep That's me you...",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/original-yep-thats-me-youre-probably-wondering_vRBcfjS.mp3"
    },
    {
        "name": "Tom and jerry scream",
        "color": "rgb(145, 255, 126)",
        "mp3": "/media/sounds/ow2-online-audio-converter.mp3"
    },
    {
        "name": "Bla bla bla ble ble ble",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bla-bla-bla-ble-ble-ble.mp3"
    },
    {
        "name": "Yes, Mommy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yes-mommy.mp3"
    },
    {
        "name": "THE ONE PIECE IS REAL",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/the-one-piece-is-real.mp3"
    },
    {
        "name": "nerd emoji sound",
        "color": "rgb(255, 232, 21)",
        "mp3": "/media/sounds/nerd-emoji-sound.mp3"
    },
    {
        "name": "extremely loud correct buzzer",
        "color": "rgb(33, 255, 29)",
        "mp3": "/media/sounds/extremely-loud-correct-buzzer.mp3"
    },
    {
        "name": "Samsung estourado",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/samsung-estourado.mp3"
    },
    {
        "name": "elevator waiting",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/elevator_2jN6tnc.mp3"
    },
    {
        "name": "Screech Car Crash",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/237375__squareal__car-crash.mp3"
    },
    {
        "name": "Undertale Savepoint",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/savepoint.mp3"
    },
    {
        "name": "Brook Laughter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/one-piece-brooks-laugh-15-minutes.mp3"
    },
    {
        "name": "OKAY LETS  GO",
        "color": "rgb(203, 52, 255)",
        "mp3": "/media/sounds/okay-lets-go_buBmJye.mp3"
    },
    {
        "name": "Sith Lightsaber Ignition",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sithignition.mp3"
    },
    {
        "name": "Cat Call whistle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cat-call.mp3"
    },
    {
        "name": "Jerkmate",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jerkmate_zg37Y8g.mp3"
    },
    {
        "name": "BeReal",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bereal.mp3"
    },
    {
        "name": "20th Century Fox Fanfare",
        "color": "rgb(255, 211, 0)",
        "mp3": "/media/sounds/20th-century-fox-fanfare.mp3"
    },
    {
        "name": "SUS.mp3",
        "color": "rgb(204, 98, 117)",
        "mp3": "/media/sounds/sus-mp3.mp3"
    },
    {
        "name": "gato riendo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gato-riendo_6bOc2ur.mp3"
    },
    {
        "name": "Dueling Banjos Short",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dueling-banjos-deliverance-ost-audiotrimmer_6zcjq4y.mp3"
    },
    {
        "name": "Meek Mill and Diddy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meek-mill-and-diddy.mp3"
    },
    {
        "name": "Cartoon Gulp Swallow Sound",
        "color": "rgb(255, 117, 154)",
        "mp3": "/media/sounds/cartoon-gulp-swallow-sound.mp3"
    },
    {
        "name": "fnaf2 ambience",
        "color": "rgb(54, 54, 54)",
        "mp3": "/media/sounds/fnaf2-ambience.mp3"
    },
    {
        "name": "ULTRAKILL \"HA\" computer laughing",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/ultrakill-ha-computer-laughing.mp3"
    },
    {
        "name": "soundpad",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/soundpad.mp3"
    },
    {
        "name": "HEY      EVERY      !!",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/hey-every_55MD2Ij.mp3"
    },
    {
        "name": "Goal goal goal goal gooooaaaaalllllll",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/goal-goal-goal-goal-gooooooaaaaaalllll-online-audio-converter.mp3"
    },
    {
        "name": "man screaming super loud (sfx_scream7)",
        "color": "rgb(255, 127, 6)",
        "mp3": "/media/sounds/man-screaming-super-loud-sfx-scream7.mp3"
    },
    {
        "name": "Crab Rave",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/original_zeowGW1.mp3"
    },
    {
        "name": "BING CHILLLLLLING",
        "color": "rgb(255, 246, 122)",
        "mp3": "/media/sounds/bing-chilllllling.mp3"
    },
    {
        "name": "i believe i can fly",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/untitled2.mp3"
    },
    {
        "name": "samsung notification",
        "color": "rgb(80, 194, 255)",
        "mp3": "/media/sounds/samsung-notification-sound-bass-boosted.mp3"
    },
    {
        "name": "two hours later",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-two-hours-later-2019-download-link.mp3"
    },
    {
        "name": "Transformers (transforming)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/transforming-sound-from-the-transformers.mp3"
    },
    {
        "name": "Big bomb fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rec_10s_neLGvAd.mp3"
    },
    {
        "name": "Kendrick Mustard",
        "color": "rgb(255, 249, 76)",
        "mp3": "/media/sounds/kendrick-mustard.mp3"
    },
    {
        "name": "Mexican Laugh",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/mexlaugh4.mp3"
    },
    {
        "name": "hey_its_me_goku",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hey-its-me-goku.mp3"
    },
    {
        "name": "SNORE MIMIMIMIMI",
        "color": "rgb(104, 169, 178)",
        "mp3": "/media/sounds/snore-mimimimimi.mp3"
    },
    {
        "name": "MLG Airhorn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/airhorn.mp3"
    },
    {
        "name": "creeper explosion minecraft",
        "color": "rgb(93, 255, 75)",
        "mp3": "/media/sounds/creeper-explosion.mp3"
    },
    {
        "name": "GET SHIT ON",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/trim_WZMQ9g3.mp3"
    },
    {
        "name": "dog whistle",
        "color": "rgb(255, 247, 250)",
        "mp3": "/media/sounds/dog-whistle.mp3"
    },
    {
        "name": "Finding nemo-Mine Mine Mine",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mine-mine_Z6BwRzI.mp3"
    },
    {
        "name": "Majora's mask bell",
        "color": "rgb(153, 0, 102)",
        "mp3": "/media/sounds/mm_clocktower_bell.mp3"
    },
    {
        "name": "Godzilla 2014 Roar",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/godzilla-2014-roar.mp3"
    },
    {
        "name": "oi oi baka",
        "color": "rgb(44, 255, 250)",
        "mp3": "/media/sounds/oi-oi-baka_ZPZFcW3.mp3"
    },
    {
        "name": "pain theme naruto",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/pain-2.mp3"
    },
    {
        "name": "VINE BOOM BASS BOOSTED MAN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom-bass-boosted-man.mp3"
    },
    {
        "name": "see you",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sound-effects-eerie-ghost-voice_kemCjJn.mp3"
    },
    {
        "name": "Cartoon slide whistle",
        "color": "rgb(73, 38, 255)",
        "mp3": "/media/sounds/cartoon-slide.mp3"
    },
    {
        "name": "Sad Musicccccc",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sad-music.mp3"
    },
    {
        "name": "2_ตลกตบมุก_2",
        "color": "rgb(249, 255, 28)",
        "mp3": "/media/sounds/2-tlktbmuk-2.mp3"
    },
    {
        "name": "fire alarm chirp",
        "color": "rgb(164, 147, 255)",
        "mp3": "/media/sounds/fire-alarm-chirp.mp3"
    },
    {
        "name": "roblox laugh",
        "color": "rgb(255, 208, 20)",
        "mp3": "/media/sounds/roblox-laugh.mp3"
    },
    {
        "name": "I'm a lying piece of",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/im-a-lying-piece-of.mp3"
    },
    {
        "name": "Police Siren - Brr Brr",
        "color": "rgb(0, 60, 255)",
        "mp3": "/media/sounds/siren-brr-brr.mp3"
    },
    {
        "name": "bass phonk",
        "color": "rgb(203, 255, 62)",
        "mp3": "/media/sounds/record-online-voice-recorder_bkb6PUo.mp3"
    },
    {
        "name": "I can do anything Jevil",
        "color": "rgb(255, 238, 0)",
        "mp3": "/media/sounds/jevil-i-can-do-anything.mp3"
    },
    {
        "name": "20th Century Fox",
        "color": "rgb(255, 204, 0)",
        "mp3": "/media/sounds/20th_century_fox-cut-mp3.mp3"
    },
    {
        "name": "oh my god hell no bruh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-my-god-hell-no-bruh.mp3"
    },
    {
        "name": "oh my god hell no bruh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-my-god-hell-no-bruh.mp3"
    },
    {
        "name": "AUGHHHHHHHHHH",
        "color": "rgb(255, 94, 0)",
        "mp3": "/media/sounds/aughhhhhhhhhh.mp3"
    },
    {
        "name": "fnaf phone ringing sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fnaf-phone-ringing-sound.mp3"
    },
    {
        "name": "crowd panic loud",
        "color": "rgb(122, 9, 139)",
        "mp3": "/media/sounds/crowd-panic-sound-effect-mp3cut_WCIalhC.mp3"
    },
    {
        "name": "смех ребенка",
        "color": "rgb(255, 213, 0)",
        "mp3": "/media/sounds/smekh-rebenka.mp3"
    },
    {
        "name": "Cartoon falling",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoon-falling.mp3"
    },
    {
        "name": "Long brain fart earrape",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/long-brain-fart-earrape.mp3"
    },
    {
        "name": "Minos Prime ''THY END IS NOW!''",
        "color": "rgb(151, 255, 251)",
        "mp3": "/media/sounds/minos-prime-thy-end-is-now.mp3"
    },
    {
        "name": "Akhhhh...",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/akhhhh.mp3"
    },
    {
        "name": "meow meow n-gga",
        "color": "rgb(45, 32, 0)",
        "mp3": "/media/sounds/meow-meow-n-gga.mp3"
    },
    {
        "name": "(mafioso) pizza after this",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-pizza-after-this.mp3"
    },
    {
        "name": "This is... MASS INFECTION!",
        "color": "rgb(15, 51, 4)",
        "mp3": "/media/sounds/this-is-mass-infection.mp3"
    },
    {
        "name": "фонк ребенок плачет",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fonk-rebenok-plachet.mp3"
    },
    {
        "name": "Spongebob n word",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-n-word.mp3"
    },
    {
        "name": "Trick shot bluudude",
        "color": "rgb(0, 94, 255)",
        "mp3": "/media/sounds/trick-shot-bluudude.mp3"
    },
    {
        "name": "no fairrr!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/no-fairrr.mp3"
    },
    {
        "name": "dzr: gubby",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/dzr-gubby.mp3"
    },
    {
        "name": "Assumptions",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/assumptions.mp3"
    },
    {
        "name": "SHE WAS A FAIRY with a phatty",
        "color": "rgb(255, 147, 251)",
        "mp3": "/media/sounds/she-was-a-fairy-with-a-phatty.mp3"
    },
    {
        "name": "among us yellow sus",
        "color": "rgb(250, 255, 39)",
        "mp3": "/media/sounds/troll-face-among-us-meme.mp3"
    },
    {
        "name": "Sad Cat Dance Song",
        "color": "rgb(243, 129, 255)",
        "mp3": "/media/sounds/sad-cat-dance-song.mp3"
    },
    {
        "name": "Dixie Car Horn",
        "color": "rgb(43, 0, 255)",
        "mp3": "/media/sounds/dixie-horn_daniel-simion_ngfToTz.mp3"
    },
    {
        "name": "Times Up Jeopardy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/times-up_AN8OlqZ.mp3"
    },
    {
        "name": "niggerplane1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/niggerplane1_UZq6NdE.mp3"
    },
    {
        "name": "Korok Yahaha",
        "color": "rgb(75, 188, 110)",
        "mp3": "/media/sounds/korok-yahaha.mp3"
    },
    {
        "name": "WHAT ARE YOU DOING STEP BRO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-are-you-doing-step-bro-tik-tok-meme.mp3"
    },
    {
        "name": "Good Bad Ugly Whistle",
        "color": "rgb(255, 153, 153)",
        "mp3": "/media/sounds/goodbadugly-whistle-long.mp3"
    },
    {
        "name": "FNAF 2 Hallway Ambience",
        "color": "rgb(93, 255, 240)",
        "mp3": "/media/sounds/fnaf-2-hallway-ambience.mp3"
    },
    {
        "name": "aw Shit here we go again",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gta-san-andreas-ah-shit-here-we-go-again.mp3"
    },
    {
        "name": "Grunt Birthday Party",
        "color": "rgb(255, 153, 0)",
        "mp3": "/media/sounds/grunt-birthday-party.mp3"
    },
    {
        "name": "undertale - megalovania",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/megalovania.mp3"
    },
    {
        "name": "Valorant teleporter",
        "color": "rgb(14, 159, 255)",
        "mp3": "/media/sounds/valorant-teleporter.mp3"
    },
    {
        "name": "nick eh 30 intro",
        "color": "rgb(37, 52, 255)",
        "mp3": "/media/sounds/nick-eh-30-intro.mp3"
    },
    {
        "name": "Vegeta - Something Just Snapped",
        "color": "rgb(123, 86, 255)",
        "mp3": "/media/sounds/vegeta-something-just-snapped_s9osoEc.mp3"
    },
    {
        "name": "Glass Breaking",
        "color": "rgb(0, 51, 153)",
        "mp3": "/media/sounds/broken-glass-sound-effect-high-quality.mp3"
    },
    {
        "name": "Mr Beast Phonk Meme",
        "color": "rgb(53, 12, 255)",
        "mp3": "/media/sounds/mr-beast-phonk-meme.mp3"
    },
    {
        "name": "Undertale - Omega Flowey Laugh",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/00002a5b.mp3"
    },
    {
        "name": "FNAF Balloon Boy Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/echo4b.mp3"
    },
    {
        "name": "Undertale Gaster blaster",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gaster_blaster_sound_effect_1.mp3"
    },
    {
        "name": "Caught a Pokemon!",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/06-caught-a-pokemon.mp3"
    },
    {
        "name": "Train Horn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/quadruplex-norm.mp3"
    },
    {
        "name": "troll face laugh meme oh no no no",
        "color": "rgb(68, 255, 162)",
        "mp3": "/media/sounds/oh-no-no-no-no-laugh_sejx5Bk.mp3"
    },
    {
        "name": "Yippee meme sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yippee-meme-sound-effect.mp3"
    },
    {
        "name": "UNCLE RUCKUS POWERFUL",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/powerful.mp3"
    },
    {
        "name": "TRASH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/trash-sound-effect.mp3"
    },
    {
        "name": "boy what the hell boy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/boy-what-the-hell-boy-meme.mp3"
    },
    {
        "name": "Dr. Livesey",
        "color": "rgb(11, 57, 3)",
        "mp3": "/media/sounds/dr-livesey.mp3"
    },
    {
        "name": "IShowSpeed Bark",
        "color": "rgb(72, 104, 255)",
        "mp3": "/media/sounds/ishowspeed-barks-at-his-sheets.mp3"
    },
    {
        "name": "Slendytubbies Tinky Winky",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/slendy1.mp3"
    },
    {
        "name": "OH MY GAH (Clean)",
        "color": "rgb(254, 0, 255)",
        "mp3": "/media/sounds/oh-my-gah.mp3"
    },
    {
        "name": "Bamboo hit",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bamboo-hit-sound-effect.mp3"
    },
    {
        "name": "TF2 Soldier Screaming",
        "color": "rgb(152, 52, 52)",
        "mp3": "/media/sounds/screaming-soldier-tf2.mp3"
    },
    {
        "name": "Hi how are ya Spongebob",
        "color": "rgb(253, 255, 0)",
        "mp3": "/media/sounds/img_0496.mp3"
    },
    {
        "name": "Peter Griffin Im coming",
        "color": "rgb(6, 161, 48)",
        "mp3": "/media/sounds/peter-griffin-im-coming.mp3"
    },
    {
        "name": "Doors Elevator music",
        "color": "rgb(40, 9, 71)",
        "mp3": "/media/sounds/doors-elevator-music.mp3"
    },
    {
        "name": "Subscriber Alert",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mi-gente-sountec-live-edit.mp3"
    },
    {
        "name": "loud shitpost fart",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/loud-shitpost-fart.mp3"
    },
    {
        "name": "Man Pooping His Brains Out",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/man-pooping-his-brains-out.mp3"
    },
    {
        "name": "I AM GONNA KICK YOUR ASS",
        "color": "rgb(89, 255, 0)",
        "mp3": "/media/sounds/im-gonna-kick-your-ass.mp3"
    },
    {
        "name": "MMM (Rap)",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mmm-6.mp3"
    },
    {
        "name": "Minecraft Totem Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/minecraft-totem-sound.mp3"
    },
    {
        "name": "Squidward crying lol",
        "color": "rgb(149, 255, 75)",
        "mp3": "/media/sounds/yt1s_ETil2rU.mp3"
    },
    {
        "name": "hi! rblx SE",
        "color": "rgb(166, 239, 255)",
        "mp3": "/media/sounds/hi-rblx-se.mp3"
    },
    {
        "name": "Гимн твича mzlf",
        "color": "rgb(22, 95, 255)",
        "mp3": "/media/sounds/gimn-tvicha-mzlf.mp3"
    },
    {
        "name": "Meek Mill and Diddy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meek-mill-and-diddy.mp3"
    },
    {
        "name": "Return By Death",
        "color": "rgb(0, 0, 51)",
        "mp3": "/media/sounds/return-by-death.mp3"
    },
    {
        "name": "AGAIN! AGAIN!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/again-again.mp3"
    },
    {
        "name": "Coryxkenshin \"Yeager\" slap sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/coryxkenshin-yeager-slap-sound-effect.mp3"
    },
    {
        "name": "Go Crazy Go stupid",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/go-crazy-go-stupid.mp3"
    },
    {
        "name": "kid says whats up f-",
        "color": "rgb(172, 131, 255)",
        "mp3": "/media/sounds/kid-says-whats-up-f.mp3"
    },
    {
        "name": "why did u redeem it",
        "color": "rgb(255, 40, 158)",
        "mp3": "/media/sounds/why-did-u-redeem-it.mp3"
    },
    {
        "name": "Mi bomboclaut",
        "color": "rgb(255, 158, 31)",
        "mp3": "/media/sounds/mi-bomboclaut_linGNm7.mp3"
    },
    {
        "name": "Legend of Zelda - Rupee",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rupee-collect.mp3"
    },
    {
        "name": "What meme song",
        "color": "rgb(71, 0, 0)",
        "mp3": "/media/sounds/what-bottom-text-meme-sanctuary-guardian-sound-effect-hd_tdDIUTg.mp3"
    },
    {
        "name": "NUH UH MEME",
        "color": "rgb(56, 122, 0)",
        "mp3": "/media/sounds/nuh-uh-meme.mp3"
    },
    {
        "name": "Social credit music",
        "color": "rgb(255, 245, 0)",
        "mp3": "/media/sounds/social-credit-music.mp3"
    },
    {
        "name": "Slash undertale",
        "color": "rgb(100, 0, 0)",
        "mp3": "/media/sounds/undertale-attack-slash-green-screen.mp3"
    },
    {
        "name": "BLYAT kid",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/blyat_9T1fo5H.mp3"
    },
    {
        "name": "packgod 3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/packgod-3.mp3"
    },
    {
        "name": "Eero",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eero.mp3"
    },
    {
        "name": "Hooray! tiktok sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hooray-tiktok-sound.mp3"
    },
    {
        "name": "Mouse Click 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mouse-click_gt1reD8.mp3"
    },
    {
        "name": "patrick - i love you",
        "color": "rgb(255, 0, 51)",
        "mp3": "/media/sounds/i-love-you_2.mp3"
    },
    {
        "name": "Gunshot (Play)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunshot_9JDniTe.mp3"
    },
    {
        "name": "yoda screaming",
        "color": "rgb(78, 255, 167)",
        "mp3": "/media/sounds/yodascreamingfunny.mp3"
    },
    {
        "name": "scary movie wazzup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scary-movie-wazzup.mp3"
    },
    {
        "name": "Cartoon Jump",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoon-jump.mp3"
    },
    {
        "name": "fortnite pump shotgun",
        "color": "rgb(81, 255, 41)",
        "mp3": "/media/sounds/fortnite-pump-shotgun.mp3"
    },
    {
        "name": "Peter Griffin: Oh my god who the hell cares?",
        "color": "rgb(155, 2, 2)",
        "mp3": "/media/sounds/peter-griffin-who-the-hell-cares.mp3"
    },
    {
        "name": "Kira Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kira_s-laugh-death-note-ringtone-by-death-note_light-kira.mp3"
    },
    {
        "name": "GTA V Wasted (Death Sound)",
        "color": "rgb(219, 0, 0)",
        "mp3": "/media/sounds/gta-v-wasted-death-sound.mp3"
    },
    {
        "name": "Domain Expansion - Sukuna",
        "color": "rgb(95, 0, 0)",
        "mp3": "/media/sounds/domain-expansion-sukuna.mp3"
    },
    {
        "name": "Spider-Man thwip",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spider-man-customized-web-thwip-sound-effect-1_ybmate.mp3"
    },
    {
        "name": "musica romantica",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/musica-romantica.mp3"
    },
    {
        "name": "Say My Name - Heisenberg",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/heisenberg-youre-goddamn-right-walter-white-say-my-name-breaking-bad-season-5.mp3"
    },
    {
        "name": "Mamma mia Mario",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mamma-mia_caQRETK.mp3"
    },
    {
        "name": "TF2 Notification Sound",
        "color": "rgb(157, 157, 157)",
        "mp3": "/media/sounds/tf2-notification-sound.mp3"
    },
    {
        "name": "Metal gear solid death",
        "color": "rgb(255, 34, 225)",
        "mp3": "/media/sounds/metal_gear_solid_game_over_screen_clean_background-1.mp3"
    },
    {
        "name": "Annihilation the alien",
        "color": "rgb(10, 27, 255)",
        "mp3": "/media/sounds/annihilation-the-alien.mp3"
    },
    {
        "name": "AOL Dial-Up",
        "color": "rgb(4, 0, 109)",
        "mp3": "/media/sounds/aoldialup1.mp3"
    },
    {
        "name": "Hank About to Buss",
        "color": "rgb(246, 140, 27)",
        "mp3": "/media/sounds/hank-about-to-buss.mp3"
    },
    {
        "name": "fluffing a duck",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vlc-record-2019-06-12-15h36m37s-fluffing-a-duck.mp3"
    },
    {
        "name": "Ice Ice Baby",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/ice-ice-baby.mp3"
    },
    {
        "name": "meme violin (sad violin)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meme-violin-sad-violin.mp3"
    },
    {
        "name": "Oh Noh Cartoon",
        "color": "rgb(225, 255, 32)",
        "mp3": "/media/sounds/oh-no_h28Tjuw.mp3"
    },
    {
        "name": "vineboom (long)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vineboom-long.mp3"
    },
    {
        "name": "Return By Death",
        "color": "rgb(0, 0, 51)",
        "mp3": "/media/sounds/return-by-death.mp3"
    },
    {
        "name": "yeaa! rblx SE",
        "color": "rgb(213, 255, 25)",
        "mp3": "/media/sounds/yeaa-rblx-se.mp3"
    },
    {
        "name": "Americas Got Talent Buzzer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate_eb8vm6J.mp3"
    },
    {
        "name": "Correct Ping",
        "color": "rgb(54, 255, 32)",
        "mp3": "/media/sounds/ding-sound-effect_1_CVUaI0C.mp3"
    },
    {
        "name": "Locked In Ninja Low Taper Fade",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/locked-in-ninja-low-taper-fade.mp3"
    },
    {
        "name": "Wort wort wort!",
        "color": "rgb(0, 0, 102)",
        "mp3": "/media/sounds/wort_wort_wort.mp3"
    },
    {
        "name": "Let's Get It On - Marvin Gaye",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/marvin-gaye-lets-get-it-on-00_00_00-00_00_26.mp3"
    },
    {
        "name": "Lightning",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lightning-storm-sound-effect.mp3"
    },
    {
        "name": "Here's Johnny",
        "color": "rgb(0, 102, 102)",
        "mp3": "/media/sounds/heres-johnny_1.mp3"
    },
    {
        "name": "ksi lol",
        "color": "rgb(0, 255, 51)",
        "mp3": "/media/sounds/ksi-lol.mp3"
    },
    {
        "name": "I like ya and I want ya",
        "color": "rgb(102, 51, 0)",
        "mp3": "/media/sounds/i-like-ya-and-i-want-ya.mp3"
    },
    {
        "name": "ishowspeed STFU",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ishowspeed-stfu.mp3"
    },
    {
        "name": "Mario Party 1 - MISS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/miss_8Yfu3Y9.mp3"
    },
    {
        "name": "Spider-Man thwip",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spider-man-customized-web-thwip-sound-effect-1_ybmate.mp3"
    },
    {
        "name": "dk okay",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/okay_2FZURrU.mp3"
    },
    {
        "name": "Sad Musicccccc",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sad-music.mp3"
    },
    {
        "name": "Explosionnn!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/impact_explosion_03.mp3"
    },
    {
        "name": "Say My Name - Heisenberg",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/heisenberg-youre-goddamn-right-walter-white-say-my-name-breaking-bad-season-5.mp3"
    },
    {
        "name": "Falling sound effect",
        "color": "rgb(70, 255, 196)",
        "mp3": "/media/sounds/thick-rain-falling-lightly.mp3"
    },
    {
        "name": "YEAH THAT MAKES SENSE SF3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/3rd-strike-yeah-that-makes-sense_PxRaRQT.mp3"
    },
    {
        "name": "UGH EWW",
        "color": "rgb(151, 82, 255)",
        "mp3": "/media/sounds/ew-dude-wtf.mp3"
    },
    {
        "name": "Death Splat",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/death-splat.mp3"
    },
    {
        "name": "Lion Roar",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lion-roar-sound-effect.mp3"
    },
    {
        "name": "Not today, Satan, not today",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/not-today-satan.mp3"
    },
    {
        "name": "vsauce",
        "color": "rgb(57, 255, 136)",
        "mp3": "/media/sounds/jake-chudnow-edited_y1t8j5q.mp3"
    },
    {
        "name": "gato riendo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gato-riendo_6bOc2ur.mp3"
    },
    {
        "name": "MMM (Rap)",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mmm-6.mp3"
    },
    {
        "name": "last rizzmas i gave u my gyatt",
        "color": "rgb(63, 82, 255)",
        "mp3": "/media/sounds/last-rizzmas-i-gave-u-my-gyatt.mp3"
    },
    {
        "name": "meme violin (sad violin)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meme-violin-sad-violin.mp3"
    },
    {
        "name": "Groan Tube 1",
        "color": "rgb(0, 102, 255)",
        "mp3": "/media/sounds/groan-tube-1_kdDdtlv.mp3"
    },
    {
        "name": "Undertaker Bell",
        "color": "rgb(255, 236, 0)",
        "mp3": "/media/sounds/undertaker.mp3"
    },
    {
        "name": "cry banana cat",
        "color": "rgb(255, 207, 76)",
        "mp3": "/media/sounds/cry-banana-cat.mp3"
    },
    {
        "name": "Oh Noh Cartoon",
        "color": "rgb(225, 255, 32)",
        "mp3": "/media/sounds/oh-no_h28Tjuw.mp3"
    },
    {
        "name": "seyuh carti",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/seyuh-carti.mp3"
    },
    {
        "name": "I can do anything Jevil",
        "color": "rgb(255, 238, 0)",
        "mp3": "/media/sounds/jevil-i-can-do-anything.mp3"
    },
    {
        "name": "Rickroll, but short",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rickroll-but-short.mp3"
    },
    {
        "name": "b*tch wtf",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/55463983741159354957959692288_35100067f45_YqFEpry.mp3"
    },
    {
        "name": "Fish meme sfx",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fish-meme-sfx.mp3"
    },
    {
        "name": "SÉLOCO NÃO COMPENSA",
        "color": "rgb(80, 45, 255)",
        "mp3": "/media/sounds/seloco-nao-compensa.mp3"
    },
    {
        "name": "УХ ТЫ БЛЯ°•°",
        "color": "rgb(67, 67, 67)",
        "mp3": "/media/sounds/ukh-ty-bliadeg-deg.mp3"
    },
    {
        "name": "YOU BITCH!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-bitch_s7TpHlz.mp3"
    },
    {
        "name": "Enrage",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/enrage.mp3"
    },
    {
        "name": "Kai Cenat Suspense",
        "color": "rgb(76, 61, 77)",
        "mp3": "/media/sounds/kai-cenat-suspense.mp3"
    },
    {
        "name": "(mafioso) thats the girl in our target list",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-thats-the-girl-in-our-target-list.mp3"
    },
    {
        "name": "neck hurts",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/neck-hurts.mp3"
    },
    {
        "name": "Yes king 1000",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yes-king-1000.mp3"
    },
    {
        "name": "Franklin Notification - GTA V",
        "color": "rgb(70, 255, 45)",
        "mp3": "/media/sounds/franklin-notification-gta-v.mp3"
    },
    {
        "name": "Bombardiro Crocodilo!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bombardiro-crocodilo_4kNJ6me.mp3"
    },
    {
        "name": "Ki kore",
        "color": "rgb(255, 42, 42)",
        "mp3": "/media/sounds/ki-kore.mp3"
    },
    {
        "name": "Toma Don Ramon",
        "color": "rgb(255, 231, 15)",
        "mp3": "/media/sounds/toma-don-ramon.mp3"
    },
    {
        "name": "Geometry Dash Death Sound :)",
        "color": "rgb(0, 255, 72)",
        "mp3": "/media/sounds/geometry-dash-death-sound.mp3"
    },
    {
        "name": "lissan al gaib",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lissan-al-gaib.mp3"
    },
    {
        "name": "NIGGERS",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/niggers_ulnjutA.mp3"
    },
    {
        "name": "Nickelodeon",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/nickelodeon-nick-nick-nick-short.mp3"
    },
    {
        "name": "Mark I made a steak",
        "color": "rgb(125, 72, 11)",
        "mp3": "/media/sounds/mark-i-made-a-steak.mp3"
    },
    {
        "name": "quede minimo comun",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/quede-minimo-comun.mp3"
    },
    {
        "name": "50 Cent In Da Club",
        "color": "rgb(197, 0, 0)",
        "mp3": "/media/sounds/50-cent-in-da-club-int39l-version-official-video_00_00_00-00_00_06-odownloader.mp3"
    },
    {
        "name": "u-una-na-ya-ha",
        "color": "rgb(255, 217, 25)",
        "mp3": "/media/sounds/u-una-na-ya-ha.mp3"
    },
    {
        "name": "LA VACA MUUU",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/la-vaca-muuu.mp3"
    },
    {
        "name": "niggershit",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/niggershit_f3u534g.mp3"
    },
    {
        "name": "daddys home from gojo edit",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/daddys-home-from-gojo-edit.mp3"
    },
    {
        "name": "Spider kermit",
        "color": "rgb(47, 255, 151)",
        "mp3": "/media/sounds/mp3convert.mp3"
    },
    {
        "name": "IM BOUT TO CUHHHH",
        "color": "rgb(205, 96, 255)",
        "mp3": "/media/sounds/im-bout-to-cuhhhh.mp3"
    },
    {
        "name": "Boom! Headshot!",
        "color": "rgb(153, 102, 204)",
        "mp3": "/media/sounds/boomheadshot.swf.mp3"
    },
    {
        "name": "Oh yeah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/01-oh-yeah.mp3"
    },
    {
        "name": "Screaming Sheep",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/01-the-screaming-sheep.mp3"
    },
    {
        "name": "I'm Batman",
        "color": "rgb(102, 102, 102)",
        "mp3": "/media/sounds/im-batman.mp3"
    },
    {
        "name": "Ooh Wah Ah Ah Ah",
        "color": "rgb(0, 255, 204)",
        "mp3": "/media/sounds/david-oohwahahahah.mp3"
    },
    {
        "name": "Gnome woo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-a-gnome-meme-sound-effect-woo.mp3"
    },
    {
        "name": "Ric Flair Wooo",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/woo.mp3"
    },
    {
        "name": "Vibe check",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/klonk.mp3"
    },
    {
        "name": "SPONGEBOB ONE HOUR LATER",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/one-hour-later-spongebob-time-card-96.mp3"
    },
    {
        "name": "Glass Breaking",
        "color": "rgb(0, 51, 153)",
        "mp3": "/media/sounds/broken-glass-sound-effect-high-quality.mp3"
    },
    {
        "name": "can i pet that dog",
        "color": "rgb(73, 255, 79)",
        "mp3": "/media/sounds/can-i-pet-dat-dog-mp3.mp3"
    },
    {
        "name": "Fnaf Freddy’s laugh",
        "color": "rgb(105, 37, 37)",
        "mp3": "/media/sounds/fnaf-freddys-laugh.mp3"
    },
    {
        "name": "lego build",
        "color": "rgb(255, 116, 38)",
        "mp3": "/media/sounds/lego-build.mp3"
    },
    {
        "name": "DO IT Star Wars",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/do-it_pnCjXeb.mp3"
    },
    {
        "name": "Undertale Gaster blaster",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gaster_blaster_sound_effect_1.mp3"
    },
    {
        "name": "Aye Yo WTF",
        "color": "rgb(4, 255, 96)",
        "mp3": "/media/sounds/aye-yo.mp3"
    },
    {
        "name": "Women haha",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/women-haha.mp3"
    },
    {
        "name": "HAPPY FEET. WOMBO COMBO.",
        "color": "rgb(255, 0, 102)",
        "mp3": "/media/sounds/fdfdf.mp3"
    },
    {
        "name": "Oui - Rizzler",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oui-rizzler.mp3"
    },
    {
        "name": "Chomp",
        "color": "rgb(255, 241, 49)",
        "mp3": "/media/sounds/chomp-1.mp3"
    },
    {
        "name": "Coach Whistle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/whistle_BBvcaZ1.mp3"
    },
    {
        "name": "OHHHHHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rap.mp3"
    },
    {
        "name": "Doorbell",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/door-bell-sound-effect.mp3"
    },
    {
        "name": "Sonic - You're Too Slow",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/sonic-youre-too-slow.mp3"
    },
    {
        "name": "L theme death note",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/00000000000000000.mp3"
    },
    {
        "name": "R6 Lion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/r6-lion-sound-effect.mp3"
    },
    {
        "name": "Pirates Of The Carribean!!!",
        "color": "rgb(220, 222, 0)",
        "mp3": "/media/sounds/pirates-mp3cut_xxOvJfH.mp3"
    },
    {
        "name": "SCARY INTENSE KNOCKING",
        "color": "rgb(175, 0, 0)",
        "mp3": "/media/sounds/konkonse.mp3"
    },
    {
        "name": "let's go meme",
        "color": "rgb(23, 187, 14)",
        "mp3": "/media/sounds/lets-go-meme.mp3"
    },
    {
        "name": "Throwing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/throwing-sound-effect-davemadson.mp3"
    },
    {
        "name": "Congratulations, you won!",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/congratulations-you-won.mp3"
    },
    {
        "name": "Wide Putin Walkin",
        "color": "rgb(49, 59, 67)",
        "mp3": "/media/sounds/wide-putin-walkin.mp3"
    },
    {
        "name": "helicopter meme",
        "color": "rgb(143, 143, 143)",
        "mp3": "/media/sounds/helicopter-meme.mp3"
    },
    {
        "name": "ishowspeed STFU",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ishowspeed-stfu.mp3"
    },
    {
        "name": "Sad Musicccccc",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sad-music.mp3"
    },
    {
        "name": "Mega Fart!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mega-fart.mp3"
    },
    {
        "name": "Cartoon bonk",
        "color": "rgb(82, 255, 110)",
        "mp3": "/media/sounds/cartoon-bonk.mp3"
    },
    {
        "name": "cry (roblox)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cry-roblox.mp3"
    },
    {
        "name": "Hockey goal celebration",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sidney-crosby-pittsburgh-penguins-goal-song-loudtronix-hq-mp3cut.mp3"
    },
    {
        "name": "oohh chinese man",
        "color": "rgb(31, 188, 255)",
        "mp3": "/media/sounds/oohh_chinese_man_sound_.mp3"
    },
    {
        "name": "Followersound123",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/best-friends-v1_3Coc8NL.mp3"
    },
    {
        "name": "bass boost drop!",
        "color": "rgb(255, 169, 234)",
        "mp3": "/media/sounds/bass-boost-drop.mp3"
    },
    {
        "name": "CHICKEN-JOCKEY",
        "color": "rgb(12, 235, 255)",
        "mp3": "/media/sounds/chicken-jockey_yOuMF2O.mp3"
    },
    {
        "name": "raaar",
        "color": "rgb(204, 225, 255)",
        "mp3": "/media/sounds/raaar_FerSY7o.mp3"
    },
    {
        "name": "peter griffin song",
        "color": "rgb(107, 255, 225)",
        "mp3": "/media/sounds/peter-griffin-song.mp3"
    },
    {
        "name": "Bratz Ew",
        "color": "rgb(230, 20, 255)",
        "mp3": "/media/sounds/bratz-ew.mp3"
    },
    {
        "name": "reality tv show violin screech",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/reality-tv-show-violin-screech.mp3"
    },
    {
        "name": "Victory!",
        "color": "rgb(102, 255, 204)",
        "mp3": "/media/sounds/victoryff.swf.mp3"
    },
    {
        "name": "oh yeah mr krabs",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mr-krabs.mp3"
    },
    {
        "name": "Screaming Sheep",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/01-the-screaming-sheep.mp3"
    },
    {
        "name": "I'm Batman",
        "color": "rgb(102, 102, 102)",
        "mp3": "/media/sounds/im-batman.mp3"
    },
    {
        "name": "Ric Flair Wooo",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/woo.mp3"
    },
    {
        "name": "Vibe check",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/klonk.mp3"
    },
    {
        "name": "Rap Air Horn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/air-horn_1.mp3"
    },
    {
        "name": "SPONGEBOB ONE HOUR LATER",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/one-hour-later-spongebob-time-card-96.mp3"
    },
    {
        "name": "pbbv 2",
        "color": "rgb(255, 151, 181)",
        "mp3": "/media/sounds/pbbv-2.mp3"
    },
    {
        "name": "Glass Breaking",
        "color": "rgb(0, 51, 153)",
        "mp3": "/media/sounds/broken-glass-sound-effect-high-quality.mp3"
    },
    {
        "name": "Undertale - Omega Flowey Laugh",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/00002a5b.mp3"
    },
    {
        "name": "can i pet that dog",
        "color": "rgb(73, 255, 79)",
        "mp3": "/media/sounds/can-i-pet-dat-dog-mp3.mp3"
    },
    {
        "name": "Fnaf Freddy’s laugh",
        "color": "rgb(105, 37, 37)",
        "mp3": "/media/sounds/fnaf-freddys-laugh.mp3"
    },
    {
        "name": "lego build",
        "color": "rgb(255, 116, 38)",
        "mp3": "/media/sounds/lego-build.mp3"
    },
    {
        "name": "DO IT Star Wars",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/do-it_pnCjXeb.mp3"
    },
    {
        "name": "Aye Yo WTF",
        "color": "rgb(4, 255, 96)",
        "mp3": "/media/sounds/aye-yo.mp3"
    },
    {
        "name": "Women haha",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/women-haha.mp3"
    },
    {
        "name": "HAPPY FEET. WOMBO COMBO.",
        "color": "rgb(255, 0, 102)",
        "mp3": "/media/sounds/fdfdf.mp3"
    },
    {
        "name": "Oui - Rizzler",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oui-rizzler.mp3"
    },
    {
        "name": "Coach Whistle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/whistle_BBvcaZ1.mp3"
    },
    {
        "name": "OHHHHHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rap.mp3"
    },
    {
        "name": "Doorbell",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/door-bell-sound-effect.mp3"
    },
    {
        "name": "Brick hitting metal",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/brick-on-metal-sound-effect12.mp3"
    },
    {
        "name": "Sonic - You're Too Slow",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/sonic-youre-too-slow.mp3"
    },
    {
        "name": "R6 Lion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/r6-lion-sound-effect.mp3"
    },
    {
        "name": "Pirates Of The Carribean!!!",
        "color": "rgb(220, 222, 0)",
        "mp3": "/media/sounds/pirates-mp3cut_xxOvJfH.mp3"
    },
    {
        "name": "SCARY INTENSE KNOCKING",
        "color": "rgb(175, 0, 0)",
        "mp3": "/media/sounds/konkonse.mp3"
    },
    {
        "name": "let's go meme",
        "color": "rgb(23, 187, 14)",
        "mp3": "/media/sounds/lets-go-meme.mp3"
    },
    {
        "name": "Throwing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/throwing-sound-effect-davemadson.mp3"
    },
    {
        "name": "Congratulations, you won!",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/congratulations-you-won.mp3"
    },
    {
        "name": "Wide Putin Walkin",
        "color": "rgb(49, 59, 67)",
        "mp3": "/media/sounds/wide-putin-walkin.mp3"
    },
    {
        "name": "helicopter meme",
        "color": "rgb(143, 143, 143)",
        "mp3": "/media/sounds/helicopter-meme.mp3"
    },
    {
        "name": "Green Giant",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ho-ho-ho-green-giant-audio-clip.mp3"
    },
    {
        "name": "Mega Fart!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mega-fart.mp3"
    },
    {
        "name": "Cartoon bonk",
        "color": "rgb(82, 255, 110)",
        "mp3": "/media/sounds/cartoon-bonk.mp3"
    },
    {
        "name": "cry (roblox)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cry-roblox.mp3"
    },
    {
        "name": "Family Feud incorrect buzzer",
        "color": "rgb(8, 255, 185)",
        "mp3": "/media/sounds/the-family-feud-buzzer-sound-effect.mp3"
    },
    {
        "name": "cry (roblox)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cry-roblox.mp3"
    },
    {
        "name": "Lion Roar",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lion-roar-sound-effect.mp3"
    },
    {
        "name": "vsauce",
        "color": "rgb(57, 255, 136)",
        "mp3": "/media/sounds/jake-chudnow-edited_y1t8j5q.mp3"
    },
    {
        "name": "CHICKEN-JOCKEY",
        "color": "rgb(12, 235, 255)",
        "mp3": "/media/sounds/chicken-jockey_yOuMF2O.mp3"
    },
    {
        "name": "raaar",
        "color": "rgb(204, 225, 255)",
        "mp3": "/media/sounds/raaar_FerSY7o.mp3"
    },
    {
        "name": "last rizzmas i gave u my gyatt",
        "color": "rgb(63, 82, 255)",
        "mp3": "/media/sounds/last-rizzmas-i-gave-u-my-gyatt.mp3"
    },
    {
        "name": "reality tv show violin screech",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/reality-tv-show-violin-screech.mp3"
    },
    {
        "name": "Caseoh your banned",
        "color": "rgb(0, 15, 255)",
        "mp3": "/media/sounds/caseoh-your-banned.mp3"
    },
    {
        "name": "Groan Tube 1",
        "color": "rgb(0, 102, 255)",
        "mp3": "/media/sounds/groan-tube-1_kdDdtlv.mp3"
    },
    {
        "name": "Doom Music",
        "color": "rgb(48, 89, 41)",
        "mp3": "/media/sounds/doom-music.mp3"
    },
    {
        "name": "WHAT WTFD",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jontron-what_mcudlbg-rojo.mp3"
    },
    {
        "name": "Undertaker Bell",
        "color": "rgb(255, 236, 0)",
        "mp3": "/media/sounds/undertaker.mp3"
    },
    {
        "name": "cry banana cat",
        "color": "rgb(255, 207, 76)",
        "mp3": "/media/sounds/cry-banana-cat.mp3"
    },
    {
        "name": "Blood Splatter 44101",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/blood-splatter-44101_jogObWJ.mp3"
    },
    {
        "name": "Come over here and Kiss me on my hot mouth",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/come-over-here-and-kiss-me-on-my-hot-mouth.mp3"
    },
    {
        "name": "seyuh carti",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/seyuh-carti.mp3"
    },
    {
        "name": "Everyday I'm Shuffling",
        "color": "rgb(207, 13, 255)",
        "mp3": "/media/sounds/lmfao-everyday-im-shuffling.mp3"
    },
    {
        "name": "Ouch!",
        "color": "rgb(255, 12, 12)",
        "mp3": "/media/sounds/ouch_AKigkiF.mp3"
    },
    {
        "name": "jet set radio spray full",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/jet-set-radio-spray-full_DP2X9GC.mp3"
    },
    {
        "name": "Rickroll, but short",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rickroll-but-short.mp3"
    },
    {
        "name": "oh hell naw man wtf man",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/oh-hell-naw-man-wtf-man.mp3"
    },
    {
        "name": "b*tch wtf",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/55463983741159354957959692288_35100067f45_YqFEpry.mp3"
    },
    {
        "name": "Fish meme sfx",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fish-meme-sfx.mp3"
    },
    {
        "name": "cat iphone ringtone",
        "color": "rgb(224, 252, 255)",
        "mp3": "/media/sounds/cat-iphone-ringtone.mp3"
    },
    {
        "name": "KSI Thick Of It Brainrot",
        "color": "rgb(254, 255, 212)",
        "mp3": "/media/sounds/ksi-thick-of-it-brainrot.mp3"
    },
    {
        "name": "I loveee - Repo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-loveee-repo.mp3"
    },
    {
        "name": "Bla Bla Ble Ble Blu Blu Blu Don pollo",
        "color": "rgb(255, 170, 0)",
        "mp3": "/media/sounds/bla-bla-ble-ble-blu-blu-blu-don-pollo.mp3"
    },
    {
        "name": "Gawk gawk",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gawk-gawk.mp3"
    },
    {
        "name": "Bomba en casa",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/bomba-en-casa.mp3"
    },
    {
        "name": "SÉLOCO NÃO COMPENSA",
        "color": "rgb(80, 45, 255)",
        "mp3": "/media/sounds/seloco-nao-compensa.mp3"
    },
    {
        "name": "YOU BITCH!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-bitch_s7TpHlz.mp3"
    },
    {
        "name": "Enrage",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/enrage.mp3"
    },
    {
        "name": "cooked dog meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cooked-dog-meme.mp3"
    },
    {
        "name": "HUAWEI Звонок",
        "color": "rgb(239, 239, 239)",
        "mp3": "/media/sounds/huawei-zvonok_ZNCkv1G.mp3"
    },
    {
        "name": "neck hurts",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/neck-hurts.mp3"
    },
    {
        "name": "Annihilation the alien",
        "color": "rgb(10, 27, 255)",
        "mp3": "/media/sounds/annihilation-the-alien.mp3"
    },
    {
        "name": "HE'S ON FIRE - NBA JAM",
        "color": "rgb(255, 154, 144)",
        "mp3": "/media/sounds/hes-on-fire_h9DW1bE.mp3"
    },
    {
        "name": "AOL Dial-Up",
        "color": "rgb(4, 0, 109)",
        "mp3": "/media/sounds/aoldialup1.mp3"
    },
    {
        "name": "roblox num num num",
        "color": "rgb(249, 255, 19)",
        "mp3": "/media/sounds/nomnomnom_rdOBNcn.mp3"
    },
    {
        "name": "emoji scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/emoji-scream.mp3"
    },
    {
        "name": "a thousand miles",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/a-thousand-miles-short.mp3"
    },
    {
        "name": "Sqeeling Pig",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sqeeling-pig.mp3"
    },
    {
        "name": "Kahoot Lobby Music",
        "color": "rgb(224, 206, 255)",
        "mp3": "/media/sounds/kahoot-lobby-music.mp3"
    },
    {
        "name": "Throw",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/throw_d4CPY0G.mp3"
    },
    {
        "name": "Eevee cry!!",
        "color": "rgb(116, 162, 255)",
        "mp3": "/media/sounds/eevee-starter.mp3"
    },
    {
        "name": "Morning Music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/morning.mp3"
    },
    {
        "name": "idea (ding sound effect)",
        "color": "rgb(157, 0, 0)",
        "mp3": "/media/sounds/ding-sound-effect_2_bICB0mr.mp3"
    },
    {
        "name": "jet set radio spray full",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/jet-set-radio-spray-full_DP2X9GC.mp3"
    },
    {
        "name": "Flint and Steel!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/flint-and-steel_WKFcxQZ.mp3"
    },
    {
        "name": "Пердуляция",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/perduliatsiia.mp3"
    },
    {
        "name": "Ruby Chan \"HAI\" Nani Ga Suki?",
        "color": "rgb(227, 170, 255)",
        "mp3": "/media/sounds/ruby-chan-hai-nani-ga-suki.mp3"
    },
    {
        "name": "Crowd Laughing - Sound Effect [HD]",
        "color": "rgb(19, 4, 255)",
        "mp3": "/media/sounds/crowd-laughing-sound-effect-hd.mp3"
    },
    {
        "name": "Jennifers body ringtone",
        "color": "rgb(114, 65, 87)",
        "mp3": "/media/sounds/jennifers-body-ringtone.mp3"
    },
    {
        "name": "eu finjo que não percebo mas tudo esta sendo obs",
        "color": "rgb(255, 0, 76)",
        "mp3": "/media/sounds/eu-finjo-que-nao-percebo-mas-tudo-esta-sendo-obs.mp3"
    },
    {
        "name": "Мама, Я покакал",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mama-ia-pokakal.mp3"
    },
    {
        "name": "twitch follower alert sound",
        "color": "rgb(141, 10, 255)",
        "mp3": "/media/sounds/twitch-follower-alert-sound.mp3"
    },
    {
        "name": "holy f im coming",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/holy-f-im-coming.mp3"
    },
    {
        "name": "Brainrot Phonk",
        "color": "rgb(25, 171, 38)",
        "mp3": "/media/sounds/brainrot-phonk.mp3"
    },
    {
        "name": "Chimpanzini bananini",
        "color": "rgb(131, 36, 255)",
        "mp3": "/media/sounds/chimpanzini-bananini_UIisnEp.mp3"
    },
    {
        "name": "Crazy Wenda Sprunki - Raw Audio (unedited)",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/crazy-wenda-sprunki-raw-audio-unedited.mp3"
    },
    {
        "name": "тыщ тыгыдыгыдыщ тыщ",
        "color": "rgb(34, 255, 74)",
        "mp3": "/media/sounds/tyshch-tygydygydyshch-tyshch.mp3"
    },
    {
        "name": "(mafoiso) i see one of them",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafoiso-i-see-one-of-them.mp3"
    },
    {
        "name": "German cat meme",
        "color": "rgb(255, 101, 101)",
        "mp3": "/media/sounds/german-cat-meme.mp3"
    },
    {
        "name": "blue shirt guy",
        "color": "rgb(45, 96, 255)",
        "mp3": "/media/sounds/blue-shirt-guy.mp3"
    },
    {
        "name": "Coolkid laugh",
        "color": "rgb(171, 0, 0)",
        "mp3": "/media/sounds/coolkid-laugh.mp3"
    },
    {
        "name": "Tu pene no pierde sabor a caramelo",
        "color": "rgb(255, 214, 192)",
        "mp3": "/media/sounds/tu-pene-no-pierde-sabor-a-caramelo.mp3"
    },
    {
        "name": "boi aint no way",
        "color": "rgb(98, 230, 255)",
        "mp3": "/media/sounds/boy-aint-no-way-boy.mp3"
    },
    {
        "name": "gemidos remix bad bunny",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gemidos-remix-bad-bunny.mp3"
    },
    {
        "name": "Ki Ki Ki Ma Ma Ma",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/f13_ki_ki_ki_ma_ma_ma.mp3"
    },
    {
        "name": "Discord Call Remix",
        "color": "rgb(93, 68, 255)",
        "mp3": "/media/sounds/discord-call-remix-extended_qisxy7ss.mp3"
    },
    {
        "name": "Power over spice is power over all",
        "color": "rgb(161, 82, 82)",
        "mp3": "/media/sounds/power-over-spice-is-power-over-all.mp3"
    },
    {
        "name": "i don't even know (Jeffy)",
        "color": "rgb(255, 255, 68)",
        "mp3": "/media/sounds/jeffy-i-dont-even-know_trim.mp3"
    },
    {
        "name": "Godzilla 2021 roar",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/godzilla-2021-roar.mp3"
    },
    {
        "name": "It's Raining Men!",
        "color": "rgb(51, 153, 102)",
        "mp3": "/media/sounds/the-weather-girls-its-raining-men-1-cut-mp3.mp3"
    },
    {
        "name": "1 EGGS 1 EGGS 1 EGGS 1 EGGS",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/1-eggs-1-eggs-1-eggs-1-eggs_USqQKWD.mp3"
    },
    {
        "name": "PAIN.",
        "color": "rgb(255, 191, 21)",
        "mp3": "/media/sounds/pain_dP4rTQA.mp3"
    },
    {
        "name": "disney live audience ooo",
        "color": "rgb(105, 165, 255)",
        "mp3": "/media/sounds/disney-live-audience-ooo.mp3"
    },
    {
        "name": "undertale dog bark but little bit louder",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/undertale-dog-bark-but-little-bit-louder.mp3"
    },
    {
        "name": "And his name is John Cena",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/and-his-name-is-john-cena.mp3"
    },
    {
        "name": "Jevil chãos chaos",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jevil-chaos-chaos_l0bczJN.mp3"
    },
    {
        "name": "Quagsire Victory Scream",
        "color": "rgb(4, 55, 255)",
        "mp3": "/media/sounds/quagsire-victory-scream.mp3"
    },
    {
        "name": "michael jackson auw",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/michael-jackson-auw.mp3"
    },
    {
        "name": "sephiroth -/v/an sound effects",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sephiroth-v-an-sound-effects.mp3"
    },
    {
        "name": "Baymax \"BaLaLaLa La La\"",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/balalala.mp3"
    },
    {
        "name": "I SMELL MARIJUANA",
        "color": "rgb(15, 255, 39)",
        "mp3": "/media/sounds/i-smell-marijuana.mp3"
    },
    {
        "name": "A Great Slam And Then Some!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cuphead-narrator-a-great-slam-and-then-some.mp3"
    },
    {
        "name": "Yunque Minecraft",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yunque-minecraft.mp3"
    },
    {
        "name": "GAY FROGS!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gay-frogs_iDrdsTH.mp3"
    },
    {
        "name": "KIll Bill O-Ren Ishii and Tanaka",
        "color": "rgb(0, 255, 51)",
        "mp3": "/media/sounds/kill-bill-o-ren-ishii-and-tanaka.mp3"
    },
    {
        "name": "reaverkill5",
        "color": "rgb(32, 0, 92)",
        "mp3": "/media/sounds/reaverkill5.mp3"
    },
    {
        "name": "talking bennnn noo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/talking-bennnn-noo.mp3"
    },
    {
        "name": "musica triste meme",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpq7mpzzl9.mp3"
    },
    {
        "name": "nick eh 30 intro",
        "color": "rgb(37, 52, 255)",
        "mp3": "/media/sounds/nick-eh-30-intro.mp3"
    },
    {
        "name": "Saul Goodman Better Call Saul",
        "color": "rgb(27, 118, 0)",
        "mp3": "/media/sounds/saul-goodman-better-call-saul.mp3"
    },
    {
        "name": "Metal Gear Solid - Codec",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/codec.mp3"
    },
    {
        "name": "EAS Alarm (Weather Alert)-",
        "color": "rgb(194, 0, 0)",
        "mp3": "/media/sounds/easalert1_audacityoutput.mp3"
    },
    {
        "name": "I'm Gay IDubbbz",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/idubbbz-im-gay-free-download.mp3"
    },
    {
        "name": "HOLD UP WAIT A MINUTE SOMETHIN",
        "color": "rgb(37, 255, 30)",
        "mp3": "/media/sounds/untitled_OTuNHvt.mp3"
    },
    {
        "name": "Among Us Drip Theme Song",
        "color": "rgb(178, 255, 44)",
        "mp3": "/media/sounds/record-online-voice-recorder_kIwejRI.mp3"
    },
    {
        "name": "Sad violin (14sec)",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/export_4.mp3"
    },
    {
        "name": "Mario - Power Up",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/01-power-up-mario.mp3"
    },
    {
        "name": "Gegagedigedagedago (Full)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gegagedigedagedago-full.mp3"
    },
    {
        "name": "sonic spring",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/sonic-spring.mp3"
    },
    {
        "name": "THX",
        "color": "rgb(0, 102, 255)",
        "mp3": "/media/sounds/thx.mp3"
    },
    {
        "name": "ayo wtf",
        "color": "rgb(138, 171, 255)",
        "mp3": "/media/sounds/ayo-wtf-meme.mp3"
    },
    {
        "name": "what the hell is even that",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/whatthehell_qrePvEr.mp3"
    },
    {
        "name": "Cannon explosion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cannon.mp3"
    },
    {
        "name": "Baldi Ruler Slap",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ruler-slap.mp3"
    },
    {
        "name": "goofy ass sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/goofy-ass-sound.mp3"
    },
    {
        "name": "moai",
        "color": "rgb(145, 145, 145)",
        "mp3": "/media/sounds/moai.mp3"
    },
    {
        "name": "Half-Life GMod Death Sound High Quality",
        "color": "rgb(255, 152, 0)",
        "mp3": "/media/sounds/half-life-gmod-death-sound-high-quality.mp3"
    },
    {
        "name": "FNAF 3 Night start",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fnaf-3-start-sound.mp3"
    },
    {
        "name": "Godzilla 2014 Roar",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/godzilla-2014-roar.mp3"
    },
    {
        "name": "I like your cut, \"G\"! (revisited)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-like-your-cut-g-revisited.mp3"
    },
    {
        "name": "Summertime Nyan",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/summer-time-anime-love_q5du5Qo.mp3"
    },
    {
        "name": "Minecraft Explosions",
        "color": "rgb(162, 92, 0)",
        "mp3": "/media/sounds/minecraft-explosion-green-screen.mp3"
    },
    {
        "name": "Wiiiiiiiiiiiiii sport",
        "color": "rgb(0, 212, 255)",
        "mp3": "/media/sounds/wii-sports-wii-sports-theme-y.mp3"
    },
    {
        "name": "Undertale - Soul Shatter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/undertale-soul-shatter.mp3"
    },
    {
        "name": "goofy run sound",
        "color": "rgb(32, 255, 7)",
        "mp3": "/media/sounds/goofy-run-sound.mp3"
    },
    {
        "name": "WOW (MLG)",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/wow-mlg-sound-effect.mp3"
    },
    {
        "name": "family feud buzzer",
        "color": "rgb(193, 255, 0)",
        "mp3": "/media/sounds/family-feud-strike-sfx_kN6Z99k.mp3"
    },
    {
        "name": "Cartoon Tiptoe",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoon-tiptoe.mp3"
    },
    {
        "name": "Home Improvement Huh",
        "color": "rgb(67, 112, 255)",
        "mp3": "/media/sounds/home-improvement-huh.mp3"
    },
    {
        "name": "Ender teleport",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vwoop.mp3"
    },
    {
        "name": "Doh I missed (Wario)",
        "color": "rgb(204, 0, 255)",
        "mp3": "/media/sounds/doh-i-missed.mp3"
    },
    {
        "name": "ruh roh raggy",
        "color": "rgb(2, 255, 220)",
        "mp3": "/media/sounds/raggy.mp3"
    },
    {
        "name": "Hell Yeah Stone Cold",
        "color": "rgb(139, 255, 45)",
        "mp3": "/media/sounds/y2mate-mp3cut_KFr5Pf9.mp3"
    },
    {
        "name": "Skyrim Quest Update",
        "color": "rgb(51, 51, 51)",
        "mp3": "/media/sounds/ui_quest_update.mp3"
    },
    {
        "name": "yippie",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yippie_Kq73X8D.mp3"
    },
    {
        "name": "man shut yo gah damn meme",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/man-shut-yo-gah-damn-meme.mp3"
    },
    {
        "name": "pokemon battle win",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pokemon-red-blue-music-wild-pokemon-victory-theme-1.mp3"
    },
    {
        "name": "transponder snail",
        "color": "rgb(42, 84, 255)",
        "mp3": "/media/sounds/transponder_snail.mp3"
    },
    {
        "name": "goofy ahh android low quality",
        "color": "rgb(64, 25, 105)",
        "mp3": "/media/sounds/goofy-ahh-android-low-quality.mp3"
    },
    {
        "name": "BELLIGOL, BELLIGOL, BELLIGHAM, É ELE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/belligol-belligol-belligham-e-ele.mp3"
    },
    {
        "name": "omg wow!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/omg-wow.mp3"
    },
    {
        "name": "roblox footsteps",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/action_footsteps_plastic.mp3"
    },
    {
        "name": "Baby Crying Tears",
        "color": "rgb(255, 178, 252)",
        "mp3": "/media/sounds/baby-crying-tears.mp3"
    },
    {
        "name": "Family Feud theme - After 1st  Fast Money",
        "color": "rgb(66, 255, 200)",
        "mp3": "/media/sounds/family-feud-theme-after-1st-fast-money.mp3"
    },
    {
        "name": "Random fart button",
        "color": "rgb(221, 255, 232)",
        "mp3": "/media/sounds/fart9.mp3"
    },
    {
        "name": "The ONE PIECE is real (can we get much higher?)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-one-piece-is-real-can-we-get-much-higher.mp3"
    },
    {
        "name": "Gun shots",
        "color": "rgb(149, 204, 220)",
        "mp3": "/media/sounds/gun-shots.mp3"
    },
    {
        "name": "ROJÃO SUPER ESTOURADO!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rojao-super-estourado.mp3"
    },
    {
        "name": "I got this! Ryuko",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ryuko-i-got-this_udCWCLO.mp3"
    },
    {
        "name": "dk okay",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/okay_2FZURrU.mp3"
    },
    {
        "name": "Grogu Yes button",
        "color": "rgb(47, 255, 10)",
        "mp3": "/media/sounds/grogu-yes-button.mp3"
    },
    {
        "name": "Po Pi Po",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/po-pi-po-2.mp3"
    },
    {
        "name": "UGH EWW",
        "color": "rgb(151, 82, 255)",
        "mp3": "/media/sounds/ew-dude-wtf.mp3"
    },
    {
        "name": "Death Splat",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/death-splat.mp3"
    },
    {
        "name": "Family Feud incorrect buzzer",
        "color": "rgb(8, 255, 185)",
        "mp3": "/media/sounds/the-family-feud-buzzer-sound-effect.mp3"
    },
    {
        "name": "omg wow!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/omg-wow.mp3"
    },
    {
        "name": "vsauce",
        "color": "rgb(57, 255, 136)",
        "mp3": "/media/sounds/jake-chudnow-edited_y1t8j5q.mp3"
    },
    {
        "name": "Gun shots",
        "color": "rgb(149, 204, 220)",
        "mp3": "/media/sounds/gun-shots.mp3"
    },
    {
        "name": "CHICKEN-JOCKEY",
        "color": "rgb(12, 235, 255)",
        "mp3": "/media/sounds/chicken-jockey_yOuMF2O.mp3"
    },
    {
        "name": "last rizzmas i gave u my gyatt",
        "color": "rgb(63, 82, 255)",
        "mp3": "/media/sounds/last-rizzmas-i-gave-u-my-gyatt.mp3"
    },
    {
        "name": "Bratz Ew",
        "color": "rgb(230, 20, 255)",
        "mp3": "/media/sounds/bratz-ew.mp3"
    },
    {
        "name": "reality tv show violin screech",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/reality-tv-show-violin-screech.mp3"
    },
    {
        "name": "Caseoh your banned",
        "color": "rgb(0, 15, 255)",
        "mp3": "/media/sounds/caseoh-your-banned.mp3"
    },
    {
        "name": "DBZ Powerup",
        "color": "rgb(235, 255, 59)",
        "mp3": "/media/sounds/dbz-powerup.mp3"
    },
    {
        "name": "Groan Tube 1",
        "color": "rgb(0, 102, 255)",
        "mp3": "/media/sounds/groan-tube-1_kdDdtlv.mp3"
    },
    {
        "name": "Undertaker Bell",
        "color": "rgb(255, 236, 0)",
        "mp3": "/media/sounds/undertaker.mp3"
    },
    {
        "name": "bongo hit",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bongo-hit.mp3"
    },
    {
        "name": "woah (roblox)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/woah-roblox.mp3"
    },
    {
        "name": "Blood Splatter 44101",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/blood-splatter-44101_jogObWJ.mp3"
    },
    {
        "name": "brazil alarm",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/brazil-alarm.mp3"
    },
    {
        "name": "Come over here and Kiss me on my hot mouth",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/come-over-here-and-kiss-me-on-my-hot-mouth.mp3"
    },
    {
        "name": "seyuh carti",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/seyuh-carti.mp3"
    },
    {
        "name": "Everyday I'm Shuffling",
        "color": "rgb(207, 13, 255)",
        "mp3": "/media/sounds/lmfao-everyday-im-shuffling.mp3"
    },
    {
        "name": "Bed Squeak",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bed-squeak.mp3"
    },
    {
        "name": "Law & Order Theme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/law-order-theme.mp3"
    },
    {
        "name": "oh hell naw man wtf man",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/oh-hell-naw-man-wtf-man.mp3"
    },
    {
        "name": "b*tch wtf",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/55463983741159354957959692288_35100067f45_YqFEpry.mp3"
    },
    {
        "name": "Finishing Hit - Super Smash Bros Ultimate",
        "color": "rgb(87, 87, 87)",
        "mp3": "/media/sounds/finishing-hit-super-smash-bros-ultimate.mp3"
    },
    {
        "name": "Fighting",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fighting.mp3"
    },
    {
        "name": "I loveee - Repo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-loveee-repo.mp3"
    },
    {
        "name": "Bla Bla Ble Ble Blu Blu Blu Don pollo",
        "color": "rgb(255, 170, 0)",
        "mp3": "/media/sounds/bla-bla-ble-ble-blu-blu-blu-don-pollo.mp3"
    },
    {
        "name": "Laugh remix",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/laugh-remix.mp3"
    },
    {
        "name": "Tun Tun Tuuun",
        "color": "rgb(0, 255, 153)",
        "mp3": "/media/sounds/dun-dun-duuuun-dramatic-sound-effect_A6Yo9Bi.mp3"
    },
    {
        "name": "Gawk gawk",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gawk-gawk.mp3"
    },
    {
        "name": "YOWAI MO!!!",
        "color": "rgb(17, 243, 255)",
        "mp3": "/media/sounds/yowai-mo.mp3"
    },
    {
        "name": "My name is david",
        "color": "rgb(255, 108, 22)",
        "mp3": "/media/sounds/my-name-is-david.mp3"
    },
    {
        "name": "Red Sun In The Sky 6 Second Loop",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/red-sun-in-the-sky-6-second-loop.mp3"
    },
    {
        "name": "Ain't Nobody Got Time",
        "color": "rgb(51, 0, 255)",
        "mp3": "/media/sounds/aint-nobody-got-time-for-that_1.mp3"
    },
    {
        "name": "And his name is John Cena",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/and-his-name-is-john-cena.mp3"
    },
    {
        "name": "Door Creaking",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/door-creaking-sound.mp3"
    },
    {
        "name": "niggeralex",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/niggeralex_ZlC3g7T.mp3"
    },
    {
        "name": "Jevil chãos chaos",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jevil-chaos-chaos_l0bczJN.mp3"
    },
    {
        "name": "who let the dogs out",
        "color": "rgb(0, 0, 255)",
        "mp3": "/media/sounds/dogs_1.mp3"
    },
    {
        "name": "Audience AWW",
        "color": "rgb(254, 226, 255)",
        "mp3": "/media/sounds/aww-sound-effect_4Uc45cl.mp3"
    },
    {
        "name": "Breaking Newss",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/intro-breaking-news.mp3"
    },
    {
        "name": "Jontron - Holy Shit",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/holy-shit_3.mp3"
    },
    {
        "name": "ford warning door chime",
        "color": "rgb(33, 99, 255)",
        "mp3": "/media/sounds/ford-warning-door-chime.mp3"
    },
    {
        "name": "c00lkid (Your Not Fun!)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/c00lkid-your-not-fun.mp3"
    },
    {
        "name": "tardis materialization sound",
        "color": "rgb(0, 76, 255)",
        "mp3": "/media/sounds/tardis_MfjwcSn.mp3"
    },
    {
        "name": "Eminem Spongebob",
        "color": "rgb(249, 255, 11)",
        "mp3": "/media/sounds/eminem-spongebob.mp3"
    },
    {
        "name": "Korok Yahaha",
        "color": "rgb(75, 188, 110)",
        "mp3": "/media/sounds/korok-yahaha.mp3"
    },
    {
        "name": "Frog Follow",
        "color": "rgb(10, 255, 8)",
        "mp3": "/media/sounds/frog-follow.mp3"
    },
    {
        "name": "Coffee Time",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/coffee-time-gordon-cole-tp-3.mp3"
    },
    {
        "name": "pitbull fireball~",
        "color": "rgb(255, 5, 216)",
        "mp3": "/media/sounds/pitbull-fireball.mp3"
    },
    {
        "name": "KOOL AID MAN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/koolaid-man.mp3"
    },
    {
        "name": "Exo Wolf",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/exo-wolf.mp3"
    },
    {
        "name": "7 page Muda (Giorno)",
        "color": "rgb(238, 255, 6)",
        "mp3": "/media/sounds/7-page-muda-giorno.mp3"
    },
    {
        "name": "Cyael Fornite Dance.",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/asssssss.mp3"
    },
    {
        "name": "Keep Your D Up",
        "color": "rgb(211, 66, 66)",
        "mp3": "/media/sounds/keep-your-d-up.mp3"
    },
    {
        "name": "Te tengo pura mala",
        "color": "rgb(136, 255, 173)",
        "mp3": "/media/sounds/te-tengo-pura-mala.mp3"
    },
    {
        "name": "miss circle",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/miss-circle.mp3"
    },
    {
        "name": "Holy Shit (TFS)",
        "color": "rgb(0, 204, 0)",
        "mp3": "/media/sounds/holy-shit_LNuUxVq.mp3"
    },
    {
        "name": "Game!(super smash bros)",
        "color": "rgb(255, 47, 241)",
        "mp3": "/media/sounds/gameset-online-audio-converter.mp3"
    },
    {
        "name": "Roblox Death",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-death-sound_ytkBL7X.mp3"
    },
    {
        "name": "running in the 90s",
        "color": "rgb(102, 255, 204)",
        "mp3": "/media/sounds/running.mp3"
    },
    {
        "name": "Gas Gas Gas - Manuel (Short)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gas-gas-gaslqshort.mp3"
    },
    {
        "name": "miguel o'harris (spider-man 2099)",
        "color": "rgb(21, 32, 157)",
        "mp3": "/media/sounds/miguel-oharris-spider-man-2099.mp3"
    },
    {
        "name": "AMONGUS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/among_us_trap_remix_bass_boosted_leonz_8455886905626474145-mp3cut.mp3"
    },
    {
        "name": "Huh5544",
        "color": "rgb(230, 0, 255)",
        "mp3": "/media/sounds/videoplayback_y6EZG5Z.mp3"
    },
    {
        "name": "M1 Garand Ping",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ping_4TjeI1U.mp3"
    },
    {
        "name": "Round One Fight",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mortal-kombat-9-sound-drop-round-1-fight.mp3"
    }
]