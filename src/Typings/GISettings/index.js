const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);
const util = require('util');


class GISettings {
    constructor(settings, baseSettings) {
        Object.assign(this, baseSettings);
        util.inherits(this.constructor, baseSettings.constructor);
        
        this.bounceScale = this.__getSetting("m_BounceScale", settings);
        this.indirectOutputScale = this.__getSetting("m_IndirectOutputScale", settings);
        this.albedoBoost = this.__getSetting("m_AlbedoBoost", settings);
        this.mode = this.__getSetting("m_EnvironmentLightingMode", settings);
        this.enableBakedLightmaps = this.__getSetting("m_EnableBakedLightmaps", settings);
        this.enableRealtimeLightmaps = this.__getSetting("m_EnableRealtimeLightmaps", settings);
    }
}


OUT.push("GISettings", aepl.init("GISettings", GISettings));
module.exports = OUT.pour();
