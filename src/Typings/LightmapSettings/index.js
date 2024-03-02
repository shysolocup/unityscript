const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);


class LightmapSettings {
    constructor(settings) {
        let baseSettings = this.extend(this.parent.BaseSettings, settings);

        this.GIWorkflowMode = this.__getSetting("m_GIWorkflowMode", settings);
        this.GISettings = new this.parent.GISettings(settings, baseSettings);
        this.lightmapEditorSettings = new this.parent.LightmapEditorSettings(settings, baseSettings);
        this.lighting = new this.parent.Lighting(settings, baseSettings);
    }
}


OUT.push("LightmapSettings", aepl.init("LightmapSettings", LightmapSettings));
module.exports = OUT.pour();
