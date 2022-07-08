let level1;

// function initLevel() {

    level1 = new Level(
        [
            new Fence('./img/5_background/fence.png', -650),
            new Chiken(),
            new Chiken(),
            new Chiken(),
            new EndBoss()
        ],
        [
            new Cloud()
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
            new BackgroundObject('./img/5_background/layers/1_first_layer/1.png', 719 * 2)
        ],
        [
            new Coins(0,100),
            new Coins(300,100),
            new Coins(400,100),
            new Coins(500,100),
            new Coins(600,100)
        ],
        [
            new Bottle(0,380),
            new Bottle(300,380),
            new Bottle(400,380),
            new Bottle(500,380),
            new Bottle(600,380)
        ]
    );

// };