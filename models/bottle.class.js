class Bottle extends MovableObject {
    offsetX = 23;
    offsetY = 10;
    offsetW = 33;
    offsetH = 15;


    Images1 = [
        './img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        './img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];

    percentage = 10;

    constructor(x, y, percentage) {
        super().loadImage('./img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        // super();
        // this.loadImages(this.Images);

        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;

        // this.setPercentage(percentage);
    };

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.Images[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    };

    resolveImageIndex() {
        if (this.percentage == 10) {
            return 0;
        } else if (this.percentage == 20) {
            return 1;
        }
    };
}