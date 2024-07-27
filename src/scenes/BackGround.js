import Phaser from 'phaser';
import * as SceneKeys from '../consts/SceneKeys';

class BackGround extends Phaser.Scene {
    constructor() {
        super(SceneKeys.BackGround);
    }

    preload() {
        this.load.image('background', 'assets/background.jpg'); 
    }

    create() {
        this.add.image(750, 350, 'background').setOrigin(0.5, 0.5).setAlpha(0.5);;
    }
}

export default BackGround;
