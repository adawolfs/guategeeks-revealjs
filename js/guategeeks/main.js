
let guategeeks = () => {
    document.getElementById('splash').style.display = 'none';
}
let init3D = (id) => {
    document.getElementById(id).style.display = 'block';
}

let stop3D = (id) => {
    // document.getElementById(id).style.display = 'none';
}

Reveal.on( 'slidechanged', event => {
    console.log();
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
} );
