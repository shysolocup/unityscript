const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);
const util = require('util');


class OcclusionBakeSettings {
    constructor(settings) {
        this.extend(this.parent.BaseType, settings);
    }
}


OUT.push("OcclusionBakeSettings", aepl.init("OcclusionBakeSettings", OcclusionBakeSettings));
module.exports = OUT.pour();
