class Cloud extends MovableObject {


    y = 20;
    width = 500;
    height = 250;


    Images = [
        './img/5_background/layers/4_clouds/1.png'
    ];


    constructor(x) {
        super().loadImage(this.Images[0]);

        this.x = x;

        // this.x = Math.random() * 500;
        this.animate();
    }


    animate() {
        this.startMoveTo();
    }


    startMoveTo() {
        this.moveToInterval = setInterval(this.moveTo.bind(this), 1000 / 60);
    }


    stopAnimate() {
        this.stopMoveTo();
    }


    stopMoveTo() {
        clearInterval(this.moveToInterval);
    }


    moveTo() {
        this.x -= 0.15;
    }

    
}