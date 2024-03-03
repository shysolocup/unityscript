const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);
const util = require('util');


class UnityscriptObject {
    constructor(name, obj) {
        Object.defineProperty(this, "__value", {
            get: () => obj,
            set: (value) => obj = value,
            configurable: true
        });

        Object.defineProperty(this, "__name", {
            get: () => name,
            set: (value) => name = value,
            configurable: true
        })

        return new Proxy(this, {
            get(target, prop) {
                if (obj[prop]) return obj[prop];
                else if (target[prop]) return target[prop];
                else return false;
            }
        })
    }

    [Symbol.toPrimitive](hint) {
        return this.__value;
    }

    [util.inspect.custom]() {
        return util.inspect( this.__value, { colors: true } );
    }
}


OUT.push("UnityscriptObject", aepl.init("UnityscriptObject", UnityscriptObject));
module.exports = OUT.pour();
