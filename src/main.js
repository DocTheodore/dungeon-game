import { Game } from "./engine/game";
import { Scene } from "./engine/scene";
import { PlayerEntity } from "./game/player";

const canva = document.getElementById('game-screen');
const gameSystem = new Game(canva);
const sceneA = new Scene();

sceneA.addEntity(
    new PlayerEntity(10, 10)
);

gameSystem.setScene(sceneA);
gameSystem.start();