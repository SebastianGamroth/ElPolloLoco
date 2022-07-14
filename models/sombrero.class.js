class Sombrero extends MovableObject {
    offsetX = 45;
    offsetY = 20;
    offsetW = 60;
    offsetH = 30;

    constructor(x, y) {
        super().loadImage('./img/7_statusbars/3_icons/icon_sombrero.png');

        this.x = x;
        this.y = y;
        this.width = 80;
        this.height = 80;
    };
}