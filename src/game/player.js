import { Entity } from "../engine/entity";
import { keys } from "../engine/inputHandler";

export class PlayerEntity extends Entity {
    constructor(x, y) {
        super(x, y);

        this.speed = 120;
        this.size = 12;
        this.color = '#06F';
    }

    update(dt) {
        if(keys['w']) {
            this.y -= this.speed * dt;
        }
        if(keys['s']) {
            this.y += this.speed * dt;
        }
        if(keys['a']) {
            this.x -= this.speed * dt;
        }
        if(keys['d']) {
            this.x += this.speed * dt;
        }
    }

    render(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(
            this.x,
            this.y,
            this.size,
            this.size
        );
    }
}