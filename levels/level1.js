// let level1;

function initLevel() {

    return new Level(
        [
            new Chiken(4600),
            new Chiken(4100),
            new Chiken(3700),
            new Chiken(3500),
            new Chiken(3200),
            new Chiken(2800),
            new Chiken(2600),
            new Chiken(2000),
            new Chiken(1800),
            new Chiken(1500),
            new Chiken(1100),
            new Chiken(800),
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
            new Coins(1285, 70),
            new Coins(930, 125),
            new Coins(900, 125),
            new Coins(870, 125),
            new Coins(1045, 125),
            new Coins(1075, 125),
            new Coins(1105, 125)
        ],
        [
            new Bottle(1200, 160, 20),
            new Bottle(1250, 160, 20),
            new Bottle(1300, 160, 10),
            new Bottle(1350, 160, 10),
            new Bottle(1400, 160, 20),

            new Bottle(2400, 400, 20),
            new Bottle(2460, 400, 10),
            new Bottle(2500, 410, 20),
        ],
        [
            new Sombrero(5033, 150),
            new Sombrero(4314, 150),
            new Sombrero(3595, 150),
            new Sombrero(2876, 150),
            new Sombrero(2157, 150),
            new Sombrero(1438, 150),
            new Sombrero(719, 150)
        ],
        [
            new Frog()
        ],
        [
            new TreeTrunk()
        ],
        [
            new StoreFirst('./img/13_store/store.png', 1200),
            new StoreFirst('./img/13_store/store2.png', 800),
            new StoreFirst('./img/13_store/nest.png', 4600)
        ],
        [
            new StoreFirstBar()
        ],
        [
            new Store2Bar()
        ],
        [
            new Barrel(1650, 365),
            new Barrel(1650, 310),
            new Barrel(1750, 365),
            new Barrel(650, 365),
            new Barrel(645, 305),
            new Barrel(700, 360),
            new Barrel(700, 310)
        ],
        [
            new WoodenBox(700, 255),
            new WoodenBox(645, 250)
        ]
    );

};