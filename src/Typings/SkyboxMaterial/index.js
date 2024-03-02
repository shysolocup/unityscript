const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);
const util = require('util');


class SkyboxMaterial {
    constructor(settings, baseSettings) {
        Object.assign(this, baseSettings);
        util.inherits(this.constructor, baseSettings.constructor);
        
        this.texture = this.__getSetting("fileID", settings);
        this.guid = this.__getSetting("guid", settings, { keepAsString: true });
        this.type = this.__getSetting("type", settings);
    }
}


OUT.push("SkyboxMaterial", aepl.init("SkyboxMaterial", SkyboxMaterial));
module.exports = OUT.pour();
