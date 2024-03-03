const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);


class LightmapSettings {
    constructor(settings) {
        let fixedSettings = this.parent.__formSettings(this, settings);
        this.extend(this.parent.BaseSettings, fixedSettings);

        this.lightmapEditorSettings = new this.parent.LightmapEditorSettings(fixedSettings.lightmapEditorSettings);
    }
}


OUT.push("LightmapSettings", aepl.init("LightmapSettings", LightmapSettings));
module.exports = OUT.pour();
