const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);
const util = require('util');


class SpotCookie {
    constructor(settings, baseSettings) {
        Object.assign(this, baseSettings);
        util.inherits(this.constructor, baseSettings.constructor);
        
        this.fileID = this.__getSetting("fileID", settings);
        this.guid = this.__getSetting("guid", settings, { keepAsString: true });
        this.fileID = this.__getSetting("fileID", settings);
        this.type = this.__getSetting("type", settings);
    }
}


OUT.push("SpotCookie", aepl.init("SpotCookie", SpotCookie));
module.exports = OUT.pour();
