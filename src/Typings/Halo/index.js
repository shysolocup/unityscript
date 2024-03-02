const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);
const util = require('util');


class Halo {
    constructor(settings, baseSettings) {
        Object.assign(this, baseSettings);
        util.inherits(this.constructor, baseSettings.constructor);
        
        this.strength = this.__getSetting("m_HaloStrength", settings);

        let texture = this.__getSetting("m_HaloTexture", settings, { keepAsString: true });
        this.texture = parseInt(texture.substring(9, texture.length-1));
    }
}


OUT.push("Halo", aepl.init("Halo", Halo));
module.exports = OUT.pour();
