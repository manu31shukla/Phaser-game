import Phaser from 'phaser';
class TitleScreen extends Phaser.Scene {

    preload() {
    }

    create() {
        const text = this.add.text(400, 250, 'Press SPACE to start', { fontSize: '32px', fill: '#fff' });
        text.setOrigin(0.5, 0.5);
    }
}

export default TitleScreen;