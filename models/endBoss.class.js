class EndBoss extends MovableObject {

    offsetX = 20;
    offsetY = 80;
    offsetW = 70;
    offsetH = 100;

    width = 343;
    height = 400;
    y = 55;

    ImagesWalking = [
        './img/4_enemie_boss_chicken/2_alert/G5.png',
        './img/4_enemie_boss_chicken/2_alert/G6.png',
        './img/4_enemie_boss_chicken/2_alert/G7.png',
        './img/4_enemie_boss_chicken/2_alert/G8.png',
        './img/4_enemie_boss_chicken/2_alert/G9.png',
        './img/4_enemie_boss_chicken/2_alert/G10.png',
        './img/4_enemie_boss_chicken/2_alert/G11.png',
        './img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    constructor() {
        super().loadImage(this.ImagesWalking[0]);
        this.loadImages(this.ImagesWalking);
        this.x = 2400;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.ImagesWalking);
        }, 200);
    }
}