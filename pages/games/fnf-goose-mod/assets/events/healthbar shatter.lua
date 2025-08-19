local shatter_a = 0
local shatter_y = 0
local shatter_y1 = 0
local shatter_y2 = 0
local shatter_angle = 0
local shatter_angle1 = 0
local shatter_angle2 = 0

--Stuff i couldnt put in Create :(
function onCreatePost()	
shatter_y = getProperty('healthBar.y')
shatter_y1 = getProperty('iconP1.y')
shatter_y2 = getProperty('iconP2.y')
angle = getProperty('healthBar.angle')
angle1 = getProperty('iconP1.angle')
angle2 = getProperty('iconP2.angle')
end

--Goose takes your mic
function onEvent(name, value1, value2)
	if name == 'healthbar shatter' then
		if shatter_a == 0 then
			doTweenY('1', 'healthBar', 1250, 0.8, 'circin')
			doTweenY('2', 'iconP1', 1300, 0.8, 'circin')
			doTweenY('3', 'iconP2', 1500, 0.8, 'circin')
			doTweenAngle('11', 'healthBar', getRandomInt(-90,90), 1, 'circin')
			doTweenAngle('21', 'iconP1', 	getRandomInt(-90,90), 1, 'circin')
			doTweenAngle('31', 'iconP2', 	getRandomInt(-90,90), 1, 'circin')
			shatter_a = shatter_a+1
			runTimer('t1', 1, 0)
		else
			setProperty('healthBar.angle', shatter_angle)
			setProperty('iconP1.angle', shatter_angle1)
			setProperty('iconP2.angle', shatter_angle2)

			setProperty('healthBar.y', 800)
			setProperty('iconP1.y', 800)
			setProperty('iconP2.y', 800)

			doTweenY('555', 'healthBar', shatter_y, 1, 'circout')
			doTweenY('656', 'iconP1', shatter_y1, 1, 'circout')
			doTweenY('777', 'iconP2', shatter_y2, 1, 'circout')

			shatter_a = 0
		end
	end
end
