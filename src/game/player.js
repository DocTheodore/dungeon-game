import { Entity } from "../engine/entity";

export class PlayerEntity extends Entity {
    constructor(x, y, input) {
        super(x, y);

        this.speed = 120;
        this.size = 12;
        this.color = '#06F';
        this.input = input;
    }

    onUpdate(dt) {
        if(this.input.pressed['w']) {
            this.y -= this.speed * dt;
        }
        if(this.input.pressed['s']) {
            this.y += this.speed * dt;
        }
        if(this.input.pressed['a']) {
            this.x -= this.speed * dt;
        }
        if(this.input.pressed['d']) {
            this.x += this.speed * dt;
        }
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
}