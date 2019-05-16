import Phaser from 'phaser';

import { BootScene } from './game/boot.scene';
import {TileMapPhysicsScene} from './game/tilemap.scene';

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

var config3: Phaser.Types.Core.GameConfig = {
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
    new TileMapPhysicsScene()
  ]

};

var game3 = new Phaser.Game(config3);



