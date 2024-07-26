import Phaser from 'phaser';

class Game extends Phaser.Scene{
    preload(){

    }
    create(){
        const ball = 
        this.add.circle(400, 250, 10, 0xffffff,  1);
        this.physics.add.existing(ball);
        ball.body.setBounce(1,1);

        ball.body.setCollideWorldBounds(true,1, 1);
        ball.body.setVelocity(-200, 0);

        this.paddleLeft = this.add.rectangle(50, 250, 10, 100, 0xffffff);
        this.physics.add.existing(this.paddleLeft, true);
        // paddleLeft.body.setBounce(1,1);

        this.physics.add.collider(ball, this.paddleLeft);

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
    }
}
    
export default Game;
