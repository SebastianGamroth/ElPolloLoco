class DrawableObject {
    x = 120;
    y = 290;
    width = 142;
    height = 150;
    img;
    imageCache = {};
    currentImage = 0;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {

        if (this instanceof Character ||
            this instanceof Chiken ||
            this instanceof Coins ||
            this instanceof Bottle ||
            this instanceof EndBoss ||
            this instanceof Sombrero ||
            this instanceof Frog ||
            this instanceof TreeTrunk ||
            this instanceof StoreFirstBar ||
            this instanceof Store2Bar ||
            this instanceof Store3Bar ||
            this instanceof Barrel ||
            this instanceof ChikenBabys ||
            this instanceof WoodenBox) {
            ctx.beginPath();
            ctx.lineWidth = '1';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x + this.offsetX, this.y + this.offsetY, this.width - this.offsetW, this.height - this.offsetH);
            ctx.stroke();
        }
    }

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
}