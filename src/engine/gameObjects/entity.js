import { GameObject } from "./_gameObject";

export class Entity extends GameObject {
    constructor(scene) {
        super();

        this.scene = scene;
        this.game = this.scene.game;
        
        this.transform = null;
        this.components = [];
    }

    end() {
        this.components.length = 0;
        super.end();
    }

    update(dt) {
        super.update(dt);

        for (const component of this.components) {
            component.update(dt);
        }
    }

    lateUpdate(dt) {
        super.lateUpdate(dt);

        for (const component of this.components) {
            component.lateUpdate(dt);
        }
    }

    render(ctx) {
        super.render(ctx);

        for (const component of this.components) {
            component.render(ctx);
        }
    }
}