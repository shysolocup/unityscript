const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);


class ScriptGroup extends Soup {
    constructor() {
        super(Object);
    }

    create(name, properties) {
        
    }
}


OUT.push("ScriptGroup", aepl.init("ScriptGroup", ScriptGroup));
module.exports = OUT.pour();
