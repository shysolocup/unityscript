const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);


class LightShadows {
    constructor(settings) {
        this.extend(this.parent.BaseType, settings);
    }
}


OUT.push("LightShadows", aepl.init("LightShadows", LightShadows));
module.exports = OUT.pour();
