
// Background animation
console.log(guategeeks)
guategeeks.waitForReady('background');
let riveComponents = [];
let rive_background = new rive.Rive({
    src: "assets/rive/guategeeks_page_background.riv",
    canvas: document.getElementsByClassName("background-canvas")[0],
    artboard: "background",
    autoplay: false
});


rive_background.on('load', () => {
    guategeeks.isReady('background');
});

riveComponents.push(rive_background);

guategeeks.waitForReady('rive_about_us');
let rive_about_us = new rive.Rive({
    src: "assets/rive/laptop-pc-phone.riv",
    canvas: document.getElementsByClassName("rive-laptop-pc-phone")[0],
    animations: ["pc", "phone", "pc-laptop", "laptop-pc", "phone-laptop", "pc-light"],
    artboard: "artboard",
    autoplay: false
});

rive_about_us.on('load', () => {
    guategeeks.isReady('rive_about_us');
});

riveComponents.push(rive_about_us);

guategeeks.waitForReady('rive_rive_ai');
let rive_ai = new rive.Rive({
    src: "assets/rive/ai.riv",
    canvas: document.getElementsByClassName("rive-ai")[0],
    animations: ["brain", "data1"],
    artboard: "artboard",
    autoplay: false
});
rive_ai.on('load', () => {
    guategeeks.isReady('rive_rive_ai');
});

riveComponents.push(rive_ai);


guategeeks.waitForReady('rive_blog');
let rive_blog = new rive.Rive({
    src: "assets/rive/blog.riv",
    canvas: document.getElementsByClassName("rive-blog")[0],
    animations: ["image", "chat", "hearth", "face", "pencil", "load"],
    artboard: "artboard",
    autoplay: false
});

rive_blog.on('load', () => {
    guategeeks.isReady('rive_blog');
})

riveComponents.push(rive_blog);

guategeeks.waitForReady('rive_robot');
let rive_robot = new rive.Rive({
    src: "assets/rive/robot.riv",
    canvas: document.getElementsByClassName("rive-robot")[0],
    animations: ["lid", "particles", "floating"],
    artboard: "artboard",
    autoplay: false
});

rive_robot.on('load', () => {
    guategeeks.isReady('rive_robot');
});

riveComponents.push(rive_robot);

// Listeners for the animations
Reveal.on( 'slidechanged', event => {
    
    console.log(event)
    riveComponents.forEach(riveComponent => {
        console.log(riveComponent);
        riveComponent.pause();
    });
    
    if (event.currentSlide === document.querySelector('.guategeeks-course-ai')) {
        rive_ai.play(["brain", "data1"]);
    } 

    if (event.currentSlide === document.querySelector('.guategeeks-course-robotics')) {
        rive_robot.play(["lid", "particles", "floating"]);
    }

    if (event.currentSlide === document.querySelector('.guategeeks-about-us')) {
        rive_about_us.play(["pc", "phone", "pc-laptop", "laptop-pc", "phone-laptop", "pc-light"]);
    }
    if (event.currentSlide === document.querySelector('.guategeeks-blog')) {
        rive_blog.play(["image", "chat", "hearth", "face", "pencil", "load"]);
    }
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
} );