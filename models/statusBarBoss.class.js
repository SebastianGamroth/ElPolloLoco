class StatusBarBoss extends DrawableObject {
    Images = [
        './img/7_statusbars/2_statusbar_endboss/green/100.png',
        './img/7_statusbars/2_statusbar_endboss/green/80.png',
        './img/7_statusbars/2_statusbar_endboss/green/60.png',
        './img/7_statusbars/2_statusbar_endboss/green/40.png',
        './img/7_statusbars/2_statusbar_endboss/green/20.png',
        './img/7_statusbars/2_statusbar_endboss/green/0.png'
    ];

    percentage = 100;

    constructor() {
        // super().loadImage(this.Images[0]);
        super();
        this.loadImages(this.Images);

        this.x = 800; //2400
        this.y = 20;
        this.width = 200;
        this.height = 53;

        this.setPercentage(100);
    };

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.Images[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    };

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 0;
        } else if (this.percentage == 80) {
            return 1;
        } else if (this.percentage == 60) {
            return 2;
        } else if (this.percentage == 40) {
            return 3;
        } else if (this.percentage == 20) {
            return 4;
        } else {
            return 5;
        }
    };
}