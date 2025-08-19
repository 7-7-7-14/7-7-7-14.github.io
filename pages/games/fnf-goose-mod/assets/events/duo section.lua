function onEvent(name, value1, value2) 
	if name == 'duo section' then
		if value1 == 'bf' then
			setProperty('defaultCamZoom', 1.1)
			triggerEvent('Camera Follow Pos', '1160', '400')
		end

		if value1 == 'bf zoom' then
			setProperty('defaultCamZoom', 1.3)
			triggerEvent('Camera Follow Pos', '1160', '400')
		end

		if value1 == 'gooseb' then
			setProperty('defaultCamZoom', 0.8)
			setProperty('boyfriendGroup.flipX', false) 
			triggerEvent('Change Character', 'boyfriendGroup', 'bf')
			triggerEvent('Camera Follow Pos', '970', '500')
		end

		if value1 == 'goose' then
			setProperty('defaultCamZoom', 0.8)
			setProperty('boyfriendGroup.flipX', true)
			triggerEvent('Change Character', 'boyfriendGroup', 'bf-opponent')
			triggerEvent('Camera Follow Pos', '1370', '500')
		end

		if value1 == 'goose zoom' then
			setProperty('defaultCamZoom', 1.0)
			setProperty('boyfriendGroup.flipX', true)
			triggerEvent('Change Character', 'boyfriendGroup', 'bf-opponent')
			triggerEvent('Camera Follow Pos', '1300', '500')
		end

		if value1 == 'gooseb zoom' then
			setProperty('defaultCamZoom', 1.0)
			setProperty('boyfriendGroup.flipX', false) 
			triggerEvent('Change Character', 'boyfriendGroup', 'bf')
			triggerEvent('Camera Follow Pos', '1040', '500')
		end

		if value1 == 'together' then
			setProperty('defaultCamZoom', 0.8)
			triggerEvent('Camera Follow Pos', '1160', '400')
		end

		if value1 == 'start' then
			setProperty('defaultCamZoom', 0.5)
			triggerEvent('Camera Follow Pos', '1160', '400')
		end
		

		if value2 == '' then
		-- do nothing lol
		else
		-- do nothing lol
		end

	end
end