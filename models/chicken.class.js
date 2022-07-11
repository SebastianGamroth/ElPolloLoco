class Chiken extends MovableObject {

    offsetX = 5;
    offsetY = 8;
    offsetW = 10;
    offsetH = 20;

    height = 60;
    width = 61;
    y = 370;

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

    ImagesDead = [
        './img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];

    constructor() {
        super().loadImage(this.ImagesWalking[0]);
        this.loadImages(this.ImagesWalking);
        this.loadImages(this.ImagesBaby);
        this.loadImages(this.ImagesDead);

        this.x = 400 + Math.random() * 500; // 200-700
        this.speed = 0.4 + Math.random() * 0.5;

        this.animate();
    };

    // animate() {
    //     setInterval(() => {
    //         this.moveLeft();
    //     }, 1000 / 60);

    //     setInterval(() => {

    //         if (this.chikenDead()) {
    //             this.playAnimation(this.ImagesDead);
    //         } else if (!this.chikenDead()) {
    //             this.playAnimation(this.ImagesWalking);
    //         }
    //     }, 200);
    // };


    animate() {
        this.startMoveTo();

        setInterval(() => {
            if (this.chikenDead()) {
                this.playAnimation(this.ImagesDead);
            } else if (!this.chikenDead()) {
                this.playAnimation(this.ImagesWalking);
            }
        }, 200);

    }
    startMoveTo() {
        this.moveToInterval = setInterval(this.moveTo.bind(this), 1000 / 60);
    }
    stopAnimate() {
        this.stopMoveTo();
    }
    stopMoveTo() {
        clearInterval(this.moveToInterval);
    }
    moveTo() {
        this.moveLeft();
    }

}