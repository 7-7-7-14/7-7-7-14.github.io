window.addEventListener('load', function () {
    const applyBackgroundColor = () => {
        const color = localStorage.getItem('backgroundColor') || '#ffffff';
        if (document.body.style.backgroundColor !== color) {
            document.body.style.backgroundColor = color;
        }
    };

    applyBackgroundColor();

    setInterval(applyBackgroundColor, 250);
});

// #0d0d0d if not working
