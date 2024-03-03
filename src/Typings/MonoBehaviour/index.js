const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);


class MonoBehaviour {
    constructor(settings) {
        this.parent.__formSettings(this, settings);
    }
}


OUT.push("MonoBehaviour", aepl.init("MonoBehaviour", MonoBehaviour));
module.exports = OUT.pour();
