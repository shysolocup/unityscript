const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);
const util = require('util');


class Ambient {
    constructor(settings, baseSettings) {
        Object.assign(this, baseSettings);
        util.inherits(this.constructor, baseSettings.constructor);
        
        this.skyColor = this.__getSetting("m_AmbientSkyColor", settings);
        this.equatorColor = this.__getSetting("m_AmbientEquatorColor", settings);
        this.groundColor = this.__getSetting("m_AmbientGroundColor", settings);
        this.intensity = this.__getSetting("m_AmbientIntensity", settings);
        this.mode = this.__getSetting("m_AmbientMode", settings);
    }
}


OUT.push("Ambient", aepl.init("Ambient", Ambient));
module.exports = OUT.pour();
