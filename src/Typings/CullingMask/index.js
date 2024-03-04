const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);


class CullingMask {
    constructor(settings) {
        this.extend(this.parent.BaseType, settings);
    }
}


OUT.push("CullingMask", aepl.init("CullingMask", CullingMask));
module.exports = OUT.pour();
