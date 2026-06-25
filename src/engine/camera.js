class Camera {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.speed = 5;
        this.target = null;
    }

    follow(entity) {
        this.target = entity;
    }

    update(dt) {
        if (!this.target) return;

        this.x += (this.target.x - this.x) * this.speed * dt;
        this.y += (this.target.y - this.y) * this.speed * dt;
    }

    apply(ctx) {
        ctx.translate(
            -this.x | 0,
            -this.y | 0
        );
    }
}