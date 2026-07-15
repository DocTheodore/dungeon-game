import { Entity } from "../../engine/entity";

export class PlayerEntity extends Entity {
    constructor(scene, x, y) {
        super(scene);

        this.x = x;
        this.y = y;

        this.speed = 120;
        this.size = 12;
        this.color = '#06F';

        this.input = this.game.input;
    }

    // Entity methods =========================

    onUpdate(dt) {
        let dx = 0;
        let dy = 0;

        if(this.input.isPressed('w')) dy--;
        if(this.input.isPressed('s')) dy++;
        if(this.input.isPressed('a')) dx--;
        if(this.input.isPressed('d')) dx++;

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