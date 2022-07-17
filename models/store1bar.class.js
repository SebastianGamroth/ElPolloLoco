class StoreFirstBar extends MovableObject {

    offsetX = 50;
    offsetY = 170;
    offsetW = 170;
    offsetH = 390;

    width = 400;
    height = 400;
    y = 65;
    x = 1200;

    Images = [
        './img/13_store/storeBar.png'
    ];

    ImagesRoof = [
        './img/13_store/storeBarRoof.png'
    ];

    constructor() {
        super().loadImage(this.ImagesRoof[0]);
        this.loadImages(this.Images);
        this.loadImages(this.ImagesRoof);
        this.animate();
    }

    animate() {

        setInterval(() => {
            if (this.isOrNotAboutStore() || world.character.y < 80) {
                this.playAnimation(this.Images);
            } else {
                this.loadImage(this.ImagesRoof);
            }
        }, 200);

    }

}