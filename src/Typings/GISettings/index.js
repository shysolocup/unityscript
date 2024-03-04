const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);
const util = require('util');


class GISettings {
    constructor(settings) {
        this.extend(this.parent.BaseType, settings);
    }
}


OUT.push("GISettings", aepl.init("GISettings", GISettings));
module.exports = OUT.pour();
