class Bottle extends DrawableObject {
    offsetX = 23;
    offsetY = 10;
    offsetW = 33;
    offsetH = 15;


    Images = [
        './img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        './img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];

    percentage = 20;
    // bottlePickUpSound = new Audio('./audio/bottlePickUp.mp3');

    constructor(x, y, percentage) {
        super();
        this.loadImages(this.Images);

        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;

        this.setPercentage(percentage);
        // this.animate();
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

    // animate() {


    //     setInterval(() => {
    //         if (this.bottleSound()) {
    //             this.bottlePickUpSound.play();
    //         } else {
    //             this.bottlePickUpSound.pause();
    //         }
    //     }, 200);
    // }
}