class Frog extends MovableObject {

    offsetX = 20;
    offsetY = 10;
    offsetW = 20;
    offsetH = 10;

    width = 428;
    height = 200;
    y = 280;
    x = 150;


    ImagesWait = [
        './img/11_frog/wait/frogWait_1.png',
        './img/11_frog/wait/frogWait_2.png',
        './img/11_frog/wait/frogWait_3.png'
    ];

    ImagesToCatch = [
        './img/11_frog/toCatch/frogToCatch_1.png',
        './img/11_frog/toCatch/frogToCatch_2.png',
        './img/11_frog/toCatch/frogToCatch_3.png',
        './img/11_frog/toCatch/frogToCatch_4.png',
        './img/11_frog/toCatch/frogToCatch_5.png'
    ];

    frogSound = new Audio('./audio/frogEyes.mp3');

    constructor() {
        super().loadImage(this.ImagesWait[0]);
        this.loadImages(this.ImagesWait);
        this.loadImages(this.ImagesToCatch);

        this.animate();
    }


    animate() {
        this.startMoveTo();
    }


    startMoveTo() {
        this.moveToInterval = setInterval(this.moveTo.bind(this), 100);
    }


    stopAnimate() {
        this.stopMoveTo();
    }


    stopMoveTo() {
        clearInterval(this.moveToInterval);
    }


    moveTo() {
        this.frogSound.pause();



        console.log('soundFrog ', this.soundFrog())

        // if (this.soundFrog()) {
        //     this.frogSound.play();
        //     console.log('ok')
        // } 


        if (this.frogCatchChicken()) {
            this.playAnimation(this.ImagesToCatch);
        }
        else {
            this.playAnimation(this.ImagesWait);
            // this.frogSound.play();
        }

    }
}