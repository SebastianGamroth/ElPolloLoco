class World {


    // gameOverScreen = new GameOverScreen();
    character = new Character();
    level = initLevel();
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    StatusBarThrowEnergie = new StatusBarThrowEnergie();
    statusBarBottle = new StatusBarBottle();
    statusBarHealth = new StatusBarHealth();
    statusBarCoins = new StatusBarCoins();
    statusBarBoss = new StatusBarBoss();
    throwableObject = [];
    // newCloud = [];
    gameOverScreenArray = [];

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
            this.createNewChicken();

            // this.hickenFly()

            this.gameOver();
        }, 200);
    }


    stopMove() {
        this.enemiesStopAnimate();
        this.endBossStopAnimate();
        this.cloudsStopAnimate();
        this.characterStopAnimate();
        this.gameOverScreen();
    }
    cloudsStopAnimate() {
        this.level.clouds.forEach((cloud) => {
            if (cloud instanceof Cloud) {
                cloud.stopAnimate();
            }
        });
    }
    endBossStopAnimate() {
        this.level.enemieBoss[0].stopAnimate();
    }
    characterStopAnimate() {
        this.character.stopAnimate();
    }
    enemiesStopAnimate() {
        this.level.enemies.forEach((enemy) => {
            if (enemy instanceof Chiken) {
                enemy.stopAnimate();
            }
        });
    }

    onceOver = true;

    gameOver() {
        if (this.character.isDead() || this.level.enemieBoss[0].isBossDead()) {

            if (this.onceOver == true) {
                this.onceOver = false;

                // this.characterStopAnimate();
                this.stopMove();
                // this.onceOver = setTimeout(this.stopMove.bind(this), 100);
                this.onceOver = setTimeout(this.startScreen.bind(this), 1000);
            }
        }
    }


    gameOverScreen() {
        let screen = new GameOverScreen();
        this.gameOverScreenArray.push(screen);
    }

    startScreen() {
        document.getElementById('start').classList.remove('d-none');
        document.getElementById('btnStart').classList.remove('d-none');
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

    createNewChicken() {
        if (this.level.enemies.length <= 3) {
            this.level.enemies.push(new Chiken);
        }
    }


    // hickenFly() {
    //     this.level.enemies.forEach((enemy) => {
    //         if (enemy.y > 200) {
    //             console.log(enemy.y)
    //             enemy.checkFly();
    //         }
    //     });
    // }


    chickenEndAndRemove() {
        this.level.enemies.forEach((enemy, index) => {
            if (enemy.x < -600 || enemy.energyChiken == 0) {
                this.level.enemies.splice(index, 1);
            }
        });
    }


    bottleHitsChicken() {
        this.throwableObject.forEach((bottle) => {
            this.level.enemies.forEach((enemy) => {

                if (this.throwableObject.length > 0) {
                    if (bottle.isColliding(enemy)) {

                        enemy.hitChiken();
                        // enemy.stopAnimate();

                        this.lastTime = new Date().getTime();
                    }
                }
            });
        });
    }


    bottleTimer = [];


    bottleHitsEndBoss() {
        this.throwableObject.forEach((bottle) => {
            let boss = this.level.enemieBoss[0];

            if (this.throwableObject.length > 0) {
                if (bottle.isColliding(boss)) {

                    if (!this.bottleTimer.includes(bottle.timer)) {

                        boss.hitBoss();
                        this.statusBarBoss.setPercentage(boss.energyBoss);

                        this.bottleTimer.push(bottle.timer);
                    }
                }
            }
        });
    }


    chickenBabys = [];


    endBossAttackCharacter() {
        let boss = this.level.enemieBoss[0];
        if (boss.x < this.character.x + 460) {
            boss.isBossAttackTrue();

            if (boss.energyBoss > 0 && this.character.energy > 0) {
                if (this.chickenBabys.length < 1) {
                    let chicken = new ChikenBabys();
                    this.chickenBabys.push(chicken);
                }
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


    energyThrow = 3;


    throwsEnergy() {
        let time = setInterval(() => {
            this.energyThrow++;

            if (this.energyThrow >= 3) {
                clearInterval(time);
            }

            this.character.energyThrow += 20;
            this.StatusBarThrowEnergie.setPercentage(this.character.energyThrow);

        }, 600);
    }


    characterThrowsBottle() {
        if (this.character.bottle > 0) {

            if (this.keyboard.UP && this.energyThrow >= 3) {

                this.energyThrow = 0;
                this.character.energyThrow = 0;
                this.StatusBarThrowEnergie.setPercentage(this.character.energyThrow);
                this.throwsEnergy();

                let timer = Math.round(Date.now() / 1000);

                let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100, timer);
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

        // if (this.keyboard.startGame) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        // this.addObjectsToMap(this.newCloud);
        this.addObjectsToMap(this.level.clouds);

        this.addToMap(this.character);

        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.enemieBoss);
        this.addToMap(this.statusBarBoss);
        this.addObjectsToMap(this.chickenBabys);

        this.addObjectsToMap(this.throwableObject);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottle);

        this.ctx.translate(-this.camera_x, 0);
        // ---------- space of fixed objects ----------
        this.addToMap(this.StatusBarThrowEnergie);
        this.addToMap(this.statusBarBottle);
        this.addToMap(this.statusBarHealth);
        this.addToMap(this.statusBarCoins);

        this.addObjectsToMap(this.gameOverScreenArray);
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