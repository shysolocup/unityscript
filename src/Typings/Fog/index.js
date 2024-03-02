const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);
const util = require('util');


class Fog {
    constructor(settings, baseSettings) {
        Object.assign(this, baseSettings);
        util.inherits(this.constructor, baseSettings.constructor);
        
        this.value = this.__getSetting("m_Fog", settings);
        this.color = this.parent.Color.fromColor3(this.__getSetting("m_FogColor", settings));
        this.mode = this.__getSetting("m_FogMode", settings);
        this.density = this.__getSetting("m_FogDensity", settings);
        this.linearStart = this.__getSetting("m_LinearFogStart", settings);
        this.linearEnd = this.__getSetting("m_LinearFogEnd", settings);
    }
}


OUT.push("Fog", aepl.init("Fog", Fog));
module.exports = OUT.pour();
