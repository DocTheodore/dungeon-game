export class Scene {
  constructor(game) {
    this.game = game;
    this.entities = [];
  }

  start() {
    this.active = true;
  }

  end() {
    this.active = false;
  }

  update(dt) {
    for(const entity of this.entities) {
      entity.update(dt);
    }
  }

  render(ctx) {
    this.entities.sort((en1, en2) => en2.layer - en1.id);

    for(const entity of this.entities) {
      entity.render(ctx);
    }
  }

  addEntity(entity) {
    this.entities.push(entity);
  }

  deleteEntity(entity) {
    entity.active = false;
  }
}