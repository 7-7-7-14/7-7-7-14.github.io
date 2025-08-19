local a = 0
function onCreate()
	addCharacterToList('bf hatless', 'boyfriend');
end
function onStepHit()
	if curStep >= 908 and a == 0 and isStoryMode then --
		triggerEvent('Change Character', 0, 'bf hatless');
		characterPlayAnim('boyfriend', 'stolen')
		setProperty('dadGroup.scale.x', -1)
		doTweenX('dadGroup tween', 'dadGroup', -700, 0.5, 'backin')
		playSound('BITE', 0.5)
		--doTweenX('dadGroup twee xn', 'dadGroup.scale', -1, 0.25, 'backin')
		a = 1
	end
end