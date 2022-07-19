class Level {
    enemies;
    enemieBoss;
    clouds;
    backgroundAir;
    backgroundObjects;
    backgroundObjectsLayer_2;
    backgroundObjectsLayer_3;
    coins;
    bottle;
    sombrero;
    frog;
    treeTrunk;
    storeFirst;
    storeFirstBar;
    barrel;
    woodenBox;

    levelEndX = 5070;

    constructor(enemies,
        enemieBoss,
        clouds, backgroundAir,
        backgroundObjects,
        backgroundObjectsLayer_2,
        backgroundObjectsLayer_3,
        coins, bottle,
        sombrero,
        frog,
        treeTrunk,
        storeFirst,
        storeFirstBar,
        store2Bar,
        store3Bar,
        barrel,
        woodenBox) {
        this.enemies = enemies;
        this.enemieBoss = enemieBoss;
        this.clouds = clouds;
        this.backgroundAir = backgroundAir;
        this.backgroundObjects = backgroundObjects;
        this.backgroundObjectsLayer_2 = backgroundObjectsLayer_2;
        this.backgroundObjectsLayer_3 = backgroundObjectsLayer_3;
        this.coins = coins;
        this.bottle = bottle;
        this.sombrero = sombrero;
        this.frog = frog;
        this.treeTrunk = treeTrunk;
        this.storeFirst = storeFirst;
        this.storeFirstBar = storeFirstBar;
        this.store2Bar = store2Bar;
        this.store3Bar = store3Bar;
        this.barrel = barrel;
        this.woodenBox = woodenBox;
    };
}