export class BootScene extends Phaser.Scene {
  textObj: Phaser.GameObjects.Text;
  rectangle: Phaser.GameObjects.Rectangle;
  timeScaleText; any;

  constructor(private text: string) {
    super('boot');
  }

  create() {
    this.textObj = this.add.text(50, 0, this.text);
    this.timeScaleText = this.add.text(5, 5, ['timescale: ' + this.physics.world.timeScale.toString(), 'toggle with p'])

    this.physics.world.enable(this.textObj);

    const textBody: Phaser.Physics.Arcade.Body = this.textObj.body as any;
    textBody.setCollideWorldBounds(true, 1, 1);

    this.physics.world.timeScale = 1;

    this.input.keyboard.on('keyup', event => {
      if (event.key === 'p') {
        this.physics.world.timeScale = this.physics.world.timeScale === 1 ? 2 : 1;
        this.timeScaleText.setText('timescale: ' + this.physics.world.timeScale.toString());
      }
    })

    // this.rectangle = this.add.rectangle()
  }

  update(): void {
    

    if (this.textObj.y > 250 ) {
      const textBody: Phaser.Physics.Arcade.Body = this.textObj.body as any;
      textBody.setVelocityY(0);
      this.textObj.y = 0;
    }
  }

}
