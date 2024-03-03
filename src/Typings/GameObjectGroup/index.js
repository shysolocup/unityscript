const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);


class GameObjectGroup extends Soup {
    constructor() {
        super(Object);
    }

    create(name, properties) {
        
    }

    sift(callback) {
        for (let [k, obj] of this) {
            if (callback(obj)) return obj;
        }
    }
}


OUT.push("GameObjectGroup", aepl.init("GameObjectGroup", GameObjectGroup));
module.exports = OUT.pour();
