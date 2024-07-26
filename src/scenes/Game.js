import Phaser from 'phaser';
import WebFontFile from './WebFontLoader';
import { GameBackground } from '../consts/SceneKeys';
import * as Colors from '../consts/Colors';

class Game extends Phaser.Scene{
    init(){
        //ball velocity inial value
        this.paddleRightVelocity = new Phaser.Math.Vector2(0,0);
        //score inial value
        this.scoreLeft = 0;
        this.scoreRight = 0;
    }
    preload(){
        //load font before game starts
        const fonts = new WebFontFile(this.load, 'Press Start 2P');
        this.load.addFile(fonts);
    }
    create(){
        //background
        this.scene.run(GameBackground);

        this.physics.world.setBounds(-100, 0, 1000, 500);

        //ball
        this.ball = 
        this.add.circle(400, 250, 10, Colors.white,  1);
        this.physics.add.existing(this.ball);
        this.ball.body.setBounce(1,1);

        this.ball.body.setCollideWorldBounds(true,1, 1);
        this.resetBall();

        //left paddle - player
        this.paddleLeft = this.add.rectangle(50, 250, 30, 100, Colors.white);
        this.physics.add.existing(this.paddleLeft, true);
        this.physics.add.collider(this.ball, this.paddleLeft);

        //right paddle - computer
        this.paddleRight= this.add.rectangle(750, 250, 30, 100, Colors.white, 1);
        this.physics.add.existing(this.paddleRight, true);
        this.physics.add.collider(this.ball, this.paddleRight);

        //score mechanics
        const scoreStyle = {
            fontSize: 48,
            color: '#ffffff',
            fontFamily: '"Press Start 2P"'
        }
        this.scoreLeftText = this.add.text(300, 50, '0', scoreStyle)
        .setOrigin(0.5, 0.5);
        this.scoreRightText = this.add.text(500, 50, '0', scoreStyle)
        .setOrigin(0.5, 0.5);

        //keyboard controls allowed for player
        this.cursors = this.input.keyboard.createCursorKeys() 
    }

    update(){
        this.handlePlayerMovement();
        this.handleComputerMovement();
        this.updateScore();    
        
    }

    handlePlayerMovement(){
        //player movement
        if(this.cursors.up.isDown){
            this.paddleLeft.y -= 10;     
            this.paddleLeft.body.updateFromGameObject();  
        }
        else if(this.cursors.down.isDown){
            this.paddleLeft.y += 10;     
            this.paddleLeft.body.updateFromGameObject();  
        } 
    }

    handleComputerMovement(){
        //computer movement
        const CodedSpeed = 5;
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
        if(this.ball.x < -30){
            //scored on left side
            this.resetBall();
            this.updateComputerScore();
            }
            else if (this.ball.x > 830){
            //scored on right side
            this.resetBall();
            this.updatePlayerScore();
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
        this.ball.setPosition(400, 250);
        const angle = Phaser.Math.Between(0, 360);
        const vec = this.physics.velocityFromAngle(angle, 300);
        this.ball.body.setVelocity(vec.x, vec.y);
    }

}
    
export default Game;
