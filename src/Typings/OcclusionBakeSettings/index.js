const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);
const util = require('util');


class OcclusionBakeSettings {
    constructor(settings, baseSettings) {
        Object.assign(this, baseSettings);
        util.inherits(this.constructor, baseSettings.constructor);
        
        this.smallestOccluder = this.__getSetting("smallestOccluder", settings);
        this.smallestHole = this.__getSetting("smallestHole", settings);
        this.backfaceThreshold = this.__getSetting("backfaceThreshold", settings);
    }
}


OUT.push("OcclusionBakeSettings", aepl.init("OcclusionBakeSettings", OcclusionBakeSettings));
module.exports = OUT.pour();
