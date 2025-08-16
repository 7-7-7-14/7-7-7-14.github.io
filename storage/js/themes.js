(function() {
    function applyTheme(selectedTheme) {
        if (selectedTheme === 'default') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.removeItem('selectedTheme');
        } else {
            document.documentElement.setAttribute('data-theme', selectedTheme);
            localStorage.setItem('selectedTheme', selectedTheme);
        }
        const logo = document.getElementById('logo');
        if (logo) {
            if (selectedTheme === 'pablocp') {
                logo.src = '/pablocp.png';
            }

             else {
                logo.src = '/testy.png';
            }
        }
        
        loadParticlesConfig(selectedTheme);
    }

    function initializeTheme() {
        const savedTheme = localStorage.getItem('selectedTheme');
        if (savedTheme) {
            applyTheme(savedTheme);
        } else {
            loadParticlesConfig('default');
        }
    }

    function loadParticlesConfig(theme) {
        let configFile = '/particlesjs-config.json';
        
        if (theme === 'light') {
            configFile = '/light.json';
        }
        if (theme === 'szvy') {
            configFile = '/szvy.json';
        }
        if (theme === 'bixl') {
            configFile = '/brunys.json';
        }
        if (theme === 'froggot1') {
            configFile = '/froggot1.json';
        }
        if (theme === 'v2') {
                configFile = '/goon.json';
        } else if (theme === 'default') {
            configFile = '/particlesjs-config.json';
        }

                if (theme === 'teto') {
                configFile = '/teto.json';
        } else if (theme === 'default') {
            configFile = '/particlesjs-config.json';
        }

        if (theme === 'ruby') {
            configFile = '/goon.json';
    } else if (theme === 'default') {
        configFile = '/particlesjs-config.json';
    }

        if (theme === 'uniub') {
            configFile = '/jobi.json';
    } else if (theme === 'default') {
        configFile = '/particlesjs-config.json';
    }
    if (theme === 'muted') {
        configFile = '/jobi.json';
} else if (theme === 'default') {
    configFile = '/particlesjs-config.json';
}

        const container = document.getElementById('particles-js');
        if (container) {
            container.innerHTML = '';
            
            if (typeof particlesJS !== 'undefined') {
                particlesJS.load('particles-js', configFile, function() {
                    console.log('Particles.js loaded with config: ' + configFile);
                });
            }
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        initializeTheme();
        
        const themeSelector = document.getElementById('themesbyszvy');
        if (themeSelector) {
            const currentTheme = localStorage.getItem('selectedTheme') || 'default';
            themeSelector.value = currentTheme;
            
            // Handle theme changes
            themeSelector.addEventListener('change', function() {
                applyTheme(this.value);
            });
        }
    });

    window.applyTheme = applyTheme;
    window.loadParticlesConfig = loadParticlesConfig;
    
})();
