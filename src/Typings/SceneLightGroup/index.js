const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);
const util = require('util');


class SceneLightGroup extends Soup {
    constructor() {
        super(Object);
    }

    create(name, properties) {
        
    }
}


OUT.push("SceneLightGroup", aepl.init("SceneLightGroup", SceneLightGroup));
module.exports = OUT.pour();
