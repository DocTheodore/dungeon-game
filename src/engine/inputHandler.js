export class InputHandler {
  constructor() {
    this.pressed = {};
    this.clicked = {};
  }

  init() {
    window.addEventListener("keydown", (e) => {
      const key = e.key.toLowerCase();

      if (!this.pressed[key]) {
        this.clicked[key] = true;
      }

      this.pressed[key] = true;
    });

    window.addEventListener("keyup", (e) => {
      this.pressed[e.key.toLowerCase()] = false;
    });

    window.addEventListener("blur", (e) => {
      this.pressed = {};
      this.clicked = {};
    });
  }

  update() {
    this.clicked = {};
  }

  isPressed(key) {
    return !!this.pressed[key.toLowerCase()];
  }

  isClicked(key) {
    return !!this.clicked[key.toLowerCase()];
  }
}