const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);

class BaseSettings {
    constructor(settings=null) {
        if (settings) {
            let { ObjectHideFlags } = require('../../Workspace');

            this.objectHideFlags = Object.values(ObjectHideFlags)[settings.objectHideFlags];
            this.serializedVersion = settings.serializedVersion;
        }
    }
}


OUT.push("BaseSettings", aepl.init("BaseSettings", BaseSettings));
module.exports = OUT.pour();
