const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);

class OcclusionCullingSettings {
    constructor(settings) {
        let fixedSettings = this.parent.__formSettings(this, settings);
        this.extend(this.parent.BaseSettings, fixedSettings);
        this.occlusionBakeSettings = new this.parent.OcclusionBakeSettings(fixedSettings.occlusionBakeSettings);
        this.sceneGUID = (!this.sceneGUID) ? 0 : this.sceneGUID;
    }
}


OUT.push("OcclusionCullingSettings", aepl.init("OcclusionCullingSettings", OcclusionCullingSettings));
module.exports = OUT.pour();
