const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);


class MonoBehaviour {
    constructor(settings) {
        this.extend(this.parent.BaseType, settings);
    }
}


OUT.push("MonoBehaviour", aepl.init("MonoBehaviour", MonoBehaviour));
module.exports = OUT.pour();
