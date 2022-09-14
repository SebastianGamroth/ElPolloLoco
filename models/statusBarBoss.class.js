class StatusBarBoss extends StatusBar {
    Images = [
        './img/7_statusbars/2_statusbar_endboss/green/0.png',
        './img/7_statusbars/2_statusbar_endboss/green/20.png',
        './img/7_statusbars/2_statusbar_endboss/green/40.png',
        './img/7_statusbars/2_statusbar_endboss/green/60.png',
        './img/7_statusbars/2_statusbar_endboss/green/80.png',
        './img/7_statusbars/2_statusbar_endboss/green/100.png'
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.Images);

        this.x = 440;
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