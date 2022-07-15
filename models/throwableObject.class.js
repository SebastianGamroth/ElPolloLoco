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

    world;
    bottleSplashSound = new Audio('./audio/bottleSplash.mp3');

    constructor(x, y, timer) {
        super().loadImage(this.ImagesRotation[0]);
        this.loadImages(this.ImagesRotation);
        this.loadImages(this.ImagesSplash);
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.timer = timer;
        // this.throw();

        this.animate();
    }

    // throw() {
    //     this.speedY = 25;
    //     this.applyGravity();

    //     setInterval(() => {
    //         this.x += 8;
    //     }, 25);

    //     setInterval(() => {
    //         if (this.isBottleSplash()) {
    //             this.playAnimation(this.ImagesSplash);
    //         } else {
    //             this.playAnimation(this.ImagesRotation);
    //         }
    //     }, 50);
    // }


    animate() {
        this.startMoveTo();

        this.speedY = 25;
        this.applyGravity(0);

        // setInterval(() => {
        //     this.x += 8;
        // }, 25);

        setInterval(() => {
            // this.bottleSplashSound.pause();

            if (this.isBottleSplash()) {
                this.bottleSplashSound.play();
                this.playAnimation(this.ImagesSplash);
            } else {
                this.playAnimation(this.ImagesRotation);
            }
        }, 100);

    }
    startMoveTo() {
        this.moveToInterval = setInterval(this.moveTo.bind(this), 25);
    }
    stopAnimate() {
        this.stopMoveTo();
    }
    stopMoveTo() {
        this.speedY = 0;
        clearInterval(this.moveToInterval);
    }
    moveTo() {
        this.x += 8;
    }

}