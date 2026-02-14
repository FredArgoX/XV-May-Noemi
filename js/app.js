const root = document.documentElement;

let hueA = 0;
let hueB = 180;

function animateColors() {

    hueA += 0.3;
    hueB += 0.5;

    const colorA = `hsl(${hueA}, 70%, 45%)`;
    const colorB = `hsl(${hueB}, 65%, 35%)`;

    root.style.setProperty('--color-a', colorA);
    root.style.setProperty('--color-b', colorB);

    requestAnimationFrame(animateColors);
}

animateColors();
