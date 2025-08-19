function onCreate()
	setPropertyFromClass('ClientPrefs', 'middleScroll', true);
	triggerEvent('Camera Follow Pos', '1165', '400')
end
function onDestroy()
	setPropertyFromClass('ClientPrefs', 'middleScroll', false);
end