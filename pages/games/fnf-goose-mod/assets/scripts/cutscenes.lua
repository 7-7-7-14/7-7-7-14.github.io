--local songs = {'Causing Trouble'}
local allowCountdown = false
local allowCutscene = false
local cutsceneExists = false
function onCreate()
    --Check if cutscene file exists
    makeLuaSprite('test', 'cutscene/'..songName..'/spritemap', 0, 0)
    if getProperty('test.width') ~= 0 then cutsceneExists = true end
    removeLuaSprite('test', true)
    if cutsceneExists and not allowCountdown and isStoryMode and not seenCutscene then --
        allowCutscene = true
    else
        close(true);
    end
end
local cutscene_a = true
function onStartCountdown()
    if allowCutscene and cutscene_a then -- 
        if cutscene_a then
            makeLuaSprite('blackscreen', 'UI/menuBG', 0, 0)
            setProperty('blackscreen.color', '000000')
            setObjectCamera('blackscreen', 'other')
            addLuaSprite('blackscreen', true)

            makeAnimatedLuaSprite('cutscene', 'cutscene/'..songName, 0, 0, 'texture')
            addAnimationByPrefix('cutscene', 'cutscene', 'cutscene', 24, false)
            setObjectCamera('cutscene', 'other');

            makeLuaSprite('button', 'cutscene/pressESC', 20, screenHeight-60)
            setObjectCamera('button', 'other')

            runTimer('cutscene timer', 1, 1)
            cutscene_a = false
        end
        allowCountdown = true;
        return Function_Stop;
    end
    return Function_Continue;
end

function onTimerCompleted(tag)
    if tag == 'cutscene timer' then
        addLuaSprite('cutscene', true)
        addLuaSprite('button', true)
        removeLuaSprite('blackscreen', true)
        objectPlayAnimation('cutscene', 'cutscene', true)
        playMusic('cutscenes/'..songName, 1, false)
    end
end
local cutscene_a = true
function onUpdatePost()
    if allowCutscene then
        if keyboardJustPressed('ESCAPE') then
            if cutscene_a then
                doTweenAlpha('button alpha tween', 'button', 0, 0.25, 'linear')
                doTweenAlpha('cutscene alpha tween', 'cutscene', 0, 0.25, 'linear')
                startCountdown()
                cutscene_a = false
            end
        end
        if getProperty('cutscene.animation.curAnim.finished') then
            if cutscene_a then
                doTweenAlpha('button alpha tween', 'button', 0, 0.25, 'linear')
                doTweenAlpha('cutscene alpha tween', 'cutscene', 0, 0.25, 'linear')
                startCountdown()
                cutscene_a = false
            end
        end
    end
end

function onTweenCompleted(tag)
    if tag == 'cutscene alpha tween' then
        removeLuaSprite('cutscene', true)
        removeLuaSprite('button', true) 
    end
end