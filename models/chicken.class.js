class Chiken extends MovableObject {
    height = 60;
    width = 61;
    y = 370;

    ImagesWalking = [
        './img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    constructor() {
        super().loadImage('./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');

        this.x = 200 + Math.random() * 500; // 200-700

        this.loadImages(this.ImagesWalking);

        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.ImagesWalking.length; // modulo - schleiffe der länge
            let path = this.ImagesWalking[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 200);
    }

}