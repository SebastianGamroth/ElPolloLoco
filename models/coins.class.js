class Coins extends MovableObject {

    offsetX = 30;
    offsetY = 30;
    offsetW = 60;
    offsetH = 60;

    constructor(x, y) {
        super().loadImage('./img/8_coin/coin_2.png');

        this.x = x;
        this.y = y;
        this.width = 90;
        this.height = 90;
    };
}