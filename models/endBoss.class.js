class EndBoss extends MovableObject {

    offsetX = 20;
    offsetY = 80;
    offsetW = 70;
    offsetH = 100;

    width = 343;
    height = 400;
    y = 55;

    ImagesWalk = [
        './img/4_enemie_boss_chicken/1_walk/G1.png',
        './img/4_enemie_boss_chicken/1_walk/G2.png',
        './img/4_enemie_boss_chicken/1_walk/G3.png',
        './img/4_enemie_boss_chicken/1_walk/G4.png'
    ];

    ImagesAlert = [
        './img/4_enemie_boss_chicken/2_alert/G5.png',
        './img/4_enemie_boss_chicken/2_alert/G6.png',
        './img/4_enemie_boss_chicken/2_alert/G7.png',
        './img/4_enemie_boss_chicken/2_alert/G8.png',
        './img/4_enemie_boss_chicken/2_alert/G9.png',
        './img/4_enemie_boss_chicken/2_alert/G10.png',
        './img/4_enemie_boss_chicken/2_alert/G11.png',
        './img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    ImagesAttack = [
        './img/4_enemie_boss_chicken/3_attack/G13.png',
        './img/4_enemie_boss_chicken/3_attack/G14.png',
        './img/4_enemie_boss_chicken/3_attack/G15.png',
        './img/4_enemie_boss_chicken/3_attack/G16.png',
        './img/4_enemie_boss_chicken/3_attack/G17.png',
        './img/4_enemie_boss_chicken/3_attack/G18.png',
        './img/4_enemie_boss_chicken/3_attack/G19.png',
        './img/4_enemie_boss_chicken/3_attack/G20.png'
    ];

    ImagesHurt = [
        './img/4_enemie_boss_chicken/4_hurt/G21.png',
        './img/4_enemie_boss_chicken/4_hurt/G22.png',
        './img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];

    ImagesDead = [
        './img/4_enemie_boss_chicken/5_dead/G24.png',
        './img/4_enemie_boss_chicken/5_dead/G25.png',
        './img/4_enemie_boss_chicken/5_dead/G26.png'
    ];

    constructor() {
        super().loadImage(this.ImagesWalk[0]);
        this.loadImages(this.ImagesWalk);
        this.loadImages(this.ImagesAlert);
        this.loadImages(this.ImagesAttack);
        this.loadImages(this.ImagesHurt);
        this.loadImages(this.ImagesDead);
        this.x = 600; //2400
        this.animate();
    }

    animate() {
        setInterval(() => {
            // if (this.isHurtBoss()){console.log('boss')}

            if (this.isHurtBoss()) {
                this.playAnimation(this.ImagesHurt);
                console.log('hurt')
            } else {
                this.playAnimation(this.ImagesWalk);
            }

        }, 200);

        // setInterval(() => {
        //     if (this.isTrue()) {
        //         console.log('isTrue');
        //         this.playAnimation(this.ImagesHurt);
        //     };

        // }, 50);
    }
}