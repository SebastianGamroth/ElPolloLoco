class Character extends MovableObject {
    height = 280;
    y = 55;
    speed = 10;

    offsetX = 20;
    offsetY = 110;
    offsetW = 50;
    offsetH = 120;

    conter = 1;

    ImagesSleep = [
        './img/2_character_pepe/1_idle/long_idle/I-11.png',
        './img/2_character_pepe/1_idle/long_idle/I-12.png',
        './img/2_character_pepe/1_idle/long_idle/I-13.png',
        './img/2_character_pepe/1_idle/long_idle/I-14.png',
        './img/2_character_pepe/1_idle/long_idle/I-15.png',
        './img/2_character_pepe/1_idle/long_idle/I-16.png',
        './img/2_character_pepe/1_idle/long_idle/I-17.png',
        './img/2_character_pepe/1_idle/long_idle/I-18.png',
        './img/2_character_pepe/1_idle/long_idle/I-19.png',
        './img/2_character_pepe/1_idle/long_idle/I-20.png'
    ];

    ImagesWait = [
        './img/2_character_pepe/1_idle/idle/I-1.png',
        './img/2_character_pepe/1_idle/idle/I-2.png',
        './img/2_character_pepe/1_idle/idle/I-3.png',
        './img/2_character_pepe/1_idle/idle/I-4.png',
        './img/2_character_pepe/1_idle/idle/I-5.png',
        './img/2_character_pepe/1_idle/idle/I-6.png',
        './img/2_character_pepe/1_idle/idle/I-7.png',
        './img/2_character_pepe/1_idle/idle/I-8.png',
        './img/2_character_pepe/1_idle/idle/I-9.png',
        './img/2_character_pepe/1_idle/idle/I-10.png'
    ];

    ImagesWalking = [
        './img/2_character_pepe/2_walk/W-21.png',
        './img/2_character_pepe/2_walk/W-22.png',
        './img/2_character_pepe/2_walk/W-23.png',
        './img/2_character_pepe/2_walk/W-24.png',
        './img/2_character_pepe/2_walk/W-25.png',
        './img/2_character_pepe/2_walk/W-26.png'
    ];

    ImagesJumping = [
        './img/2_character_pepe/3_jump/J-31.png',
        './img/2_character_pepe/3_jump/J-32.png',
        './img/2_character_pepe/3_jump/J-33.png',
        './img/2_character_pepe/3_jump/J-34.png',
        './img/2_character_pepe/3_jump/J-35.png',
        './img/2_character_pepe/3_jump/J-36.png',
        './img/2_character_pepe/3_jump/J-37.png',
        './img/2_character_pepe/3_jump/J-38.png',
        './img/2_character_pepe/3_jump/J-39.png'
    ];

    ImagesBlock = [
        './img/2_character_pepe/6_block/b-1.png'
    ];

    ImagesDead = [
        // './img/2_character_pepe/5_dead/D-51.png',
        // './img/2_character_pepe/5_dead/D-52.png',
        // './img/2_character_pepe/5_dead/D-53.png',
        // './img/2_character_pepe/5_dead/D-54.png',
        // './img/2_character_pepe/5_dead/D-55.png',
        // './img/2_character_pepe/5_dead/D-56.png',
        './img/2_character_pepe/5_dead/D-57.png'
    ];

    ImagesHurt = [
        './img/2_character_pepe/4_hurt/H-41.png',
        './img/2_character_pepe/4_hurt/H-42.png',
        './img/2_character_pepe/4_hurt/H-43.png'
    ];

    world;
    walkingSound = new Audio('./audio/running.mp3');
    punchSound = new Audio('./audio/punch.mp3');

    constructor() {
        super().loadImage(this.ImagesWalking[0]);
        this.loadImages(this.ImagesWalking);
        this.loadImages(this.ImagesJumping);
        this.loadImages(this.ImagesDead);
        this.loadImages(this.ImagesHurt);
        this.loadImages(this.ImagesWait);
        this.loadImages(this.ImagesSleep);
        this.loadImages(this.ImagesBlock);
        this.applyGravity(0);
        this.animate();
    }


    animate() {
        this.startMoveTo();


        // setInterval(() => {
        //     this.walkingSound.pause();

        //     if (this.world.keyboard.RIGHT && this.x < this.world.level.levelEndX) {
        //         this.moveRight();
        //         this.otherDirection = false;
        //         this.walkingSound.play();
        //     }

        //     if (this.world.keyboard.LEFT && this.x > -610) {
        //         this.moveLeft();
        //         this.otherDirection = true;
        //         this.walkingSound.play();
        //     }

        //     if (this.world.keyboard.SPACE && !this.isAboveGround()) {
        //         this.jump();
        //     }

        //     this.world.camera_x = -this.x + 100;
        // }, 1000 / 60);


        // setInterval(() => {
        //     if (this.isDead()) {
        //         this.speedY = 5;
        //         this.playAnimation(this.ImagesDead);
        //     } else if (this.isHurt()) {
        //         this.playAnimation(this.ImagesHurt);
        //         this.conter = 1;
        //     } else if (this.isAboveGround()) {
        //         this.playAnimation(this.ImagesJumping);
        //         this.conter = 1;
        //     } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        //         this.playAnimation(this.ImagesWalking);
        //         this.conter = 1;
        //     } else if (this.world.keyboard.D) {
        //         this.playAnimation(this.ImagesWait);
        //         this.conter = 1;
        //     } else {
        //         this.noMovement();
        //     }

        // }, 50);
    }

    noMovement() {
        this.conter++;

        if (this.conter > 50) {
            this.playAnimation(this.ImagesSleep);
        } else {
            this.playAnimation(this.ImagesWait);
        }
    }

    startMoveTo() {
        this.moveToInterval = setInterval(this.moveTo.bind(this), 1000 / 60);
        this.moveToPlayAnimateInterval = setInterval(this.moveToPlayAnimate.bind(this), 50);
    }


    stopAnimate() {
        this.stopMoveTo();
    }


    stopMoveTo() {
        clearInterval(this.moveToInterval);
        clearInterval(this.moveToPlayAnimateInterval);

    }


    moveTo() {
        this.walkingSound.pause();

        if (this.world.keyboard.RIGHT && this.x < this.world.level.levelEndX) {
            this.moveRight();
            this.otherDirection = false;
            this.walkingSound.play();
        }

        if (this.world.keyboard.LEFT && this.x > -610) {
            this.moveLeft();
            this.otherDirection = true;
            this.walkingSound.play();
        }

        if (this.world.keyboard.SPACE && !this.isAboveGround()) {
            this.jump();
        }


        let cam;
        if (this.x < 20) { cam = 450; }
        else { cam = 100 }


        // if (this.OnTreeTrunk()) {
        //     // console.log('onTree')
        //     // this.y = 20;

        // } else {
        //     // this.y < 155;
        // }


        if (cam == 'undefined') { cam = 100 }
        this.world.camera_x = -this.x + cam;
    }


    moveToPlayAnimate() {
        this.punchSound.pause();

        if (this.isDead()) {
            this.speedY = 5;
            this.playAnimation(this.ImagesDead);

        } else if (this.isHurt()) {

            this.characterPunch();

            this.punchSound.play();
            this.playAnimation(this.ImagesHurt);
            this.conter = 1;

        } else if (this.characterBlock()) {
            this.playAnimation(this.ImagesBlock);
            this.conter = 1;

        } else if (this.isAboveGround()) {
            this.playAnimation(this.ImagesJumping);
            this.conter = 1;

        } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
            this.playAnimation(this.ImagesWalking);
            this.conter = 1;

        } else if (this.world.keyboard.UP) {
            this.playAnimation(this.ImagesWait);
            this.conter = 1;

        } else {
            this.noMovement();
        }
    }

}