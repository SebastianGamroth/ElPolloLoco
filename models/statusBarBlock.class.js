class StatusBarBlockEnergy extends StatusBar {

    Images = [
        './img/7_statusbars/1_statusbar/5_statusbar_block/0.png',
        './img/7_statusbars/1_statusbar/5_statusbar_block/20.png',
        './img/7_statusbars/1_statusbar/5_statusbar_block/40.png',
        './img/7_statusbars/1_statusbar/5_statusbar_block/60.png',
        './img/7_statusbars/1_statusbar/5_statusbar_block/80.png',
        './img/7_statusbars/1_statusbar/5_statusbar_block/100.png'
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.Images);

        this.x = 180;
        this.y = 45;
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