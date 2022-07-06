class MovableObject {
    x = 120;
    y = 250;
    img;
    width = 100;
    height = 150;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log('MOVE R');
    }

    moveLeft() {
        console.log('MOVE L');
    }
}