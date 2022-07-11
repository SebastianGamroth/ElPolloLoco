class ThrowableObject extends MovableObject {

    ImagesRotation = [
        './img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];

    ImagesSplash = [
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ];

    constructor(x, y) {
        super().loadImage(this.ImagesRotation[0]);
        this.loadImages(this.ImagesRotation);
        this.loadImages(this.ImagesSplash);
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.throw();
    }

    throw() {
        this.speedY = 25;
        this.applyGravity();

        setInterval(() => {
            this.x += 8;
        }, 25);

        setInterval(() => {
            if (this.isBottleSplash()) {
                this.playAnimation(this.ImagesSplash);
            } else {
                this.playAnimation(this.ImagesRotation);
            }
        }, 50);
    }
}