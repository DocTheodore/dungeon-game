export class Entity {
  constructor(scene) {
    this.scene = scene;
    this.active = true;
    
    this.layer = 0;
    this.x = 0;
    this.y = 0;
  }

  update(dt) {
    if(!this.active) return;

    this.onUpdate(dt);
  }

  render(ctx) {
    if(!this.active) return;

    this.onRender(ctx);
  }
}