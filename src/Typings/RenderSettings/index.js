const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);

class RenderSettings {
    constructor(settings) {
        let baseSettings = this.extend(this.parent.BaseSettings, settings);

        this.fog = new this.parent.Fog(settings, baseSettings);
    }
}


OUT.push("RenderSettings", aepl.init("RenderSettings", RenderSettings));
module.exports = OUT.pour();
