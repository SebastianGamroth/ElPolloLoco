class StatusBarCoins extends StatusBar {
    Images = [
        './img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png'
     ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.Images);

        this.x = 10;
        this.y = 80;
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