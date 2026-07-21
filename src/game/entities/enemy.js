import { Entity } from "../../engine/entity";

export class EnemyEntity extends Entity {
    constructor(scene, x, y) {
        super(scene);

        this.x = x;
        this.y = y;

        this.speed = 150;
        this.size = 12;
        this.color = '#F01';
    }

    // Entity methods =========================

    onUpdate(dt) {
        let dx = 0;
        let dy = 0;

        //if(this.game.input.pressed['arrowup']) dy--;
        //if(this.game.input.pressed['arrowdown']) dy++;
        //if(this.game.input.pressed['arrowleft']) dx--;
        //if(this.game.input.pressed['arrowright']) dx++;

        this.move(dx, dy, dt);
    }

    onRender(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(
            this.x,
            this.y,
            this.size,
            this.size
        );
    }

    // Methods ================================

    move(dx, dy, dt) {
        this.x += dx * this.speed * dt;
        this.y += dy * this.speed * dt;
    }
}