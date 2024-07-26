import Phaser, { Scene } from 'phaser';
import * as SceneKeys from '../consts/SceneKeys';
class TitleScreen extends Phaser.Scene {

    preload() {
    }

    create() {
        const text = this.add.text(400, 150, 'Press SPACE to start', 
            { 
                fontSize: '42px', 
                fill: '#fff',
                fontFamily: '"Press Start 2P"' 
            });
        text.setOrigin(0.5, 0.5);

        this.add.text(400, 200, 'Use arrow keys to move paddle', 
            { 
                fontSize: '18px', 
                fill: '#fff',
                fontFamily: '"Press Start 2P"' 
            }).setOrigin(0.5, 0.5);

        this.add.text(400, 280, 'Rules:',
            { 
                fontSize: '18px', 
                fill: '#fff',
                fontFamily: '"Press Start 2P"' 
            }).setOrigin(0.5, 0.5);
        
        this.add.text(350, 320, '1. Hit the ball with the paddle to score points',
            { 
                fontSize: '18px', 
                fill: '#fff',
                fontFamily: '"Press Start 2P"' 
            }).setOrigin(0.5, 0.5);
        
        this.add.text(350, 340, '2. Don\'t let the ball hit the back of the screen of the paddle',
            { 
                fontSize: '18px', 
                fill: '#fff',
                fontFamily: '"Press Start 2P"' 
            }).setOrigin(0.5, 0.5); 
        
        this.add.text(350, 360, '3. The game ends when the ball hits the bottom of the screen',
            { 
                fontSize: '18px', 
                fill: '#fff',
                fontFamily: '"Press Start 2P"' 
            }).setOrigin(0.5, 0.5);

        this.input.keyboard.once('keydown-SPACE', () => {
            this.scene.start(SceneKeys.Game);
        });
    }
}

export default TitleScreen;