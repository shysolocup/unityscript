const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);

class OcclusionCullingSettings {
    constructor(settings) {
        let baseSettings = this.extend(this.parent.BaseSettings, settings);

        this.occlusionBakeSettings = new this.parent.OcclusionBakeSettings(settings, baseSettings);
        this.sceneGUID = this.__getSetting("m_SceneGUID", settings, { keepAsString: true });
        this.occlusionCullingData = this.__getSetting("m_OcclusionCullingData", settings);
    }
}


OUT.push("OcclusionCullingSettings", aepl.init("OcclusionCullingSettings", OcclusionCullingSettings));
module.exports = OUT.pour();
