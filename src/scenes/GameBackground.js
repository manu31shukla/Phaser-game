import Phaser from 'phaser';
import * as Colors from '../consts/Colors';

class GameBackground extends Phaser.Scene{
    preload(){  
    }
    create(){
        this.add.line(750, 350, 0, 0, 0, 700, Colors.white, 1)
        .setLineWidth(5, 5);
        this.add.circle(750, 350, 100)
        .setStrokeStyle(5, Colors.white);
    }
}
export default GameBackground;