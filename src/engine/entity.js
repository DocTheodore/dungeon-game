export class Entity {
  constructor(scene) {
    this.scene = scene;
    this.game = this.scene.game;
    this.components = [];
    
    this.layer = 0;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;

    this.#requireRemoval = false;
  }

  // Start ====================
  
  init() { 
    this.active = true;
    this.onInit();
  }

  // Update ===================

  update(dt) {
    if (!this.active) return;

    this.onUpdate(dt);
    for(const component of this.components) {
      component.update(dt);
    };
  }

  // Late update ==============

  lateUpdate(dt) {
    if (!this.active) return;

    this.onLateUpdate(dt);
    for(const component of this.components) {
      component.lateUpdate(dt);
    };

    if(this.#requireRemoval) {
      this.components = this.components.filter((en) => !en.removed);
      this.#requireRemoval = false;
    }
  }

  // Render ===================

  render(ctx) {
    if (!this.active) return;

    this.onRender(ctx);
    for(const component of this.components) {
      component.render(ctx);
    };
  }

  onInit() {} /* Abstract */
  onUpdate(dt) {} /* Abstract */
  onLateUpdate(dt) {} /* Abstract */
  onRender(ctx) {} /* Abstract */

  // Standard Methods =========

  destroy() {
    this.scene.removeEntity(this);
  }

  addComponent(ComponentClass, ...args) {
    const component = new ComponentClass(this, ...args);

    this.components.push(component);
    component.init();

    return component;
  }

  removeComponent(component) {
    this.disableComponent(component);
    component.removed = true;

    this.#requireRemoval = true;
  }

  findComponent(ComponentClass) {
    return this.components.find(
      e => e instanceof ComponentClass
    );
  }

  findAllComponents(ComponentClass) {
    return this.components.filter(
      e => e instanceof ComponentClass
    );
  }

  enableComponent(component) {
    component.active = true;
  }

  disableComponent(component) {
    component.active = false;
  }
}