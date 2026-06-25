export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.canvas.width = window.innerWidth | 0;
    this.canvas.height = window.innerHeight | 0;
    this.ctx = canvas.getContext("2d");

    this.lastTime = 0;
    this.scene = null;
    this.loop = this.loop.bind(this);
  }

  setScene(scene) {
    if (this.scene) this.scene.active = false;
    this.scene = scene;
    this.scene.start();
  }

  start() {
    console.log('iniciancdo');

    window.addEventListener("resize", () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    });

    requestAnimationFrame(this.loop);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  loop(timestamp) {
    const dt = (timestamp - this.lastTime) / 1000;
    this.lastTime = timestamp;
    
    this.clear();
    
    if(this.scene?.active) {
      this.scene?.update(dt);
      this.scene?.render(this.ctx);
    }

    requestAnimationFrame(this.loop);
  }
}