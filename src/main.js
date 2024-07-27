import Phaser, { Physics } from 'phaser';
import TitleScreen from './scenes/TitleScreen';
import Game from './scenes/Game';
import GameBackground from './scenes/GameBackground';
import GameOver from './scenes/GameOver';
import BackGround from './scenes/BackGround';
import * as SceneKeys from './consts/SceneKeys';

const config = {
    width: 1500,
    height: 700,
    type: Phaser.AUTO,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 0},
            debug: false
        }
    }
}

const game = new Phaser.Game(config);

game.scene.add(SceneKeys.TitleScreen, TitleScreen);
game.scene.add(SceneKeys.Game, Game);
game.scene.add(SceneKeys.GameBackground, GameBackground);
game.scene.add(SceneKeys.GameOver, GameOver);
game.scene.add(SceneKeys.BackGround, BackGround);

game.scene.start(SceneKeys.BackGround);
game.scene.start(SceneKeys.TitleScreen);
