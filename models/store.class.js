class StoreFirst extends MovableObject {

    // offsetX = 30;
    // offsetY = 190;
    // offsetW = 115;
    // offsetH = 390;

    width = 400;
    height = 400;
    y = 65;
    // x = 1200;

    // Images = [
    //     './img/13_store/store.png'
    // ];

    // constructor() {
    //     super().loadImage(this.Images[0]);
    //     this.loadImages(this.Images);

    // }

    constructor(imagePath, x) {
        super().loadImage(imagePath);

        this.x = x;
        this.y;
    }
}