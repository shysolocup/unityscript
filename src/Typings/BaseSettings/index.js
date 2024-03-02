const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);

class BaseSettings {
    constructor(settings=null) {
        if (settings) {
            this.objectHideFlags = this.__getSetting("m_ObjectHideFlags", settings);
            this.serializedVersion = this.__getSetting("serializedVersion", settings);
        }
    }

    __getSetting(setting, settings, settingSettings={}) {
        let raw = settings.filter( s => s.includes(setting))[0].replace(`${setting}:`, "").trim();
        if (raw == "") raw = "undefined";

        let stuff = (settingSettings.keepAsString) ? raw : (settingSettings.type) ? eval(`new ${type.name}(${raw})`) : eval(raw)
        return (settingSettings.callback) ? settingSettings.callback(stuff) : stuff ;
    }
}


OUT.push("BaseSettings", aepl.init("BaseSettings", BaseSettings));
module.exports = OUT.pour();
