class Fence extends MovableObject {
    width = 100;
    height = 150;

    constructor(imagePath, x) {
        super().loadImage(imagePath);

        this.x = x;
        this.y = 480 - this.height;
    }
}