class Chiken extends MovableObject {


    offsetX = 5;
    offsetY = 5;
    offsetW = 10;
    offsetH = 15;


    height = 40;
    width = 41;
    y = 375;


    ImagesBaby = [
        './img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        './img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        './img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];


    ImagesWalking = [
        './img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];


    ImagesChickenFly = [
        './img/3_enemies_chicken/chicken_normal/3_fly/1_w.png',
        './img/3_enemies_chicken/chicken_normal/3_fly/2_w.png',
        './img/3_enemies_chicken/chicken_normal/3_fly/3_w.png'
    ];


    ImagesDeadChicken = [
        './img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];


    ImagesDeadChickenBaby = [
        './img/3_enemies_chicken/chicken_small/4_dead/dead.png'
    ];

    walkingSound = new Audio('./audio/chickenRun.mp3');
    flySound = new Audio('./audio/chickenFly.mp3');

    constructor(x) {
        super().loadImage(this.ImagesWalking[0]);
        this.loadImages(this.ImagesWalking);
        this.loadImages(this.ImagesChickenFly);
        this.loadImages(this.ImagesBaby);
        this.loadImages(this.ImagesDeadChicken);
        this.loadImages(this.ImagesDeadChickenBaby);

        this.x = x;

        x = x + Math.random() * 500; // 200-700
        this.speed = 0.4 + Math.random() * 0.5;

        // this.jumpHeight= 5;
        // this.jumpHeight = Math.random() * 10;
        this.applyGravity(5);
        this.animate();
    };


    animate() {
        this.startMoveTo();
    }


    startMoveTo() {
        this.moveToInterval = setInterval(this.moveTo.bind(this), 1000 / 60);
        this.moveToIntervalStep = setInterval(this.moveToStep.bind(this), 100);
    }


    stopAnimate() {
        this.stopMoveTo();
    }


    stopMoveTo() {
        clearInterval(this.moveToInterval);
        clearInterval(this.moveToIntervalStep);
    }


    moveTo() {
        if (!this.chikenDead() && !this.chichenPunch()) {
            this.moveLeft();
            this.randomBounce();
        }
    }


    moveToStep() {
        this.walkingSound.pause();
        this.flySound.pause();

        if (this.soundChicken()) {
            if (!this.chickenFly()) {
                this.walkingSound.play();
            } else {
                this.flySound.play();
            }
        }

        if (this.chikenDead()) {
            this.playAnimation(this.ImagesDeadChickenBaby);
            // this.speedY = 0;
            // this.y - 160;
            // this.applyGravity(0);

        }
        else if (this.chickenFly()) {
            this.playAnimation(this.ImagesChickenFly);
        }
        else if (this.chickenBabyNowBigger()) {
            this.playAnimation(this.ImagesWalking);
            // this.walkingSound.play();
        }

        else {
            this.playAnimation(this.ImagesBaby);
            // this.walkingSound.play();
        }

    }
}