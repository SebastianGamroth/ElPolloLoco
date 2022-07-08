class World {

    startScreen = new StartScreen();
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBarBottle = new StatusBarBottle();
    statusBarHealth = new StatusBarHealth();
    statusBarCoins = new StatusBarCoins();
    throwableObject = [];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisionsChicken();
        this.run();
        // initLevel();
        this.checkCollisionsCoins();
        this.checkCollisionsBottle();
    };

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisionsChicken();
            this.checkCollisionsCoins();
            this.checkCollisionsBottle();
            this.checkThrowableObject();
        }, 200);
    }

    checkThrowableObject() {
        if (world.character.bottle > 0) {
            if (this.keyboard.D) {
                let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
                this.throwableObject.push(bottle);

                world.character.bottle -= 20;
                this.statusBarBottle.setPercentage(this.character.bottle);
            }
        }

    }

    checkCollisionsChicken() {
        // if (this.keyboard.startGame) {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBarHealth.setPercentage(this.character.energy);
            }
        });
        // }
    }

    checkCollisionsCoins() {
        this.level.coins.forEach((enemy, index) => {
            if (this.character.isColliding(enemy)) {
                this.character.hitCoin();
                this.statusBarCoins.setPercentage(this.character.coin);

                this.level.coins.splice(index, 1);
            }
        });
    }

    checkCollisionsBottle() {
        this.level.bottle.forEach((enemy, index) => {
            if (this.character.isColliding(enemy)) {
                this.character.hitBottle();
                this.statusBarBottle.setPercentage(this.character.bottle);

                this.level.bottle.splice(index, 1);
            }
        });
    }

    // start = false;

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // this.addToMap(this.startScreen);

        // if (this.keyboard.startGame) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);

        this.addToMap(this.character);
        this.addObjectsToMap(this.throwableObject);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);

        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottle);

        this.ctx.translate(-this.camera_x, 0);
        // ---------- space of fixed objects ----------
        this.addToMap(this.statusBarBottle);
        this.addToMap(this.statusBarHealth);
        this.addToMap(this.statusBarCoins);
        this.ctx.translate(this.camera_x, 0);

        this.ctx.translate(-this.camera_x, 0);

        // let self = this;
        // requestAnimationFrame(function () {
        //     self.draw();
        // });
        // };

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });

    };

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o)
        });
    };

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        // mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    };

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}