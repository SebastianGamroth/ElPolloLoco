class WoodenBox extends DrawableObject {
    offsetX = 20;
    offsetY = 25;
    offsetW = 40;
    offsetH = 60;

    width = 58;
    height = 70;
    y = 365;
    // x = 1050;

    Images = [
        './img/13_store/woodenBox.png'
    ];

    constructor(x, y) {
        super().loadImage(this.Images[0]);
        this.loadImages(this.Images);
        this.x = x;
        this.y = y;
    }
}