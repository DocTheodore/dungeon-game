export class Scene {
  #requireSorting = false;
  #requireRemoval = false;

  constructor(game) {
    this.game = game;
    this.entities = [];
    this.camera = new Camera();
  }

  start() {
    this.active = true;
  }

  end() {
    this.active = false;
  }

  update(dt) {
    if (!this.active) return;

    for(const entity of this.entities) 
      entity.update(dt);

    for(const entity of this.entities) 
      entity.lateUpdate(dt);

    this.camera.update(dt);

    if(this.#requireRemoval) {
      this.entities = this.entities.filter((en) => !en.removed);
      this.#requireRemoval = false;
    }
  }

  render(ctx) {
    if (!this.active) return;

    if(this.#requireSorting) {
      this.entities.sort((en1, en2) => en2.layer - en1.layer);
      this.#requireSorting = false;
    }

    ctx.save();
    this.camera.apply(ctx);

    for(const entity of this.entities) {
      entity.render(ctx);
    }

    ctx.restore();

    /* Futura UI */
  }

  addEntity(EntityClass, ...args) {
    const entity = new EntityClass(this, ...args);

    this.entities.push(entity);
    entity.init();

    this.#requireSorting = true;

    return entity;
  }

  enableEntity(entity) {
    entity.active = true;
  }

  disableEntity(entity) {
    entity.active = false;
  }

  removeEntity(entity) {
    this.disableEntity(entity);
    entity.removed = true;

    this.#requireRemoval = true;
  }
}