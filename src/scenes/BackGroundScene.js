import Phaser from 'phaser';

class BackgroundScene extends Phaser.Scene {
    constructor() {
        super({ key: 'BackgroundScene' });
    }

    preload() {
        // Load the background image
        this.load.image('background', 'assets/background.jpg'); // Path relative to public folder
    }

    create() {
        // Add the background image
        this.add.image(400, 250, 'background').setOrigin(0.5, 0.5);
        this.cameras.main.setBackgroundColor('#000000'); // Optional: set background color for the scene
    }
}

export default BackgroundScene;
