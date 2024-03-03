const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);

class Light {
    constructor(settings) {
        let fixedSettings = this.parent.__formSettings(this, settings);
    }
}


OUT.push("Light", aepl.init("Light", Light));
module.exports = OUT.pour();
