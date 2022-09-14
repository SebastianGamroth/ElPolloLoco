class Sombrero extends MovableObject {
    offsetX = 10;
    offsetY = 10;
    offsetW = 20;
    offsetH = 20;

    Images = [
        './img/10_Sombrero/1_sombrero_rotation_1.png',
        './img/10_Sombrero/1_sombrero_rotation_2.png',
        './img/10_Sombrero/1_sombrero_rotation_3.png',
        './img/10_Sombrero/1_sombrero_rotation_4.png'
    ];

    constructor(x, y) {
        super().loadImage(this.Images[0]);
        // super();
        this.loadImages(this.Images);


        this.x = x;
        this.y = y;
        this.width = 60;
        this.height = 60;

        this.y = 165;
        // this.x = 400 + Math.random() * 500; // 200-700
        this.speed = 8 + Math.random() * 50;
        this.applyGravity(30);
        this.animate();
    }


    animate() {
        this.startMoveTo();
    }


    startMoveTo() {
        this.moveToInterval = setInterval(this.moveTo.bind(this), 200);
    }


    stopAnimate() {
        this.stopMoveTo();
    }


    stopMoveTo() {
        clearInterval(this.Images);
    }


    moveTo() {
        this.acceleration = 0.7;
        
        // this.x -= 0.2;
        // this.speedY = 5;
        // this.speed = 5 + Math.random() * 0.5;
        // this.acceleration = 4.5;

        // this.gravitySombrero();
        // this.randomBounce();

        this.moveLeft();
        this.playAnimation(this.Images);
    }


}