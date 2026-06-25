export class Scene {
  constructor() {
    this.entities = [];
    this.backgroundColor = '#000';
    this.active = false;
  }

  start() {
    this.active = true;
  }

  update(dt) {
    for(const entity of this.entities) {
      entity.update(dt);
    }
  }

  render(ctx) {
    this.background(ctx);
    for(const entity of this.entities) {
      entity.render(ctx);
    }
  }

  addEntity(entity) {
    this.entities.push(entity);
  }

  background(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  }


}