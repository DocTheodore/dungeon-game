export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    this.lastTime = 0;
    this.scene = null;
  }

  setScene(scene) {
    this.scene = scene;
  }

  start() {
    requestAnimationFrame(this.loop.bind(this));
  }

  loop(timestamp) {
    const dt = (timestamp - this.lastTime) / 1000;
    this.lastTime = timestamp;

    this.scene?.update(dt);
    this.scene?.render(this.ctx);

    requestAnimationFrame(this.loop.bind(this));
  }
}