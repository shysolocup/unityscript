const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);
const util = require('util');


class Flare {
    constructor(settings, baseSettings) {
        Object.assign(this, baseSettings);
        util.inherits(this.constructor, baseSettings.constructor);
        
        this.strength = this.__getSetting("m_FlareStrength", settings);
        this.fadeSpeed = this.__getSetting("m_FlareFadeSpeed", settings);
    }
}


OUT.push("Flare", aepl.init("Flare", Flare));
module.exports = OUT.pour();
