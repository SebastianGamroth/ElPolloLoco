class Level {
    enemies;
    clouds;
    backgroundObjects;
    coins;
    bottle;
    levelEndX = 2250;

    constructor(enemies, clouds, backgroundObjects, coins, bottle) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.bottle = bottle;
    };
}