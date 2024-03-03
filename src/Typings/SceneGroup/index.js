const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);
const util = require('util');


class SceneGroup extends Soup {
    constructor() {
        super(Object);
    }

    spawn(name, properties) {
        
    }
}


OUT.push("SceneGroup", aepl.init("SceneGroup", SceneGroup));
module.exports = OUT.pour();
