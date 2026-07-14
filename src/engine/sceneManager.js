export class SceneManager {
    constructor(game) {
        this.game = game;
        this.current = null;
    }

    change(scene) {
        if(this.current) this.current.end();

        this.current = scene;
        this.current.start();
    }
}