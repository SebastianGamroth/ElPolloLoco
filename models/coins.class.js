class Coins extends MovableObject {

    offsetX = 20;
    offsetY = 20;
    offsetW = 40;
    offsetH = 40;

    constructor(x, y) {
        super().loadImage('./img/8_coin/coin_2.png');

        this.x = x;
        this.y = y;
        this.width = 60;
        this.height = 60;
    };
}