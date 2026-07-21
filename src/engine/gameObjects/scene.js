import { GameObject } from "./_gameObject";

export class Scene extends GameObject {
    constructor(game) {
        super();

        this.game = game;
        
        this.entities = [];
        this.systems = [];
    }

}