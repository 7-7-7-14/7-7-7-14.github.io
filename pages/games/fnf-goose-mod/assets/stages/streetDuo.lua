dfltDir = 'backgrounds/street1/'
obj = {
	{tag= 'sky',
		fn= 'sky2',
		x= 0,y= 0,
		sfx= 0, sfy= 0,
		frnt= false
		},
	{tag= 'ground',
		fn= 'ground',
		x= -720,y= 146,
		sfx= 1, sfy= 1,
		frnt= false
		},
	{tag= 'buildings',
		fn= 'buildings',
		x= -1050,y= -800,
		sfx= 0.8, sfy= 0.8,
		frnt= false
		},
	{tag= 'grass',
		fn= 'grass',
		x= 100,y= 850,
		sfx= 1, sfy= 1,
		frnt= true
		}
}

function onCreate()
	setProperty('sky.color', getColorFromHex('797d84'))
	for i = 1, #(obj) do
		makeLuaSprite(obj[i].tag, dfltDir..obj[i].fn, obj[i].x, obj[i].y);
		setScrollFactor(obj[i].tag, obj[i].sfx, obj[i].sfy);
		addLuaSprite(obj[i].tag, obj[i].frnt);
	end
	setProperty('sky.scale.x', 100)
	setProperty('sky.scale.y', 100)
	addCharacterToList('bf-opponent')
end
function onCreatePost()
	setProperty('gfGroup.flipX', true)
end
