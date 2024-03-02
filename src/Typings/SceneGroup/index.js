const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);


class SceneGroup extends Soup {
    constructor() {
        super(Object);
    }

    create(name, properties) {
        
    }
}


OUT.push("SceneGroup", aepl.init("SceneGroup", SceneGroup));
module.exports = OUT.pour();
