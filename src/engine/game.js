import { Test01 } from "../game/scenes/test01";
import { EventManager } from "./eventManager";
import { InputHandler } from "./inputHandler";
import { Scene } from "./scene";
import { SceneManager } from "./sceneManager";

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.canvas.width = window.innerWidth | 0;
    this.canvas.height = window.innerHeight | 0;
    this.ctx = canvas.getContext("2d");

    this.lastTime = 0;
    this.input = new InputHandler();
    this.event = new EventManager();
    this.sceneManager = new SceneManager(this);
    this.loop = this.loop.bind(this);
  }

  start() {
    console.log('iniciancdo');

    window.addEventListener("resize", () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    });

    this.input.init();
    this.sceneManager.change(new Test01(this));

    requestAnimationFrame(this.loop);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  loop(timestamp) {
    const dt = Math.min(
        (timestamp - this.lastTime) / 1000,
        0.05
    );
    this.lastTime = timestamp;
    
    this.clear();
    
    // Update da cena atual
    const scene = this.sceneManager.current;

    if(scene?.active) {
      scene.update(dt);
      scene.render(this.ctx);
    }

    // Update dos sistemas gerais
    this.input.update();

    requestAnimationFrame(this.loop);
  }
}