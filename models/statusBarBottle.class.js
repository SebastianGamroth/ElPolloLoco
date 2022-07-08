class StatusBarBottle extends DrawableObject {
    Images = [
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png',
    ];

    constructor() {
        super().loadImage(this.Images[0]);
        // super();
        // this.loadImages(this.Images);

        this.x = 30;
        this.y = 20;
        this.width = 200;
        this.height = 53;
        // this.setPercentage(100);
    };
}