const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);


class SceneChildGroup extends Soup {
    constructor() {
        super(Object);
    }

    create(name, properties) {
        
    }
}


OUT.push("SceneChildGroup", aepl.init("SceneChildGroup", SceneChildGroup));
module.exports = OUT.pour();
