const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);

class BaseSettings {
    constructor(settings) {
        this.flags = this.__getSetting("m_ObjectHideFlags", settings);
        console.log(this.flags);
        // this.version = settings.filter( s => s.includes("m_serializedVersion") )[0];
    }

    __getSetting(setting, settings) {
        return settings.filter( s => s.includes(setting) )[0].replace(`${setting}:`, "");
    }
}


OUT.push("BaseSettings", aepl.init("BaseSettings", BaseSettings));
module.exports = OUT.pour();
