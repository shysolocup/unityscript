const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);


class EventGroup extends Soup {
    constructor() {
        super(Object);
    }

    create(...args) {
        return new this.parent.Event(...args);
    }
}


OUT.push("EventGroup", aepl.init("EventGroup", EventGroup));
module.exports = OUT.pour();
