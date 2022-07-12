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
    statusBarBoss = new StatusBarBoss();
    throwableObject = [];
    newCloud = [];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        // initLevel();
    };


    setWorld() {
        this.character.world = this;
    }


    run() {
        setInterval(() => {
            this.chickenCollisionCharacter();
            this.chickenBabyCollisionCharacter();
            this.charackterPickUpCoins();
            this.charackterPickUpBottle();
            this.characterThrowsBottle();
            this.bottleHitsEndBoss();
            this.chickenEndAndRemove();
            this.bottleHitsChicken();
            this.cloudsEndAndRemove();
            this.bottleSplash();
            this.endBossAttackCharacter();
            this.endBossThrowsChickenBaby();
            this.chickenBabyNowBigChicken();

            this.createClouds();
        }, 200);
    }


    createClouds() {
        if (this.level.clouds.length == 7) {
            let cloud = new Cloud(2800);
            this.level.clouds.push(cloud);
        }
    }


    cloudsEndAndRemove() {
        this.level.clouds.forEach((enemy, index) => {
            if (enemy.x < -1200) {
                // enemy.splice(index, 1);
                this.level.clouds.splice(index, 1);
            }
        });
    }


    chickenEndAndRemove() {
        this.level.enemies.forEach((enemy, index) => {
            if (enemy.x < 100) {
                this.level.enemies.splice(index, 1);
            }
        });
    }


    bottleHitsChicken() {
        this.throwableObject.forEach((bottle, id) => {
            this.level.enemies.forEach((enemy, index) => {

                if (this.throwableObject.length > 0) {
                    if (bottle.isColliding(enemy)) {

                        enemy.hitChiken();
                        enemy.stopAnimate();

                        this.lastTime = new Date().getTime();
                        // this.deleteChicken(index);

                        // this.level.enemies.splice(index, 1);
                        // this.throwableObject.splice(id, 1);
                    }
                }
            });
        });
    }


    bottleHitsEndBoss() {
        this.throwableObject.forEach((bottle, id) => {

            let boss = this.level.enemieBoss[0];

            if (this.throwableObject.length > 0) {
                if (bottle.isColliding(boss)) {

                    boss.hitBoss();
                    this.statusBarBoss.setPercentage(boss.energyBoss);

                    this.throwableObject.splice(id, 1);
                }
            }
        });
    }


    chickenBabys = [];
    endBossAttackCharacter() {
        let boss = this.level.enemieBoss[0];
        if (this.character.x > 400) {
            boss.isBossAttackTrue();

            if (this.chickenBabys.length < 1) {
                let chicken = new ChikenBabys();
                this.chickenBabys.push(chicken);
            }
        }
        else { boss.isBossAttackFalse(); }
    }


    endBossThrowsChickenBaby() {
        this.chickenBabys.forEach((chicken, id) => {
            if (chicken.y > 280) {
                chicken.ischikenBabyDead();
            }
            if (chicken.y > 450) {
                this.chickenBabys.splice(id, 1);
            }
        });
    }


    chickenBabyCollisionCharacter() {
        this.chickenBabys.forEach((enemy) => {
            if (enemy.isColliding(this.character)) {
                this.character.hit();
                this.statusBarHealth.setPercentage(this.character.energy);
            }
        });
    }


    chickenBabyNowBigChicken() {
        this.level.enemies.forEach(enemy => {
            if (enemy.x < this.character.x + 300) {
                enemy.isChickenBabyNowBigger();
            }
        });
    }


    characterThrowsBottle() {
        if (this.character.bottle > 0) {
            if (this.keyboard.D) {

                let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
                this.throwableObject.push(bottle);

                this.character.bottle -= 20;
                this.statusBarBottle.setPercentage(this.character.bottle);

            }
        }
    }


    bottleSplash() {
        this.throwableObject.forEach((bottle, id) => {
            if (bottle.y > 350) {
                bottle.hitBottleSplash();
                bottle.stopAnimate();
            }
            if (bottle.y > 450) {
                this.throwableObject.splice(id, 1);
            }
        });
    }


    chickenCollisionCharacter() {
        this.level.enemies.forEach((enemy) => {
            if (enemy.isColliding(this.character)) {

                this.character.hit();
                this.statusBarHealth.setPercentage(this.character.energy);
            }
        });
    }

    
    charackterPickUpCoins() {
        this.level.coins.forEach((enemy, index) => {
            if (this.character.isColliding(enemy)) {
                this.character.hitCoin();
                this.statusBarCoins.setPercentage(this.character.coin);

                this.level.coins.splice(index, 1);
            }
        });
    }


    charackterPickUpBottle() {
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

        this.addObjectsToMap(this.level.enemieBoss);
        this.addToMap(this.statusBarBoss);

        this.addObjectsToMap(this.chickenBabys);

        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottle);

        this.addObjectsToMap(this.newCloud);

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