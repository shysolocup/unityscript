const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);


class GameObjectGroup extends Soup {
    constructor() {
        super(Object);
    }

    create(name, properties) {
        
    }
}


OUT.push("GameObjectGroup", aepl.init("GameObjectGroup", GameObjectGroup));
module.exports = OUT.pour();
