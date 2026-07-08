export class InputHandler {
  constructor() {
    this.pressed = {};
    this.clicked = {};
  }

  init() {
    window.addEventListener("keydown", (e) => {
      this.pressed[e.key.toLowerCase()] = true;
      this.clicked[e.key.toLowerCase()] = true;
    });

    window.addEventListener("keyup", (e) => {
      this.pressed[e.key.toLowerCase()] = false;
    });
  }

  update(dt) {
    this.clicked = {};
  }
}