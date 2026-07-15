import { Scene } from "../../engine/scene";
import { TileMap } from "../../engine/tileMap";
import { EnemyEntity } from "../entities/enemy";
import { PlayerEntity } from "../entities/player";

const map = {
    width: 5,
    height: 3,
    tiles: [
        [0, 1, 1, 1, 1],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1],
    ],
}
export class Test01 extends Scene {
    

    constructor(game) {
        super(game);
        this.map = map;
    }

    onStart() {
        const p1 = this.addEntity(PlayerEntity, 10, 10);
        const e1 = this.addEntity(EnemyEntity, 100, 100);
        this.tileMap = new TileMap(this);

        this.camera.follow(p1);
    }

    onUpdate() {
                
        if(this.game.input.isClicked('p')) {
            const player = this.findEntity(PlayerEntity);

            if(!this.camera.target) {
                this.camera.follow(player);
            } else {
                this.camera.setPosition({x: 0, y: 0});
            }
        }
    }
}