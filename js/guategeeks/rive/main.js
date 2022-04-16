
// Background animation
let canvas = document.getElementsByClassName("background-canvas");
for (let i = 0; i < canvas.length; i++) {
    new rive.Rive({
        src: "rive/guategeeks_page_background.riv",
        canvas: canvas[i],
        artboard: "background",
        autoplay: true
    });
}

