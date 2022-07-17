class StatusBarBottle extends StatusBar {
    Images = [
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png'
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.Images);

        this.x = 10;
        this.y = 10;
        this.width = 150;
        this.height = 40;

        this.setPercentage(100);
    };

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.Images[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    };
}