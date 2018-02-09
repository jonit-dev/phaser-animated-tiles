var config = {
    type: Phaser.WEBGL,
    width: 320,
    height: 160,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var map, map2, tileset, layer1, layer2, map2layer;
var game = new Phaser.Game(config);

function preload ()
{
    this.load.tilemapTiledJSON('map', './map.json');
    this.load.tilemapTiledJSON('map2', './map2.json');
    this.load.image('tiles', './tiles.png');
    this.load.image('super-mario-16bit', './super-mario-16bit.png');
    this.load.plugin('AnimatedTiles', '../dist/AnimatedTiles.js');
}

function create ()
{
    this.sys.install('AnimatedTiles');
    map = this.make.tilemap({ key: 'map' });
    tileset = map.addTilesetImage('tiles', 'tiles');
    tileset2 = map.addTilesetImage('super-mario-16bit', 'super-mario-16bit');
    layer1 = map.createDynamicLayer('ground', tileset, 0, 0);
    layer2 = map.createDynamicLayer('aboveGround', tileset, 0, 0);
    layer3 = map.createDynamicLayer('another', tileset2, 0, 0); // Just to test multiple tilesets
    this.sys.animatedTiles.init(map);
    map2 = this.make.tilemap({ key: 'map2' });
    map2layer = map2.createDynamicLayer('ground', tileset, 160, 0);
    this.sys.animatedTiles.init(map2);
    window.startGui(this.sys.animatedTiles);
}

function update ()
{    
}
