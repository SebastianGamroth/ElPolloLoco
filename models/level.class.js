class Level {
    enemies;
    enemieBoss;
    clouds;
    backgroundObjects;
    coins;
    bottle;
    sombrero;

    levelEndX = 2250;

    constructor(enemies, enemieBoss, clouds, backgroundObjects, coins, bottle, sombrero) {
        this.enemies = enemies;
        this.enemieBoss = enemieBoss;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.bottle = bottle;
        this.sombrero = sombrero;
    };
}