const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);

class BaseSettings {
    constructor(settings) {
        this.objectHideFlags = this.__getSetting("m_ObjectHideFlags", settings);
        this.serializedVersion = this.__getSetting("serializedVersion", settings);
    }

    __getSetting(setting, settings) {
        let raw = settings.filter( s => s.includes(setting) )[0].replace(`${setting}:`, "");
        return eval(raw);
    }
}


OUT.push("BaseSettings", aepl.init("BaseSettings", BaseSettings));
module.exports = OUT.pour();
