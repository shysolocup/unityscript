const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);
const util = require('util');


class OcclusionBakeSettings {
    constructor(settings) {
        this.parent.__formSettings(this, settings.__value);
    }
}


OUT.push("OcclusionBakeSettings", aepl.init("OcclusionBakeSettings", OcclusionBakeSettings));
module.exports = OUT.pour();
