class Frog extends MovableObject {

    offsetX = 20;
    offsetY = 10;
    offsetW = 20;
    offsetH = 10;

    width = 428;
    height = 200;
    y = 280;


    Images = [
        './img/11_frog/frog.png',
        './img/11_frog/frog.png'
    ];

    constructor() {
        super().loadImage(this.Images[0]);
        this.loadImages(this.Images);

        this.x = -700;
        // this.animate();
    }
}