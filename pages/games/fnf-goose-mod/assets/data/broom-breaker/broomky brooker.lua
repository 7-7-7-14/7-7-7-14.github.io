local a = 0
function onCreate()
	addCharacterToList('shopkeeper broomless', 'Dad');
end
function onCreatePost()
	setProperty('camGame.zoom', 2.9)
	setProperty('dadGroup.scale.x', -1)
	makeLuaSprite('BLACK', 'UI/menuBG', 0, 0)
	setObjectCamera('BLACK', 'other')
	addLuaSprite('BLACK', true)
	setProperty('BLACK.color', '000000')
	setProperty('BLACK.alpha', 1)
	
end
function onSongStart()
	doTweenAlpha('FADEOUTT', 'BLACK', 0, 0.5, 'linear')
end
function onStepHit()
	if curStep >= 127 and a == 0 then --goose first verse
		characterPlayAnim('Dad', 'singUP', true)
		doTweenX('scaletween23', 'dadGroup.scale', 1, 2, 'sineInOut')
		doTweenZoom('camzoomtween1', 'camGame', 0.7, 5, 'cubeinout')
		removeLuaSprite('BLACK')
		a = 1
	elseif curStep >= 384 and a == 1 then --first "drop"
		triggerEvent('Add Camera Zoom', 0.1, nil)
		a = 2
	elseif curStep >= 640 and a == 2 then --end of first "drop"
		triggerEvent('Add Camera Zoom', nil, nil)
		a = 3
	elseif curStep >= 960 and a == 3 then --broom break begin
		doTweenZoom('camzoomtween2', 'camGame', 1.65, 5, 'linear')
		a = 4

	elseif curStep >= 1020 and a == 4 then --broom break end --1024 end of a bar
		setProperty('camGame.zoom', 1.65)
		--cameraSetTarget('boyfriendGroup')
		a = 5

	elseif curStep >= 1024 and a == 5 then --second "drop"
		doTweenZoom('camzoomtween3', 'camGame', 0.7, 0.5, 'backout')
		--triggerEvent('Add Camera Zoom', 0.1, nil)
		a = 6
	elseif curStep >= 1024 and a == 5 then --second "drop"
		triggerEvent('Add Camera Zoom', 0.1, nil)
		a = 6
	elseif curStep >= 1280 and a == 6 then --intence part begin
		triggerEvent('Add Camera Zoom', 0.1, nil)
		a = 11
	elseif curStep >= 1552 and a == 11 then --darkne screen
		makeLuaSprite('BLACK', 'UI/menuBG', 0, 0)
		setObjectCamera('BLACK', 'other')
		addLuaSprite('BLACK', true)
		setProperty('BLACK.color', '000000')
		setProperty('BLACK.alpha', 0)
		doTweenAlpha('FADEOUTT', 'BLACK', 1, 1, 'linear')
		a = 12
	elseif curStep >= 1695 and a == 12 and isStoryMode then --the end screens
		makeLuaSprite('promo', 'UI/Promo_minimal', 0, 0)
		setObjectCamera('promo', 'other')
		addLuaSprite('promo', true)

		--makeLuaSprite('blue', 'UI/menuBG', 0, 0)
		--setObjectCamera('blue', 'other')
		--addLuaSprite('blue', true)
		--setProperty('blue.alpha', 0.5)

		local function makeGooseText(tag, txt, y, size)
			makeLuaText(tag, txt, 1280, 0, y);
			setTextSize(tag, size);
			setTextFont(tag, 'Transport New Medium.otf');
			setTextColor(tag, 'ffffff')
			setTextBorder(tag, 1, '3b6cd5');
			setObjectCamera(tag, 'other')
			addLuaText(tag);
		end
		makeGooseText('end card title', 'Thanks for playing!', 50, 100)
		makeGooseText('end card titles', 'Theres more content waiting for you in the freeplay menu!', 50+100+30, 30)

		a = 13
	end

end