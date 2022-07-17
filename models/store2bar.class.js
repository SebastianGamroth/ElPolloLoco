class Store2Bar extends MovableObject {

    offsetX = 90;
    offsetY = 170;
    offsetW = 170;
    offsetH = 390;

    width = 400;
    height = 400;
    y = 65;
    x = 800;

    Images = [
        './img/13_store/store2Bar.png'
    ];

    ImagesRoof = [
        './img/13_store/store2BarRoof.png'
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