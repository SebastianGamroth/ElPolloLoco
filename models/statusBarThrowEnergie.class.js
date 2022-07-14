class StatusBarThrowEnergie extends DrawableObject {

    Images = [
        './img/7_statusbars/1_statusbar/4_statusbar_throwEnergie/0.png',
        './img/7_statusbars/1_statusbar/4_statusbar_throwEnergie/60.png',
        './img/7_statusbars/1_statusbar/4_statusbar_throwEnergie/100.png' 
    ];

    percentage = 60;

    constructor() {
        super();
        this.loadImages(this.Images);

        this.x = 180;
        this.y = 10;
        this.width = 150;
        this.height = 40;

        this.setPercentage(60);
    };

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.Images[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    };

    resolveImageIndex() {
        if (this.percentage == 20) {
            return 0;
        } else if (this.percentage == 40) {
            return 1;
        } else {
            return 2;
        }
    };
}