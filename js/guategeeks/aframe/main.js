AFRAME.registerComponent('idc-3d-box', {

    init: function () {
        this.vx = 0.008;
        this.vy = 0.008;
        this.vz = 0.008;

        this.sx = 0.002;
        this.sy = 0.004;
        this.sz = 0.006;
        
    },

    tick: function () {
        let el = this.el;
        let position = el.getAttribute('position');
        if (el.id === 'box-1' || el.id === 'box-3') {
            position.y = position.y + this.vy;
            if(position.y <= 1) {
                this.vy = 0.008;
            } else if (position.y >= 4) {
                this.vy = -0.008;
            }
        } else if (el.id === 'box-2') {
            position.y = position.y + this.vy;
            if(position.y <= 1) {
                this.vy = 0.008;
            } else if (position.y >= 4) {
                this.vy = -0.008;
            }
        }

        let scale = el.getAttribute('scale')
        scale.x = scale.x + this.sx;
        scale.y = scale.y + this.sy;
        scale.z = scale.z + this.sz;

        if (scale.x <= 0.1) {
            this.sx = 0.002;
            this.sy = 0.004;
            this.sz = 0.006;
        } else if (scale.x >= 1.5) {
            this.sx = -0.002;
            this.sy = -0.004;
            this.sz = -0.006;
        }

       
    }
});


