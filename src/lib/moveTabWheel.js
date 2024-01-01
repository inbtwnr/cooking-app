let lastLeft = 0;
let lastWidth = 0;

export const moveTabWheel = (el, id = 'movingTabWheel') => {
    const tabWidth = el.offsetWidth;
    const tabLeft = el.offsetLeft;
    const wheel = document.getElementById(id);

    wheel.animate([
            {
                // from
                transform: `translateX(${lastLeft}px)`,
                width: `${lastWidth}px`,
            },
            {
                // to
                transform: `translateX(${tabLeft}px)`,
                width: `${tabWidth}px`,
            },
        ],
        {
            duration: 200,
            easing: 'ease-out',
            fill: 'forwards',
        },
    );

    lastLeft = tabLeft;
    lastWidth = tabWidth;
}