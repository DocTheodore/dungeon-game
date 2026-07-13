import { Entity } from "../engine/entity";

export class PlayerEntity extends Entity {
    constructor(scene, x, y) {
        super(scene);

        this.x = x;
        this.y = y;

        this.speed = 120;
        this.size = 12;
        this.color = '#06F';
    }

    // Entity methods =========================

    onUpdate(dt) {
        let dx = 0;
        let dy = 0;

        if(this.game.input.pressed['w']) dy--;
        if(this.game.input.pressed['s']) dy++;
        if(this.game.input.pressed['a']) dx--;
        if(this.game.input.pressed['d']) dx++;

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