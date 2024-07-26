import Phaser from 'phaser';

class Game extends Phaser.Scene{
    init(){
        this.paddleRightVelocity = new Phaser.Math.Vector2(0,0);
    }
    preload(){

    }
    create(){
        this.physics.world.setBounds(-100, 0, 1000, 500);
        this.ball = 
        this.add.circle(400, 250, 10, 0xffffff,  1);
        this.physics.add.existing(this.ball);
        this.ball.body.setBounce(1,1);

        this.ball.body.setCollideWorldBounds(true,1, 1);
        // this.ball.body.setVelocity(Phaser.Math.Between(-200, 200), Phaser.Math.Between(-200, 200)); 

        this.resetBall();

        this.paddleLeft = this.add.rectangle(50, 250, 30, 100, 0xffffff);
        this.physics.add.existing(this.paddleLeft, true);
        // paddleLeft.body.setBounce(1,1);
        this.physics.add.collider(this.ball, this.paddleLeft);

        this.paddleRight= this.add.rectangle(750, 250, 30, 100, 0xffffff, 1);
        this.physics.add.existing(this.paddleRight, true);
        this.physics.add.collider(this.ball, this.paddleRight);

        this.cursors = this.input.keyboard.createCursorKeys() 
    }

    update(){
        if(this.cursors.up.isDown){
            this.paddleLeft.y -= 10;     
            this.paddleLeft.body.updateFromGameObject();  
        }
        else if(this.cursors.down.isDown){
            this.paddleLeft.y += 10;     
            this.paddleLeft.body.updateFromGameObject();  
        } 
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
    
        if(this.ball.x < -30){
        //scored on left side
        this.resetBall();
        }
        else if (this.ball.x > 830){
        //scored on right side
        this.resetBall();
        }
    }
    resetBall(){
        this.ball.setPosition(400, 250);
        const angle = Phaser.Math.Between(0, 360);
        const vec = this.physics.velocityFromAngle(angle, 300);
        this.ball.body.setVelocity(vec.x, vec.y);
    }

}
    
export default Game;
