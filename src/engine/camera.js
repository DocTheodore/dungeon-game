export class Camera {
    constructor(scene) {
        this.scene = scene;
        this.game = this.scene.game;

        this.x = 0;
        this.y = 0;
        this.speed = 5;
        this.target = null;
    }

    follow(target={ x: 0, y: 0 }) {
        this.target = target;
    }

    setPosition(target={ x: 0, y: 0 }) {
        this.target = null;
        this.x = target.x;
        this.y = target.y;
    }

    update(dt) {
        if (!this.target) return;

        const targetX = this.target.x - (this.game.canvas.width / 2);
        const targetY = this.target.y - (this.game.canvas.height / 2);

        this.x += (targetX - this.x) * this.speed * dt;
        this.y += (targetY - this.y) * this.speed * dt;
    }

    apply(ctx) {
        ctx.translate(
            -this.x | 0,
            -this.y | 0
        );
    }
}