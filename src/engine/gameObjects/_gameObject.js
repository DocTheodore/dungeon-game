// Classe com metodos genéricos passados para tudo que interaja com o loop

export class GameObject {
    constructor() {
        this.active = false;
        this.parent = null;
        this.children = [];
    }

    start() {
        if(this.active) return;
        this.onStart();
        this.active = true;
    }

    end() {
        if(!this.active) return;
        this.onEnd();
        this.active = false;
    }

    update(dt) {
        if(!this.active) return;
        this.onUpdate(dt);
    }
    
    lateUpdate(dt) {
        if(!this.active) return;
        this.onLateUpdate(dt);
    }

    render(ctx) {
        if (!this.active) return;
        this.onRender(ctx);
    }

    onStart() {} /* Abstract */
    onEnd() {} /* Abstract */
    onUpdate(dt) {} /* Abstract */
    onLateUpdate(dt) {} /* Abstract */
    onRender(ctx) {} /* Abstract */

    addChild(child) {
        child.parent = this;
        this.children.push(child);
    }

    removeChild(child) {
        this.children = this.children.filter(c => c !== child); 
        child.parent = null;
    }
}