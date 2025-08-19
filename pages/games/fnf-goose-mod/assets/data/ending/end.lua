function onUpdatePost()
    if getProperty('cutscene.animation.curAnim.finished') then
        makeLuaSprite('blackscreen', 'UI/menuBG', 0, 0)
        setProperty('blackscreen.color', '000000')
        setObjectCamera('blackscreen', 'other')
        addLuaSprite('blackscreen', true)
        endSong()
    end
end