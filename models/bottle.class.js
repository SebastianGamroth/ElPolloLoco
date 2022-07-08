class Bottle extends MovableObject {
    offsetX = 45;
    offsetY = 20;
    offsetW = 60;
    offsetH = 30;

    constructor(x, y) {
        super().loadImage('./img/6_salsa_bottle/1_salsa_bottle_on_ground.png');

        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 100;
    };
}