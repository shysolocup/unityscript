const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);
const util = require('util');


class Skybox {
    constructor(settings, baseSettings) {
        Object.assign(this, baseSettings);
        util.inherits(this.constructor, baseSettings.constructor);
        
        let material = this.__getSetting("m_SkyboxMaterial", settings, { keepAsString: true});
        material = material.substring(1, material.length-1)
        this.material = new this.parent.SkyboxMaterial(material.split(", "), baseSettings);
    }
}


OUT.push("Skybox", aepl.init("Skybox", Skybox));
module.exports = OUT.pour();
