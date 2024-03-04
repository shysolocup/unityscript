const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);


class BaseType {
    constructor(settings) {
        this.parent.__formSettings(this, settings);

        if (this.objectHideFlags) {
            let { ObjectHideFlags } = require('../../Workspace');

            if (this.objectHideFlags == false) this.objectHideFlags = 0;
            else if (this.objectHideFlags == true) this.objectHideFlags = 1;

            this.objectHideFlags = Object.keys(ObjectHideFlags)[this.objectHideFlags];
        }
    }
}


OUT.push("BaseType", aepl.init("BaseType", BaseType));
module.exports = OUT.pour();
