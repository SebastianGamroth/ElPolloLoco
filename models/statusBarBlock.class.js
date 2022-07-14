class StatusBarBlockEnergy extends DrawableObject {

    Images = [
        './img/7_statusbars/1_statusbar/5_statusbar_block/100.png',
        './img/7_statusbars/1_statusbar/5_statusbar_block/80.png',
        './img/7_statusbars/1_statusbar/5_statusbar_block/60.png',
        './img/7_statusbars/1_statusbar/5_statusbar_block/40.png',
        './img/7_statusbars/1_statusbar/5_statusbar_block/20.png',
        './img/7_statusbars/1_statusbar/5_statusbar_block/0.png'
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

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 0;
        } else if (this.percentage == 80) {
            return 1;
        }else if (this.percentage == 60) {
            return 2;
        }else if (this.percentage == 40) {
            return 3;
        }else if (this.percentage == 20) {
            return 4;
        } else {
            return 5;
        }
    };
}