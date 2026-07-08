import { Game } from "./engine/game";
import { Scene } from "./engine/scene";

const canva = document.getElementById('game-screen');
const gameSystem = new Game(canva);

gameSystem.start();