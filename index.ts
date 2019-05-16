




import Phaser from 'phaser';

import { BootScene } from './game/boot.scene';

var config: Phaser.Types.Core.GameConfig = {
  width: 400,
  height: 240,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 500 },
      fps: 60
    }
  },
  scene: [
    new BootScene('60 world fps')
  ]

};

var game = new Phaser.Game(config);

var config2: Phaser.Types.Core.GameConfig = {
  width: 400,
  height: 240,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 500 },
      fps: 30
    }
  },
  scene: [
    new BootScene('30 world fps')
  ]

};

var game2 = new Phaser.Game(config2);

