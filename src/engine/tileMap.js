/**
 * Map: {
 *  width: number,
 *  height: number,
 *  tiles: [
 *      [number],
 *  ],
 * }
 * 
 */

export class TileMap {
    #tileSize;

    constructor(scene) {
        this.scene = scene;
        this.map = this.scene.map;
        this.#tileSize = 32;
    }

    render(ctx) {
        for(let y = 0; y < this.map.height; y++) {
        for(let x = 0; x < this.map.width; x++) {
            const tile = this.map.tiles[y][x];

            switch(tile) {
                case 0: // Chão
                    ctx.fillStyle = '#222'
                    break;

                case 1: // Parede
                    ctx.fillStyle = '#AAA';
                    break;
            }

            ctx.fillRect(
                x * this.#tileSize,
                y * this.#tileSize,
                this.#tileSize,
                this.#tileSize
            );
        }
        }
    }

    getTile(tx, ty) {
        if(tx < 0 || ty < 0) return 0;
        if(tx >= this.map.width || ty >= this.map.height) return 0;

        return this.map.tiles[ty][tx];
    }

    isSolid(tx, ty) {
        return this.getTile(tx, ty) === 1;
    }
}