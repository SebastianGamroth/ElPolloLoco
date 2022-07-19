class ChikenBabys extends MovableObject {

    offsetX = 5;
    offsetY = 5;
    offsetW = 10;
    offsetH = 15;

    height = 40;
    width = 41;
    y = 200;
    x = 3100;

    ImagesBaby = [
        './img/3_enemies_chicken/chicken_small/3_rotation/1_w.png',
        './img/3_enemies_chicken/chicken_small/3_rotation/2_w.png',
        './img/3_enemies_chicken/chicken_small/3_rotation/3_w.png',
        './img/3_enemies_chicken/chicken_small/3_rotation/4_w.png'
    ];

    ImagesDead = [
        './img/3_enemies_chicken/chicken_small/2_dead/dead_1.png',
        './img/3_enemies_chicken/chicken_small/2_dead/dead_2.png',
        './img/3_enemies_chicken/chicken_small/2_dead/dead_3.png',
        './img/3_enemies_chicken/chicken_small/2_dead/dead_4.png',
        './img/3_enemies_chicken/chicken_small/2_dead/dead_5.png',
        './img/3_enemies_chicken/chicken_small/2_dead/dead_6.png'
    ];

    constructor(x, y) {
        super().loadImage(this.ImagesBaby[0]);
        this.loadImages(this.ImagesBaby);
        this.loadImages(this.ImagesDead);

        // this.x = 400 + Math.random() * 500; // 200-700
        // this.speed = 0.4 + Math.random() * 0.5;
        this.x = x;
        this.y = y;
        this.animate();
    };

    animate() {
        this.startMoveTo();

        this.speedY = 10;
        this.applyGravity(0);

        // setInterval(() => {
        //     this.x += 8;
        // }, 25);


        setInterval(() => {
            if (this.chikenBabyDead()) {
                this.playAnimation(this.ImagesDead);
            } else if (!this.chikenBabyDead()) {
                this.playAnimation(this.ImagesBaby);
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
        this.x -= 8;
    }

}