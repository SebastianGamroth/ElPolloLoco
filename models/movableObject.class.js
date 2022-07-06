class MovableObject {
    x = 120;
    y = 290;
    img;
    width = 142;
    height = 150;
    imageCache = {};

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = path;
        });
    }

    moveRight() {
        console.log('MOVE R');
    }

    moveLeft() {
        console.log('MOVE L');
    }
}