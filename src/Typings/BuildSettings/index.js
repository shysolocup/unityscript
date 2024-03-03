const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);
const util = require('util');


class BuildSettings {
    constructor(settings) {
        this.parent.__formSettings(this, settings.__value);
    }
}


OUT.push("BuildSettings", aepl.init("BuildSettings", BuildSettings));
module.exports = OUT.pour();
