class World {

    character = new Character();
    enemies = [
        new Chiken(),
        new Chiken(),
        new Chiken()
    ];

    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.widht, this.canvas.heiht);
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.widht, this.character.heiht);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }
}