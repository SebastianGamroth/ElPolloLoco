class Cloud extends MovableObject {
    y = 20;
    width = 500;
    height = 250;

    Images = [
        './img/5_background/layers/4_clouds/1.png'
    ];

    constructor(x) {
        super().loadImage(this.Images[0]);

        // if (!x) { x = 400; console.log('400')}
        // else {
        //     console.log(x)
        //     this.x = x;
        //     this.playAnimation(this.Images[0]);
        // }
        this.x = x;

        // this.x = Math.random() * 500;
        this.animate();
    }

    animate() {
        // this.moveLeft();
        // setInterval(() => {
        //     // this.playAnimation(this.Images[0]);

        // }, 2000);

        setInterval(() => {
            this.x -= 0.15;
        }, 1000 / 60);

    }
}