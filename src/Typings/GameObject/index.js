const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);

class GameObject {
    constructor(settings) {
        this.extend(this.parent.BaseType, settings);
    }
}


OUT.push("GameObject", aepl.init("GameObject", GameObject));
module.exports = OUT.pour();
