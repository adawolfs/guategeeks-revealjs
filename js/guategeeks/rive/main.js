
// Background animation
let canvas = document.getElementsByClassName("background-canvas")[0];
new rive.Rive({
    src: "assets/rive/guategeeks_page_background.riv",
    canvas: canvas,
    artboard: "background",
    autoplay: true
});


let laptop_pc_phone = document.getElementsByClassName("rive-laptop-pc-phone")[0];
new rive.Rive({
    src: "assets/rive/laptop-pc-phone.riv",
    canvas: laptop_pc_phone,
    animations: ["pc", "phone", "pc-laptop", "laptop-pc", "phone-laptop", "pc-light"],
    artboard: "artboard",
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

let rive_blog = document.getElementsByClassName("rive-blog")[0];
new rive.Rive({
    src: "assets/rive/blog.riv",
    canvas: rive_blog,
    animations: ["image", "chat", "hearth", "face", "pencil", "load"],
    artboard: "artboard",
    autoplay: true
});


let rive_robot = document.getElementsByClassName("rive-robot")[0];
new rive.Rive({
    src: "assets/rive/robot.riv",
    canvas: rive_robot,
    animations: ["lid", "particles", "floating"],
    artboard: "artboard",
    autoplay: true
});