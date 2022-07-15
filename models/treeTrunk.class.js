class TreeTrunk extends MovableObject {

    offsetX = 5;
    offsetY = 40;
    offsetW = 10;
    offsetH = 50;

    width = 85;
    height = 200;
    y = 235;


    Images = [
        './img/12_treeTrunk/treeTrunk.png',
        './img/12_treeTrunk/treeTrunk.png'
    ];

    constructor() {
        super().loadImage(this.Images[0]);
        this.loadImages(this.Images);

        this.x = -200;
        // this.y=
        // this.animate();
    }
}