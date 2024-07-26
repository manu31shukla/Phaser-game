import Phaser from 'phaser';

class Game extends Phaser.Scene{
    preload(){

    }
    create(){
        this.ball = 
        this.add.circle(400, 250, 10, 0xffffff,  1);
        this.physics.add.existing(this.ball);
        this.ball.body.setBounce(1,1);

        this.ball.body.setCollideWorldBounds(true,1, 1);
        this.ball.body.setVelocity(Phaser.Math.Between(-200, 200), Phaser.Math.Between(-200, 200)); ;

        this.paddleLeft = this.add.rectangle(50, 250, 20, 100, 0xffffff);
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
        const diff = this.ball.y - this.paddleRight.y;
        if(diff<10){
            //ball is below paddle  
            this.paddleRight.y -= 10;
            this.paddleRight.body.updateFromGameObject();
        }
        else if(diff>10){
            //ball is above paddle
            this.paddleRight.y += 10;
            this.paddleRight.body.updateFromGameObject();
        }
    }
}
    
export default Game;
