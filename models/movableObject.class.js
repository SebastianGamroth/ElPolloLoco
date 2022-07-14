class MovableObject extends DrawableObject {
    offsetX = 0;
    offsetY = 0;
    offsetW = 0;
    offsetH = 0;

    speed = 0.15;
    otherDirection = false;
    speedY = 0.1;
    acceleration = 2.5;
    energy = 100;
    energyChiken = 20;
    energyBoss = 100;
    energyThrow = 60;
    coin = 0;
    bottle = 0;
    lastHit = 0;
    lastHitBoss = 0;
    damage = 100;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    };

    isAboveGround() {
        if (this instanceof ThrowableObject ||
            this instanceof ChikenBabys ||
            // this instanceof Chiken ||
            this instanceof EndBoss) {
            return true;
        } else if (this instanceof Chiken) {
            return this.y < 355;
        }
        else {
            return this.y < 155;
        }
    };


    stopPunch = 0;

    characterPunch() {

        let stopPunchInterval = setInterval(() => {
            if (this.stopPunch < 10) {
                this.x -= 20;
                this.stopPunch += 1;
                this.speedY = 5;
            }
            clearInterval(stopPunchInterval);
        }, 1000 / 25);

        this.stopPunch = 0;
    };





    isColliding(mo) {

        // console.log(`
        // offsetX ${mo.x}
        //    xw ${(this.x + this.offsetX) + (this.width - this.offsetW)} x ${mo.x + mo.offsetX} is ${(this.x + this.offsetX) + (this.width - this.offsetW) > mo.x + mo.offsetX}
        //    yh ${(this.y + this.offsetY) + (this.height - this.offsetH)} y ${mo.y + mo.offsetY} is ${(this.y + this.offsetY) + (this.height - this.offsetH) > mo.y + mo.offsetY}
        //    x ${this.x + this.offsetX} xw ${(mo.x + mo.offsetX) + (mo.width - mo.offsetW)} is ${this.x + this.offsetX < (mo.x + mo.offsetX) + (mo.width - mo.offsetW)}
        //    y ${this.y + this.offsetY} yh ${(mo.y + mo.offsetY) + (mo.height - mo.offsetH)} is ${this.y + this.offsetY < (mo.y + mo.offsetY) + (mo.height - mo.offsetH)}
        //     `
        // )

        return (this.x + this.offsetX) + (this.width - this.offsetW) > mo.x + mo.offsetX &&
            (this.y + this.offsetY) + (this.height - this.offsetH) > mo.y + mo.offsetY &&
            this.x + this.offsetX < (mo.x + mo.offsetX) + (mo.width - mo.offsetW) &&
            this.y + this.offsetY < (mo.y + mo.offsetY) + (mo.height - mo.offsetH);

    }

    lastFly = 0;
    jumpHeight = 10;
    flyFast = 0;
    jump() {
        // this.acceleration = 1;
        this.speedY = this.jumpHeight;
    }
    randomBounce() {
        this.acceleration = 0.1 + Math.random() * 6;
        if (Math.random() < 0.03 && !this.isAboveGround()) {
            this.jump();
            this.flyChickenLeft();
            this.lastFly = new Date().getTime();
        }
    }


    flyChickenLeft() {
        let stopPunchInterval = setInterval(() => {
            if (this.flyFast < 10) {
                this.x -= 10;
                this.flyFast += 1;
                this.speedY = 20
            }
            clearInterval(stopPunchInterval);
        }, 1000 / 25);

        this.flyFast = 0;
    };


    checkFly() {
        this.lastFly = new Date().getTime();
    }
    chickenFly() {
        let timepassed = new Date().getTime() - this.lastFly;
        timepassed = timepassed / 1000;
        return timepassed < 0.4;
    }



    chickenBabyNowBiggerBoolean = false;
    isChickenBabyNowBigger() {
        this.chickenBabyNowBiggerBoolean = true;
    }
    chickenBabyNowBigger() {
        return this.chickenBabyNowBiggerBoolean;
    }
    hitChiken() {
        this.energyChiken -= 20;
        if (this.energyChiken < 0) {
            this.energyChiken = 0;
        }
    }
    chikenDead() {
        return this.energyChiken == 0;
    }



    hit() {
        this.energy -= 20;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }
    hitIsSave() {
        this.energyBlock -= 20;
        this.lastHit = new Date().getTime();
    }
    damageEnemy() {
        this.damage -= 20;
    }
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 0.4;
    }
    isDead() {
        return this.energy == 0;
    }
    energyBlock = 100;
    lastBlock;
    isCharacterBlock() {
        if (this.energyBlock > 0) {

            this.lastBlock = new Date().getTime();
        }
    }
    characterBlock() {
        let timepassed = new Date().getTime() - this.lastBlock;
        timepassed = timepassed / 1000;
        return timepassed < 0.4;
    }



    // bottleSplash = false;
    lastHitBottle;
    hitBottleSplash() {
        this.lastHitBottle = new Date().getTime();
        // this.bottleSplash = true;
    }
    isBottleSplash() {
        let timepassed = new Date().getTime() - this.lastHitBottle;
        timepassed = timepassed / 1000;
        return timepassed < 0.4;

        // return this.bottleSplash;
    }



    chickenBaby = false;
    ischikenBabyDead() {
        this.chickenBaby = true;
    }
    chikenBabyDead() {
        return this.chickenBaby;
    }



    hitCoin() {
        this.coin += 20;
    }
    hitBottle() {
        this.bottle += 20;
    }
    fillEnergyThrow() {
        this.energyThrow += 20;
    }


    bossAttack = false;
    hitBoss() {
        this.energyBoss -= 20;
        this.lastHitBoss = new Date().getTime();
    }
    isHurtBoss() {
        let timepassed = new Date().getTime() - this.lastHitBoss;
        timepassed = timepassed / 1000;
        return timepassed < 0.8;
    }
    isBossAttackTrue() {
        this.bossAttack = true;
    }
    isBossAttackFalse() {
        this.bossAttack = false;
    }
    isBossAttack() {
        return this.bossAttack == 1;
    }
    isBossDead() {
        return this.energyBoss == 0;
    }



    playAnimation(images) {
        let i = this.currentImage % images.length; // modulo - schleiffe der länge
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    jump() {
        this.speedY = 30;
    }
}