// src/scenes/BackGround.js
import Phaser from 'phaser';
import * as SceneKeys from '../consts/SceneKeys';

class BackGround extends Phaser.Scene {
    constructor() {
        super(SceneKeys.BackGround);
    }

    preload() {
        this.load.image('background', 'assets/background.png'); 
        console.log('Background image loading...');
    }

    create() {
        console.log('Creating BackGround scene...');

        const background = this.add.image(750, 350, 'background').setOrigin(0.5, 0.5);
        if (background) {
            console.log('Background image added successfully');
        } else {
            console.log('Failed to add background image');
        }
    }
}

export default BackGround;
