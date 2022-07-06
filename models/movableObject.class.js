class MovableObject {
    x = 120;
    y = 290;
    img;
    width = 142;
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