import Phaser, { Scene } from 'phaser';
import * as SceneKeys from '../consts/SceneKeys';
class TitleScreen extends Phaser.Scene {

    preload() {
    }

    create() {
        const { width, height } = this.scale;

        const text = this.add.text(width * 0.5, height * 0.3, 'Press SPACE to start', 
            { 
                fontSize: '42px', 
                fontFamily: '"Press Start 2P"' 
            });
        text.setOrigin(0.5, 0.5);

        this.add.text(width * 0.5, height * 0.4, 'Use arrow keys to move paddle', 
            { 
                fontSize: '18px', 
                fontFamily: '"Press Start 2P"'
            }).setOrigin(0.5, 0.5);

        this.add.text(width * 0.5, height * 0.5, 'Rules:',
            { 
                fontSize: '18px', 
                fontFamily: '"Press Start 2P"'
            }).setOrigin(0.5, 0.5);
        
        this.add.text(width * 0.5, height * 0.55, '1. Hit the ball with the paddle to score points',
            { 
                fontSize: '18px', 
                fontFamily: '"Press Start 2P"'
            }).setOrigin(0.5, 0.5);
        
        this.add.text(width * 0.5, height * 0.6, '2. Don\'t let the ball hit the back of the screen of the paddle',
            { 
                fontSize: '18px', 
                fontFamily: '"Press Start 2P"' 
            }).setOrigin(0.5, 0.5); 
        
        this.add.text(width * 0.5, height * 0.65, '3. The game ends when either the player or computer scores 5 points',
            { 
                fontSize: '18px', 
                fontFamily: '"Press Start 2P"'
            }).setOrigin(0.5, 0.5);

        this.input.keyboard.once('keydown-SPACE', () => {
            this.scene.start(SceneKeys.Game);
        });
    }
}

export default TitleScreen;