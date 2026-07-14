import { Scene } from "../../engine/scene";
import { EnemyEntity } from "../entities/enemy";
import { PlayerEntity } from "../entities/player";

export class Test01 extends Scene {

    constructor(game) {
        super(game);
    }

    onStart() {
        const p1 = this.addEntity(PlayerEntity, 10, 10);
        const e1 = this.addEntity(EnemyEntity, 100, 100);

        this.camera.follow(p1);
    }
}