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
            };
        }, 1000 / 25);
    };

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 155;
        }
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

    hit() {
        this.energy -= 20;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    hitCoin() {
        this.coin += 20;
    }

    hitBottle() {
        this.bottle += 20;
    }

    hitChiken() {
        this.energyChiken -= 20;
        console.log('hitChiken')
    }

    hitBoss() {
        this.energyBoss -= 20;

        this.lastHitBoss = new Date().getTime();
    }

    isHurtBoss() {
        let timepassed = new Date().getTime() - this.lastHitBoss;
        timepassed = timepassed / 1000;
        return timepassed < 1.4;
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

    chikenDead() {
        return this.energyChiken == 0;
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