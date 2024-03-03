const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);

class Light {
    constructor(settings) {
        let fixedSettings = this.parent.__formSettings(this, settings);

        this.color = this.parent.Color.fromColor3(this.color);
        this.shadows = new this.parent.LightShadows(this.shadows);
    }
}


OUT.push("Light", aepl.init("Light", Light));
module.exports = OUT.pour();
