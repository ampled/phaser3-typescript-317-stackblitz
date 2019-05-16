export class TileMapPhysicsScene extends Phaser.Scene {
  text: Phaser.GameObjects.Text;

  constructor() {
    super('tilemap');
  }

  preload(): void {
    this.load.image('mario-tiles', 'https://cdn.jsdelivr.net/gh/ampled/phaser3-typescript-317-stackblitz@master/1_nYRQLN_J6TOMcurufrT7TQ.png')
  }

  create(): void {
    this.text = this.add.text(120, 200, '144 wfps (toggle with s)');

    const level = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 2, 3, 0, 0, 0, 1, 2, 3, 0],
      [0, 5, 6, 7, 0, 0, 0, 5, 6, 7, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 14, 13, 14, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 14, 14, 14, 14, 14, 0, 0, 0, 15],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 15],
      [35, 36, 37, 0, 0, 0, 0, 0, 15, 15, 15],
      [39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39]
    ];

    // When loading from an array, make sure to specify the tileWidth and tileHeight
    const map = this.make.tilemap({ data: level, tileWidth: 16, tileHeight: 16 });
    const tiles = map.addTilesetImage("mario-tiles");
    const layer = map.createStaticLayer(0, tiles, 0, 0);

    layer.setCollision([39, 14, 13, 15])

    this.input.keyboard.on('keyup', event => {
      if (event.key === 's') {
        if (this.physics.world.fps === 60) {
          this.physics.world.setFPS(144);
        } else {
          this.physics.world.setFPS(60);;
        }
        this.text.setText(this.physics.world.fps.toString());
      }
    })

    const rect = this.add.rectangle(20, 0, 16, 16, 0xff0000);
    this.physics.world.enable(rect);
    const rectBody = rect.body as Phaser.Physics.Arcade.Body;
    rectBody.setCollideWorldBounds(true).setBounceX(1).setVelocityX(50);
    this.physics.world.addCollider(rect, layer);
  }

}