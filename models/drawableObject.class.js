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
            this instanceof EndBoss||
            this instanceof Sombrero) {
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

    // percentage = 100;

    // setPercentage(percentage) {
    //     console.log('ok')
    //     this.percentage = percentage;
    //     let path = this.Images[this.resolveImageIndex()];
    //     this.img = this.imageCache[path];
    // };

    // resolveImageIndex() {
    //     if (this.percentage == 100) {
    //         return 5;
    //     } else if (this.percentage > 80) {
    //         return 4;
    //     } else if (this.percentage > 60) {
    //         return 3;
    //     } else if (this.percentage > 40) {
    //         return 2;
    //     } else if (this.percentage > 20) {
    //         return 1;
    //     } else {
    //         return 0;
    //     }
    // };

}