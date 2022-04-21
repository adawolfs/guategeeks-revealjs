(function(global, d) {
    let waitingElements = [];
    let guategeeks = {}

    guategeeks.init = () => {
        document.getElementById('splash').style.display = 'none';
    }

    guategeeks.waitForReady = (key) => {
        waitingElements.push(key);
    }

    guategeeks.isReady = (key) => {
        waitingElements.splice(waitingElements.indexOf(key), 1);
        waitingElements = waitingElements.filter(function(value, index, arr){ 
            return value !== key;
        });

        if (waitingElements.length === 0) {
            guategeeks.init();
        }
    }

    const deviceType = () => {
        const ua = navigator.userAgent;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
            return "tablet";
        }
        else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
            return "mobile";
        }
        return "desktop";
    };

    global.deviceType = deviceType;
    global.guategeeks = guategeeks;
})(window, document);






let init3D = (id) => {
    document.getElementById(id).style.display = 'block';
}

let stop3D = (id) => {
    // document.getElementById(id).style.display = 'none';
}

// Reveal.on( 'slidechanged', event => {
//     console.log();
//     // event.previousSlide, event.currentSlide, event.indexh, event.indexv
// } );
