const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);

class Transform {
    constructor(settings) {
        let fixedSettings = this.extend(this.parent.BaseType, settings);
        let fileID = this.gameObject.fileID;

        let obj = this.parent.objects[fileID];

        Object.assign(obj, this);
        delete obj.gameObject;

        obj.transform = this;
    }
}


OUT.push("Transform", aepl.init("Transform", Transform));
module.exports = OUT.pour();
