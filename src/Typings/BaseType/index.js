const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);


class BaseType {
    constructor(settings) {
        this.parent.__formSettings(this, settings);
    }
}


OUT.push("BaseType", aepl.init("BaseType", BaseType));
module.exports = OUT.pour();
