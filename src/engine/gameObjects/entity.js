import { GameObject } from "./_gameObject";

export class Entity extends GameObject {
    constructor(scene) {
        super();

        this.scene = scene;
        this.game = this.scene.game;
        
        this.transform = null;
        this.components = [];
    }

    update(dt) {
        super(dt);

        for (const component of this.components) {
            component.update(dt);
        }
    }

    lateUpdate(dt) {
        super(dt);

        for (const component of this.components) {
            component.lateUpdate(dt);
        }
    }

    render(ctx) {
        super(ctx);

        for (const component of this.components) {
            component.render(ctx);
        }
    }
}