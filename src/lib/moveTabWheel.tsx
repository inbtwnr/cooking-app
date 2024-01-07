let lastLeft = 0;
let lastWidth = 0;

export const moveTabWheel = (el: HTMLElement, id = "movingTabWheel") => {
  if (el) {
    const tabWidth = el.clientWidth;
    const tabLeft = el.offsetLeft;
    const wheel = document.getElementById(id);

    if (!wheel) {
      return;
    } else {
      wheel.animate(
        [
          {
            transform: `translateX(${lastLeft}px)`,
            width: `${lastWidth}px`,
          },
          {
            transform: `translateX(${tabLeft}px)`,
            width: `${tabWidth}px`,
          },
        ],
        {
          duration: 200,
          easing: "ease-out",
          fill: "forwards",
        },
      );
    }

    lastLeft = tabLeft;
    lastWidth = tabWidth;
  }
};
