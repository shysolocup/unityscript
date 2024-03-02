const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);


class Lighting {
    constructor(settings) {
        let baseSettings = this.extend(this.parent.BaseSettings, settings);

        let dataAsset = this.__getSetting("m_LightingDataAsset", settings, { keepAsString: true });
        this.dataAsset = parseInt(dataAsset.substring(9, dataAsset.length-1));

        let lightSettings = this.__getSetting("m_LightingDataAsset", settings, { keepAsString: true });
        this.settings = parseInt(lightSettings.substring(9, lightSettings.length-1));
    }
}


OUT.push("Lighting", aepl.init("Lighting", Lighting));
module.exports = OUT.pour();
