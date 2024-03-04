const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);

class NavMeshSettings {
    constructor(settings) {
        let fixedSettings = this.extend(this.parent.BaseType, settings);
        this.extend(this.parent.BaseSettings, fixedSettings);

        this.buildSettings = new this.parent.BuildSettings(fixedSettings.buildSettings);
    }
}


OUT.push("NavMeshSettings", aepl.init("NavMeshSettings", NavMeshSettings));
module.exports = OUT.pour();
