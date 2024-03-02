const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);

class OcclusionCullingSettings {
    constructor(settings) {
        this.extend(this.parent.BaseSettings, settings);
    }

    __getSetting(setting, settings) {
        return settings.filter( s => s.includes(setting) )[0].replace(`${setting}:`, "");
    }
}


OUT.push("OcclusionCullingSettings", aepl.init("OcclusionCullingSettings", OcclusionCullingSettings));
module.exports = OUT.pour();
