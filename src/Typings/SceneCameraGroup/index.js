const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);


class SceneCameraGroup extends Soup {
    constructor() {
        super(Object);
    }

    create(name, properties) {
        
    }

    sift(callback) {
        for (let [k, obj] of this) {
            if (callback(obj)) return obj;
        }
    }
}


OUT.push("SceneCameraGroup", aepl.init("SceneCameraGroup", SceneCameraGroup));
module.exports = OUT.pour();
