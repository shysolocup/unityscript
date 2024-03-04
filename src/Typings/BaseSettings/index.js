const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);

class BaseSettings {
    constructor(settings=null) {
        if (settings) {
            let { ObjectHideFlags } = require('../../Workspace');

            if (settings.objectHideFlags) {
                if (settings.objectHideFlags == false) settings.objectHideFlags = 0;
                else if (settings.objectHideFlags == true) settings.objectHideFlags = 1;
    
                this.objectHideFlags = Object.keys(ObjectHideFlags)[settings.objectHideFlags];
            }


            if (settings.serializedVersion) this.serializedVersion = settings.serializedVersion;
        }
    }
}


OUT.push("BaseSettings", aepl.init("BaseSettings", BaseSettings));
module.exports = OUT.pour();
