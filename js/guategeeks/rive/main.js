
// Background animation
let canvas = document.getElementsByClassName("background-canvas");
for (let i = 0; i < canvas.length; i++) {
    new rive.Rive({
        src: "assets/rive/guategeeks_page_background.riv",
        canvas: canvas[i],
        artboard: "background",
        autoplay: true
    });
}


let laptop_pc_phone = document.getElementsByClassName("rive-laptop-pc-phone")[0];
new rive.Rive({
    src: "assets/rive/laptop-pc-phone.riv",
    canvas: laptop_pc_phone,
    animations: ["pc", "phone", "pc-laptop", "laptop-pc", "phone-laptop", "pc-light"],
    artboard: "composition",
    autoplay: true
});

let rive_ai = document.getElementsByClassName("rive-ai")[0];
new rive.Rive({
    src: "assets/rive/ai.riv",
    canvas: rive_ai,
    animations: ["brain", "data1"],
    artboard: "artboard",
    autoplay: true
});
