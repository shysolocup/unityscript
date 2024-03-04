const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);


class LightmapEditorSettings {
    constructor(settings) {
        this.extend(this.parent.BaseType, settings);
    }
}


OUT.push("LightmapEditorSettings", aepl.init("LightmapEditorSettings", LightmapEditorSettings));
module.exports = OUT.pour();
