import { GameObject } from "./_gameObject";

export class System extends GameObject {
    constructor(scene) {
        super();

        this.scene = scene;
        this.game = this.scene.game;
        this.order = 0;
    }
} 