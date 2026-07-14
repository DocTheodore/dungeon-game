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

        // Teste de camera
        if(this.input.isClicked('p')) {
            if(!this.scene.camera.target) {
                this.scene.camera.follow(this);
            } else {
                this.scene.camera.setPosition(0, 0);
            }
        }

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