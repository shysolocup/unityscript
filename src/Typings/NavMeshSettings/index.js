const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);

class NavMeshSettings {
    constructor(settings) {
        let baseSettings = this.extend(this.parent.BaseSettings, settings);

        this.buildSettings = new this.parent.BuildSettings(settings, baseSettings);

        let data = this.__getSetting("m_NavMeshData", settings, { keepAsString: true });
        this.navMeshData = parseInt(data.substring(9, data.length-1));
    }
}


OUT.push("NavMeshSettings", aepl.init("NavMeshSettings", NavMeshSettings));
module.exports = OUT.pour();
