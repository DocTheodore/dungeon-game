export class EventManager {
    #events;

    constructor() {
        this.#events = new Map();
    }

    on(event, callback) {
        if(!this.#events.has(event))
            this.#events.set(event, []);

        this.#events.get(event).push(callback);
    }

    off(event, callback) {
        const callbacks = this.#events.get(event);

        if (!callbacks) return;

        const index = callbacks.indexOf(callback);

        if (index !== -1)
            callbacks.splice(index, 1);

        if (callbacks.length === 0)
            this.#events.delete(event);
    }

    emit(event, ...args) {
        const callbacks = this.#events.get(event);

        if (!callbacks) return;

        for(const callback of [...callbacks]) {
            callback(...args);
        }
    }

    once(event, callback) {
        const wrapper = (...args) => {
            this.off(event, wrapper);
            callback(...args);
        };

        this.on(event, wrapper);
    }

    clear() {
        this.#events.clear();
    }
} 