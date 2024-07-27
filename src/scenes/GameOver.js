import Phaser from 'phaser';

class GameOver extends Phaser.Scene {
    constructor() {
        super('game-over');
    }

    create(data) {
        const { width, height } = this.scale;

        this.add.text(width * 0.5, height * 0.5, 'Game Over', {
            fontSize: '48px',
            fontFamily: '"Press Start 2P"',
            color: '#ffffff' 
        }).setOrigin(0.5);

        if(data.scoreLeft > data.scoreRight) {
            this.add.text(width * 0.5, height * 0.4, 'You Win!', {
                fontSize: '24px',
                fontFamily: '"Press Start 2P"',
                color: '#ffffff'
            }).setOrigin(0.5);
        }
        else {
            this.add.text(width * 0.5, height * 0.4, 'You Lose!', {
                fontSize: '24px',
                fontFamily: '"Press Start 2P"',
                color: '#ffffff'
            }).setOrigin(0.5);
        }

        this.add.text(width * 0.5, height * 0.6, 'Press SPACE to restart', {
            fontSize: '24px',
            fontFamily: '"Press Start 2P"',
            color: '#ffffff'
        }).setOrigin(0.5);

        this.input.keyboard.once('keydown-SPACE', () => {
            // this.sound.play(AudioKeys.PongBeep);
            this.scene.start(SceneKeys.Game);
        });
    }
}
export default GameOver;