class Barrel extends MovableObject {

    offsetX = 20;
    offsetY = 10;
    offsetW = 40;
    offsetH = 60;

    width = 58;
    height = 70;
    y = 365;
    // x = 1050;

    Images = [
        './img/13_store/barrel.png'
    ];

    constructor(x, y) {
        super().loadImage(this.Images[0]);
        this.loadImages(this.Images);
        this.x = x;
        this.y = y;
    }
}