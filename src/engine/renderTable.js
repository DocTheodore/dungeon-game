export class RenderTable {
    constructor() {
        this.items = [];
        this.requireSorting = false;
    }

    add(renderable, layer) {
        if (this.items.some(i => i.renderable === renderable)) return;
        
        this.items.push({renderable, layer});
        this.requireSorting = true;
    }

    remove(renderable) {
        const index = this.items.findIndex(i => i.renderable === renderable);

        if (index !== -1) this.items.splice(index, 1);
    }

    render(ctx) {
        if (this.requireSorting) {
            this.items.sort((a, b) => a.layer - b.layer);
            this.requireSorting = false;
        }

        for (const item of this.items) item.renderable.render(ctx);
    }

    setLayer(renderable, layer) {
        const item = this.items.find(i => i.renderable !== renderable);
        if(!item) return;

        item.layer = layer;
        this.requireSorting = true;
    }
}