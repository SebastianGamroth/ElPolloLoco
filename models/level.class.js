class Level {
    enemies;
    enemieBoss;
    clouds;
    backgroundObjects;
    coins;
    bottle;
    sombrero;
    frog;
    treeTrunk;

    levelEndX = 2250;

    constructor(enemies, enemieBoss, clouds, backgroundObjects, coins, bottle, sombrero, frog, treeTrunk) {
        this.enemies = enemies;
        this.enemieBoss = enemieBoss;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.bottle = bottle;
        this.sombrero = sombrero;
        this.frog = frog;
        this.treeTrunk = treeTrunk;
    };
}