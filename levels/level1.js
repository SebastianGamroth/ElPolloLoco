// let level1;

function initLevel() {

    return new Level(
        [
            new Chiken(4100),
            new Chiken(3500),
            new Chiken(3000)
        ],
        [
            new EndBoss()
        ],
        [
            new Cloud(-700),
            new Cloud(-200),
            new Cloud(300),
            new Cloud(800),
            new Cloud(1300),
            new Cloud(1800),
            new Cloud(2300),
            new Cloud(2800)
        ],
        [
            new BackgroundObject('./img/5_background/layers/air.png', 0),
            new BackgroundObject('./img/5_background/layers/air.png', 719),
            new BackgroundObject('./img/5_background/layers/air.png', 719 * 2),
            new BackgroundObject('./img/5_background/layers/air.png', 719 * 3),
            new BackgroundObject('./img/5_background/layers/air.png', 719 * 4),
            new BackgroundObject('./img/5_background/layers/air.png', 719 * 5),
            new BackgroundObject('./img/5_background/layers/air.png', 719 * 6),
            new BackgroundObject('./img/5_background/layers/air.png', 719 * 7)
        ],
        [
            new BackgroundObject('./img/5_background/layers/1_first_layer/1.png', 0),
            new BackgroundObject('./img/5_background/layers/1_first_layer/2.png', 719),
            new BackgroundObject('./img/5_background/layers/1_first_layer/1.png', 719 * 2),
            new BackgroundObject('./img/5_background/layers/1_first_layer/2.png', 719 * 3),
            new BackgroundObject('./img/5_background/layers/1_first_layer/1.png', 719 * 4),
            new BackgroundObject('./img/5_background/layers/1_first_layer/2.png', 719 * 5),
            new BackgroundObject('./img/5_background/layers/1_first_layer/1.png', 719 * 6),
            new BackgroundObject('./img/5_background/layers/1_first_layer/2.png', 719 * 7)
        ],
        [
            new backgroundObjectsLayers_2('./img/5_background/layers/2_second_layer/2.png', -719),
            new backgroundObjectsLayers_2('./img/5_background/layers/2_second_layer/1.png', 0),
            new backgroundObjectsLayers_2('./img/5_background/layers/2_second_layer/2.png', 719),
            new backgroundObjectsLayers_2('./img/5_background/layers/2_second_layer/1.png', 719 * 2),
            new backgroundObjectsLayers_2('./img/5_background/layers/2_second_layer/2.png', 719 * 3),
            new backgroundObjectsLayers_2('./img/5_background/layers/2_second_layer/1.png', 719 * 4),
            new backgroundObjectsLayers_2('./img/5_background/layers/2_second_layer/2.png', 719 * 5),
            new backgroundObjectsLayers_2('./img/5_background/layers/2_second_layer/1.png', 719 * 6),
            new backgroundObjectsLayers_2('./img/5_background/layers/2_second_layer/2.png', 719 * 7),
            new backgroundObjectsLayers_2('./img/5_background/layers/2_second_layer/1.png', 719 * 8)
        ],
        [
            new backgroundObjectsLayers_3('./img/5_background/layers/3_third_layer/2.png', -719),
            new backgroundObjectsLayers_3('./img/5_background/layers/3_third_layer/1.png', 0),
            new backgroundObjectsLayers_3('./img/5_background/layers/3_third_layer/2.png', 719),
            new backgroundObjectsLayers_3('./img/5_background/layers/3_third_layer/1.png', 719 * 2),
            new backgroundObjectsLayers_3('./img/5_background/layers/3_third_layer/2.png', 719 * 3),
            new backgroundObjectsLayers_3('./img/5_background/layers/3_third_layer/1.png', 719 * 4),
            new backgroundObjectsLayers_3('./img/5_background/layers/3_third_layer/2.png', 719 * 5),
            new backgroundObjectsLayers_3('./img/5_background/layers/3_third_layer/1.png', 719 * 6),
            new backgroundObjectsLayers_3('./img/5_background/layers/3_third_layer/2.png', 719 * 7),
            new backgroundObjectsLayers_3('./img/5_background/layers/3_third_layer/1.png', 719 * 8),
            new backgroundObjectsLayers_3('./img/5_background/layers/3_third_layer/2.png', 719 * 9)
        ],
        [
            new Coins(1420, 70),
            new Coins(1450, 70),
            new Coins(1250, 70),
            new Coins(1285, 70)
        ],
        [
            new Bottle(1200, 160),
            new Bottle(1250, 160),
            new Bottle(1300, 160),
            new Bottle(1350, 160),
            new Bottle(1400, 160)
        ],
        [
            // new Sombrero(600, 150)
        ],
        [
            new Frog()
        ],
        [
            new TreeTrunk()
        ],
        [
            new StoreFirst('./img/13_store/store.png', 1200),
            new StoreFirst('./img/13_store/store2.png', 800)
        ],
        [
            new StoreFirstBar()
        ],
        [
            new Store2Bar()
        ],
        [
            new Barrel(1650, 365),
            new Barrel(1650, 310),//980-310
            new Barrel(1750, 365)
        ]
    );

};