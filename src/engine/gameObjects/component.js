import { GameObject } from "./_gameObject"

export class Component extends GameObject {
    constructor(entity) {
        super();

        this.entity = entity;
        this.scene = this.entity.scene;
        this.game = this.entity.game;
    }
}