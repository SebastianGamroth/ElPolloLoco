class Coins extends MovableObject {

    constructor(x, y) {
        super().loadImage('./img/8_coin/coin_2.png');
console.log(x,y)
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 100;

    };
}