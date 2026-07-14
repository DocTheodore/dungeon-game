import { Camera } from "./camera";

export class Scene {
  #requireSorting = false;
  #requireRemoval = false;

  constructor(game) {
    this.game = game;
    this.entities = [];
    this.camera = new Camera(this);
  }

  start() {
    if (this.active) return;

    this.active = true;
    this.onStart();
  }

  end() {
    if (!this.active) return;

    this.active = false;
    this.onEnd();
    this.entities.length = 0;
  }

  update(dt) {
    if (!this.active) return;

    /* Update */
    this.onUpdate(dt);

    for(const entity of this.entities) 
      entity.update(dt);

    this.camera.update(dt);

    /* Late update */
    this.onLateUpdate(dt);

    for(const entity of this.entities) 
      entity.lateUpdate(dt);

    // Remoção de entidades deletadas
    if(this.#requireRemoval) {
      this.entities = this.entities.filter((en) => !en.removed);
      this.#requireRemoval = false;
    }
  }

  render(ctx) {
    if (!this.active) return;

    // Ordenação de layers
    if(this.#requireSorting) {
      this.entities.sort((en1, en2) => en1.layer - en2.layer);
      this.#requireSorting = false;
    }

    /* Render em mapa */
    ctx.save(); // =====================
    
    this.camera.apply(ctx);
    this.onRenderWorld(ctx);

    for(const entity of this.entities) {
      entity.render(ctx);
    }

    ctx.restore(); // ==================

    /* Render em UI */
    ctx.save(); // =====================

    this.onRenderUI(ctx);

    // for(const ui of this.uiList) { ... }
    ctx.restore(); // ==================
  }

  /*** Abstract ***/
  onStart() { } 
  onEnd(){ } 
  onUpdate(){ } 
  onLateUpdate(){ } 
  onRenderWorld(){ } 
  onRenderUI(){ } 

  // Metodos de entidade
  addEntity(EntityClass, ...args) {
    const entity = new EntityClass(this, ...args);

    this.entities.push(entity);
    entity.init();

    this.#requireSorting = true;

    return entity;
  }

  findEntity(EntityClass) {
    return this.entities.find(
      e => e instanceof EntityClass
    );
  }

  findAllEntities(EntityClass) {
    return this.entities.filter(
      e => e instanceof EntityClass
    );
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