import Phaser from 'phaser';
import WebFontFile from './WebFontLoader';
import { GameBackground, GameOver } from '../consts/SceneKeys';
import * as Colors from '../consts/Colors';

const GameState = {
    PAUSED: 'PAUSED',
    RUNNING: 'RUNNING',
    PLAYER_WON: 'PLAYER_WON',
    COMPUTER_WON: 'COMPUTER_WON',
}

class Game extends Phaser.Scene{
    init(){
        this.GameState = GameState.RUNNING;
        //ball velocity inial value
        this.paddleRightVelocity = new Phaser.Math.Vector2(0,0);
        //score inial value
        this.scoreLeft = 0;
        this.scoreRight = 0;
        this.paused = false;
    }
    preload(){
        //load font before game starts
        const fonts = new WebFontFile(this.load, 'Press Start 2P');
        this.load.addFile(fonts);
    }
    create(){
        //background
        this.scene.run(GameBackground);

        this.physics.world.setBounds(-200, 0, 1800, 700);

        //ball
        this.ball = 
        this.add.circle(750, 350, 20, Colors.white,  1);
        this.physics.add.existing(this.ball);
        this.ball.body.setCircle(20);
        this.ball.body.setBounce(1,1);

        this.ball.body.setCollideWorldBounds(true,1, 1);

        //left paddle - player
        this.paddleLeft = this.add.rectangle(50, 350, 35, 150, Colors.white);
        this.physics.add.existing(this.paddleLeft, true);
        this.physics.add.collider(this.ball, this.paddleLeft);

        //right paddle - computer
        this.paddleRight= this.add.rectangle(1450, 250, 35, 150, Colors.white, 1);
        this.physics.add.existing(this.paddleRight, true);
        this.physics.add.collider(this.ball, this.paddleRight);

        //score mechanics
        const scoreStyle = {
            fontSize: 48,
            color: '#ffffff',
            fontFamily: '"Press Start 2P"'
        }
        this.scoreLeftText = this.add.text(650, 100, '0', scoreStyle)
        .setOrigin(0.5, 0.5);
        this.scoreRightText = this.add.text(850, 100, '0', scoreStyle)
        .setOrigin(0.5, 0.5);

        //keyboard controls allowed for player
        this.cursors = this.input.keyboard.createCursorKeys() 

        //ball positioned at center of screen
        this.time.delayedCall(1200, () => {
            this.resetBall();
        });
    }

    update(){
        if (this.paused || this.GameState !== GameState.RUNNING) {
            return;
        }
        this.handlePlayerMovement();
        this.handleComputerMovement();
        this.updateScore();    
        
    }

    handlePlayerMovement(){
        //player movement
        if(this.cursors.up.isDown){
            this.paddleLeft.y -= 15;     
            this.paddleLeft.body.updateFromGameObject();  
        }
        else if(this.cursors.down.isDown){
            this.paddleLeft.y += 15;     
            this.paddleLeft.body.updateFromGameObject();  
        } 
    }

    handleComputerMovement(){
        //computer movement
        const CodedSpeed = 3.5;
        const diff = this.ball.y - this.paddleRight.y;
        if (Math.abs(diff) < 10) {
            return;
        }   
        if(diff<0){
            //ball is above paddle  
            this.paddleRightVelocity.y = -CodedSpeed;
            if (this.paddleRightVelocity.y < -10) {
                this.paddleRightVelocity.y = -10;
            }
        }
        else if(diff>0){
            //ball is below paddle
            this.paddleRightVelocity.y = CodedSpeed;
            if (this.paddleRightVelocity.y > 10) {
                this.paddleRightVelocity.y = 10;
            }
        }
        this.paddleRight.y += this.paddleRightVelocity.y;
        this.paddleRight.body.updateFromGameObject();

    }

    updateScore(){
        //ball movement and scoring
        const x = this.ball.x;
        const leftBounds = -30;
        const rightBounds = 1500;
        if (x >= leftBounds && x <= rightBounds) {
            return;        }
        if(this.ball.x < -30){
            //scored on left side
            this.updateComputerScore();
            }
            else if (this.ball.x > 1500){
            //scored on right side
            this.updatePlayerScore();
            }

            const maxScore = 5;
            if(this.scoreLeft >= maxScore){
                this.GameState = GameState.PLAYER_WON;
                // this.paused = true;
            }
            else if (this.scoreRight >= maxScore){
                this.GameState = GameState.COMPUTER_WON;
                // this.paused = true;
            }
            if(this.GameState === GameState.RUNNING){
                this.resetBall();
            }
            else{
                this.ball.active = false;
                this.physics.world.remove(this.ball.body);
                this.scene.stop(GameBackground);
                this.scene.run(GameOver, {
                    scoreLeft: this.scoreLeft,
                    scoreRight: this.scoreRight
                });
            }
    }

    updatePlayerScore(){
        this.scoreLeft++;
        this.scoreLeftText.text = this.scoreLeft;
    }

    updateComputerScore(){
        this.scoreRight++;
        this.scoreRightText.text = this.scoreRight;
    }

    resetBall(){
        //reset ball position and velocity
        this.ball.setPosition(750, 350);
        const angle = Phaser.Math.Between(0, 360);
        const vec = this.physics.velocityFromAngle(angle, 700);
        this.ball.body.setVelocity(vec.x, vec.y);
    }

}
    
export default Game;
