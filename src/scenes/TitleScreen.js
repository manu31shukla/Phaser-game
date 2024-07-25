import Phaser from 'phaser';

export default class TitleScreen extends Phaser.Scene {
    constructor() {
        super('TitleScreen');
    }

    preload() {
        this.load.image('title', 'assets/title.png');
    }

    create() {
        this.add.image(400, 250, 'title');
        this.input.on('pointerdown', () => {
            this.scene.start('Game');
        });
    }
}