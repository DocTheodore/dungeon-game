export class Entity {
  constructor(scene) {
    this.scene = scene;
    this.game = this.scene.game;
    
    this.layer = 0;
    this.x = 0;
    this.y = 0;
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
  }

  // Late update ==============

  lateUpdate(dt) {
    if (!this.active) return;

    this.onLateUpdate(dt);
  }

  // Render ===================

  render(ctx) {
    if (!this.active) return;

    this.onRender(ctx);
  }

  onInit() {} /* Abstract */
  onUpdate(dt) {} /* Abstract */
  onLateUpdate(dt) {} /* Abstract */
  onRender(ctx) {} /* Abstract */

  // Standard Methods =========

  destroy() {
    this.scene.removeEntity(this);
  }
}