import Phaser from 'phaser';
import * as Colors from '../consts/Colors';

class GameBackground extends Phaser.Scene{
    preload(){  
    }
    create(){
        this.add.line(400, 250, 0, 0, 0, 500, Colors.white, 1)
        .setLineWidth(5, 5);
        this.add.circle(400, 250, 50)
        .setStrokeStyle(5, Colors.white);
    }
}
export default GameBackground;