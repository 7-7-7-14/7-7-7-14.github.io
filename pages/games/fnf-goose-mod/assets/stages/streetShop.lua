dfltDir = 'backgrounds/streetshop/'
obj = {
	{tag= 'sky',
		fn= 'sky',
		x= 0,y= 0,
		sfx= 0, sfy= 0,
		frnt= false
		},
	{tag= 'house',
		fn= 'house',
		x= 1800,y= -800,
		sfx= 0.6, sfy= 0.6,
		frnt= false
		},
	{tag= 'bush',
		fn= 'bush',
		x= 1100,y= -400,
		sfx= 0.7, sfy= 0.7,
		frnt= false
		},
	{tag= 'ground',
		fn= 'ground',
		x= -1825, y= 100,
		sfx= 0.95, sfy= 0.95,
		frnt= false
		},
	{tag= 'buildings',
		fn= 'buildings',
		x= -2000,y= -1200,
		sfx= 0.9, sfy= 0.9,
		frnt= false
		},
	{tag= 'fg junk',
		fn= 'fg junk',
		x= -2350,y= 300,
		sfx= 1.1, sfy= 1.1,
		frnt= true
		}
}

function onCreate()
	for i = 1, #(obj) do
		makeLuaSprite(obj[i].tag, dfltDir..obj[i].fn, obj[i].x, obj[i].y);
		setScrollFactor(obj[i].tag, obj[i].sfx, obj[i].sfy);
		addLuaSprite(obj[i].tag, obj[i].frnt);
	end
	setProperty('sky.scale.x', 100)
	setProperty('sky.scale.y', 100)

end

function onBeatHit()
	--objectPlayAnimation('radio', 'idle', true)
end

