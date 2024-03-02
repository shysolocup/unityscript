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
        let layer = (settingSettings.layer) ? settingSettings.layer : 0
        let lines = [];
        let line = undefined

        let raw = settings.filter( (s, i) => {
            let pass = s.includes(setting);
            if (pass) lines.push(i);
            return pass;
        });
        
        raw = raw[layer].replace(`${setting}:`, "").trim();
        if (raw == "") raw = "undefined";
        line = lines[layer];

        function runString(str) {
            return (new Function(`return ${str}`))();
        }

        const UnityscriptObject = this.parent.UnityscriptObject;

        let stuff = (settingSettings.keepAsString) ? new UnityscriptObject( raw, line ) : (settingSettings.type) ? new UnityscriptObject( runString(`new ${type.name}(${raw})`), line ) : new UnityscriptObject(runString(raw));
        if (stuff instanceof UnityscriptObject) stuff.__line = line;
        return (settingSettings.callback) ? settingSettings.callback(stuff) : stuff ;
    }
}


OUT.push("BaseSettings", aepl.init("BaseSettings", BaseSettings));
module.exports = OUT.pour();
