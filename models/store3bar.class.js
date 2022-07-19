class Store3Bar extends MovableObject {

    offsetX = 60;
    offsetY = 170;
    offsetW = 130;
    offsetH = 390;

    width = 800;
    height = 400;
    y = 65;
    x = 3000;

    Images = [
        './img/13_store/store3Bar.png'
    ];

    ImagesRoof = [
        './img/13_store/store3BarRoof.png'
    ];

    constructor() {
        super().loadImage(this.ImagesRoof[0]);
        this.loadImages(this.Images);
        this.loadImages(this.ImagesRoof);
        this.animate();
    }

    animate() {

        setInterval(() => {
            if (this.isOrNotAboutStore2() || world.character.y < 80) {
                this.playAnimation(this.Images);
            } else {
                this.loadImage(this.ImagesRoof);
            }
        }, 200);

    }

}