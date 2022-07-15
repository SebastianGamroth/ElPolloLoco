// let level1;

function initLevel() {

    return new Level(
        [
            new Chiken(1100),
            new Chiken(900),
            new Chiken(700)
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
            new BackgroundObject('./img/5_background/layers/air.png', -719),
            new BackgroundObject('./img/5_background/layers/3_third_layer/2.png', -719),
            new BackgroundObject('./img/5_background/layers/2_second_layer/2.png', -719),
            new BackgroundObject('./img/5_background/layers/1_first_layer/2.png', -719),

            new BackgroundObject('./img/5_background/layers/air.png', 0),
            new BackgroundObject('./img/5_background/layers/3_third_layer/1.png', 0),
            new BackgroundObject('./img/5_background/layers/2_second_layer/1.png', 0),
            new BackgroundObject('./img/5_background/layers/1_first_layer/1.png', 0),

            new BackgroundObject('./img/5_background/layers/air.png', 719),
            new BackgroundObject('./img/5_background/layers/3_third_layer/2.png', 719),
            new BackgroundObject('./img/5_background/layers/2_second_layer/2.png', 719),
            new BackgroundObject('./img/5_background/layers/1_first_layer/2.png', 719),

            new BackgroundObject('./img/5_background/layers/air.png', 719 * 2),
            new BackgroundObject('./img/5_background/layers/3_third_layer/1.png', 719 * 2),
            new BackgroundObject('./img/5_background/layers/2_second_layer/1.png', 719 * 2),
            new BackgroundObject('./img/5_background/layers/1_first_layer/1.png', 719 * 2),

            new BackgroundObject('./img/5_background/layers/air.png', 719 * 3),
            new BackgroundObject('./img/5_background/layers/3_third_layer/2.png', 719 * 3),
            new BackgroundObject('./img/5_background/layers/2_second_layer/2.png', 719 * 3),
            new BackgroundObject('./img/5_background/layers/1_first_layer/2.png', 719 * 3)
        ],
        [
            new Coins(0, 100),
            new Coins(300, 100),
            new Coins(400, 100),
            new Coins(500, 100),
            new Coins(600, 100)
        ],
        [
            new Bottle(0, 380),
            new Bottle(300, 380),
            new Bottle(400, 380),
            new Bottle(500, 380),
            new Bottle(600, 380)
        ],
        [
            // new Sombrero(600, 150)
        ],
        [
            new Frog()
        ],
        [
            new TreeTrunk()
        ]
    );

};