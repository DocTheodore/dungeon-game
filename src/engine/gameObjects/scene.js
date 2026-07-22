import { Camera } from "../camera";
import { EventManager } from "../eventManager";
import { GameObject } from "./_gameObject";

export class Scene extends GameObject {
    #removedEntity = false;

    constructor(game) {
        super();
        this.game = game;
        
        this.entities = [];
        this.systems = [];

        this.event = new EventManager();
        this.camera = new Camera(this);
        this.renderTable = new RenderTable();
    }

    end() {
        this.entities.length = 0;
        this.systems.length = 0;
        this.event.clear();
        super.end();
    }

    update(dt) {
        super.update(dt);

        for (const entity of this.entities) entity.update(dt);
        for (const system of this.systems) system.update(dt);

        this.camera.update(dt);
    }

    lateUpdate(dt) {
        super.lateUpdate(dt);

        for (const entity of this.entities) entity.lateUpdate(dt);
        for (const system of this.systems) system.lateUpdate(dt);

        if (this.#removedEntity) {
            this.entities = this.entities.filter((en) => !en.removed);
            this.#removedEntity = false;
        }
    }

    render(ctx) {
        super.render(ctx);
        this.renderTable.render(ctx);
    }

    // Metodos de entidade ==================

    addEntity(EntityClass, ...args) {
        const entity = new EntityClass(this, ...args);

        this.entities.push(entity);
        entity.start();

        return entity;
    }

    findEntity(EntityClass) {
        return this.entities.find(
            en => en instanceof EntityClass
        );
    }

    findAllEntities(EntityClass) {
        return this.entities.filter(
            en => en instanceof EntityClass
        );
    }

    enableEntity(entity) {
        entity.active = true;
    }

    disableEntity(entity) {
        entity.active = false;
    }

    removeEntity(entity) {
        this.disableEntity(entity);

        entity.removed = true;
        entity.end();

        this.#removedEntity = true;
    }

    // Metodos de sistema ===================

    addSystem(SystemClass, order, ...args) {
        const system = new SystemClass(this, ...args);
        system.order = order;

        this.systems.push(system);
        this.systems = this.systems.sort((sys1, sys2) => sys1.order - sys2.order);
        system.start();

        return system;
    }

    disableSystem(system) {
        
    }

    removeSystem(system) {

    }
}