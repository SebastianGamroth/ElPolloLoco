class World {

    audioCoins = new Audio(AUDIOS.COINS.AUDIO);
    audioBottles = new Audio(AUDIOS.BOTTLES.AUDIO);


    character = new Character();
    level = initLevel();
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    StatusBarThrowEnergie = new StatusBarThrowEnergie();
    StatusBarBlockEnergy = new StatusBarBlockEnergy();
    statusBarBottle = new StatusBarBottle();
    statusBarHealth = new StatusBarHealth();
    statusBarCoins = new StatusBarCoins();
    statusBarBoss = new StatusBarBoss();
    throwableObject = [];
    gameOverScreenArray = [];
    characterIsSave = false;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    };


    setWorld() {
        this.character.world = this;
    }


    run() {
        setInterval(() => {
            this.chickenCollisionCharacter();
            this.endBossCollisionCharacter();
// this.chickenBabyCollisionCharacter();

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
            this.characterBlockPunch();
            this.createNewSombrero();
            this.frogCatchesChicken();
// this.jumpToTreeTrunk();
            this.soundColision();

// this.hickenFly()

            this.gameOver();
        }, 200);

        setInterval(() => {
            this.charackterPickUpCoins();
            this.charackterPickUpBottle();
            this.charackterPickUpSombrero();
// this.jumpToStore1Bare();
            this.jumpToBarrel();
            this.backgroundPosition();

            this.chickenBabyCollisionCharacter();
        }, 1000 / 60);
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

                this.stopMove();
                this.onceOver = setTimeout(this.stopMove.bind(this), 100);
                this.onceOver = setTimeout(this.startScreen.bind(this), 2000);
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
        this.level
        this.level.clouds.forEach((enemy, index) => {
            if (enemy.x < -1200) {
                this.level.clouds.splice(index, 1);
            }
        });
    }


    backgroundPosition() {
        if (this.keyboard.LEFT && this.character.x > 470) {
            this.level.backgroundObjectsLayer_2.forEach((element2) => {
                element2.x -= (this.character.x / 1600);
            });
            this.level.backgroundObjectsLayer_3.forEach((element3) => {
                element3.x -= (this.character.x / 1200);
            });
        }
        if (this.keyboard.RIGHT && this.character.x < this.level.levelEndX) {
            this.level.backgroundObjectsLayer_2.forEach((element2) => {
                element2.x += (this.character.x / 1600);
            });
            this.level.backgroundObjectsLayer_3.forEach((element3) => {
                element3.x += (this.character.x / 1200);
            });
        }
    }


    createNewChicken() {
        if (this.level.enemies.length <= 11) {
            this.level.enemies.push(new Chiken(4600));
        }
    }


    createNewSombrero() {
        if (this.level.sombrero.length < 7) {
            this.level.sombrero.push(new Sombrero(5033, 150));
        }

        this.level.sombrero.forEach((value, index) => {
            if (value.x < -600) {
                this.level.sombrero.splice(index, 1);
            }
        });
    }


    jumpToBarrel() {
        if (this.level.barrel[9].isColliding(this.character)) {
            this.character.valueY = 130;
        }
        else if (this.character.isColliding(this.level.barrel[1])) {
            this.character.valueY = 130;
        }
        else if (this.level.barrel[2].isColliding(this.character)) {
            this.character.valueY = 180;
        }
        else if (this.character.isColliding(this.level.barrel[0])) {
            this.character.valueY = 180;
        }
        else if (this.character.isColliding(this.level.woodenBox[0])) {
            this.character.valueY = 90;
        }
        else if (this.character.isColliding(this.level.woodenBox[1])) {
            this.character.valueY = 90;
        }
        else if (this.character.isColliding(this.level.storeFirstBar[0])) {
            this.character.valueY = 55;
            this.level.storeFirstBar[0].aboutStore();
        }
        else if (this.character.isColliding(this.level.store2Bar[0])) {
            this.character.valueY = 55;
            this.level.store2Bar[0].aboutStore2();
        }
        else if (this.character.isColliding(this.level.store3Bar[0])) {
            this.character.valueY = 55;
            this.level.store2Bar[0].aboutStore2();
        }
        else {
            this.character.valueY = 235;
            this.level.storeFirstBar[0].underStore();
            this.level.store2Bar[0].underStore2();
        }
    }


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
                        enemy.stopAnimate();

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
                    let chicken = new ChikenBabys(boss.x+5, boss.y +20);
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
        this.chickenBabys.forEach((enemy, id) => {
            if (enemy.isColliding(this.character)) {
                this.chickenBabys.splice(id, 1);

                if (!this.characterIsSave) {
                    this.character.hit();
                    this.statusBarHealth.setPercentage(this.character.energy);
                } else {
                    this.character.hitIsSave();
                    this.StatusBarBlockEnergy.setPercentage(this.character.energyBlock);
                }

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
        if (this.character.bottle < 100) {

            if (this.keyboard.UP && this.energyThrow >= 3) {

                this.energyThrow = 0;
                this.character.energyThrow = 0;
                this.StatusBarThrowEnergie.setPercentage(this.character.energyThrow);
                this.throwsEnergy();

                let timer = Math.round(Date.now() / 1000);

                let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100, timer);
                this.throwableObject.push(bottle);

                this.character.bottle += 20;
                this.statusBarBottle.setPercentage(this.character.bottle);

            }
        }
    }


    frogCatchesChicken() {
        let frog = this.level.frog[0];
        this.level.enemies.forEach((enemy, index) => {
            if (enemy.isColliding(frog)) {
                enemy.soundChickenBoolean = false;
                frog.frogCatch();
                this.level.enemies.splice(index, 1);
            }
        });
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

                this.character.characterPunch();
                if (!this.characterIsSave) {

                    this.character.hit();
                    this.statusBarHealth.setPercentage(this.character.energy);
                } else {
                    this.character.hitIsSave();
                    this.StatusBarBlockEnergy.setPercentage(this.character.energyBlock);
                }
            }
        });
    }


    endBossCollisionCharacter() {
        let boss = this.level.enemieBoss[0];

        if (boss.isColliding(this.character)) {

            if (!this.characterIsSave) {
                this.character.hit();
                this.statusBarHealth.setPercentage(this.character.energy);
            } else {
                this.character.hitIsSave();
                this.StatusBarBlockEnergy.setPercentage(this.character.energyBlock);
            }
        }
    }


    characterBlockPunch() {
        if (this.keyboard.DOWN && this.character.energyBlock > 0) {
            this.character.isCharacterBlock();
            this.characterIsSave = true;

        } else {
            this.characterIsSave = false;
        }
    }


    charackterPickUpCoins() {
        this.level.coins.forEach((enemy, index) => {
            if (this.character.isColliding(enemy)) {
                if (this.character.coin > 0) {

                    this.audioCoins.pause();
                    this.audioCoins.currentTime = 0;
                    this.audioCoins.play();
                    this.character.hitCoin();
                    this.statusBarCoins.setPercentage(this.character.coin);

                    this.level.coins.splice(index, 1);
                }
            }
        });
    }


    charackterPickUpBottle() {
        this.level.bottle.forEach((enemy, index) => {
            if (this.character.isColliding(enemy)) {
                if (this.character.bottle > 0) {
                    this.audioBottles.pause();
                    this.audioBottles.currentTime = 0;
                    this.audioBottles.play();
                    this.character.hitBottle();
                    this.statusBarBottle.setPercentage(this.character.bottle);

                    this.level.bottle.splice(index, 1);
                }
            }
        });
    }


    charackterPickUpSombrero() {
        this.level.sombrero.forEach((enemy, index) => {
            if (this.character.isColliding(enemy)) {
                this.character.hitSombrero();
                this.StatusBarBlockEnergy.setPercentage(this.character.energyBlock);

                this.level.sombrero.splice(index, 1);
            }
        });
    }


    soundColision() {

        let frog = this.level.frog[0];

        if (this.character.x < 900) {
            frog.soundFrogEyesBoolean = true;
        }
        else {
            frog.soundFrogEyesBoolean = false;
        }

        this.level.enemies.forEach((enemy) => {
            if (this.character.x + 400 > enemy.x &&
                this.character.x - 300 < enemy.x) {
                enemy.soundChickenBoolean = true;
            } else {
                enemy.soundChickenBoolean = false;
            }
        });
    }


    draw() {
        // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundAir);
        this.addObjectsToMap(this.level.backgroundObjectsLayer_3);
        this.addObjectsToMap(this.level.backgroundObjectsLayer_2);
        this.addObjectsToMap(this.level.backgroundObjects);

        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.treeTrunk);
        this.addObjectsToMap(this.level.storeFirst);
        this.addObjectsToMap(this.level.barrel);
        this.addObjectsToMap(this.level.woodenBox);

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.frog);
        this.addObjectsToMap(this.level.enemieBoss);
        this.addObjectsToMap(this.chickenBabys);

        this.addObjectsToMap(this.throwableObject);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottle);
        this.addObjectsToMap(this.level.sombrero);

        this.addObjectsToMap(this.level.storeFirstBar);
        this.addObjectsToMap(this.level.store2Bar);
        this.addObjectsToMap(this.level.store3Bar);

        this.ctx.translate(-this.camera_x, 0);
        // ---------- space of fixed objects ----------
        this.addToMap(this.StatusBarThrowEnergie);
        this.addToMap(this.StatusBarBlockEnergy);
        this.addToMap(this.statusBarBottle);
        this.addToMap(this.statusBarHealth);
        this.addToMap(this.statusBarCoins);
        this.addToMap(this.statusBarBoss);

        this.addObjectsToMap(this.gameOverScreenArray);
        this.ctx.translate(this.camera_x, 0);

        this.ctx.translate(-this.camera_x, 0);

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