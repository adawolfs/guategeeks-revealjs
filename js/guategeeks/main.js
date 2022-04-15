

let init3D = (id) => {
    document.getElementById(id).style.display = 'block';
}

let stop3D = (id) => {
    // document.getElementById(id).style.display = 'none';
}

Reveal.on( 'slidechanged', event => {
    console.log();
    event.currentSlide.id === 'idc-3d-slide' ? init3D('idc-3d-aframe') : stop3D('idc-3d-aframe');
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
} );
