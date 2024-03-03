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
            },

            set(target, prop, value) {
                if (obj[prop]) { return obj[prop] = value;
                    // eventually actual stuff for editing the scene's .unity file will probably be here so it actually applies updates
                }
                else if (target[prop]) return target[prop] = value;
                else obj[prop] = value;
            },

            deleteProperty(target, prop) {
                if (obj[prop]) { return delete obj[prop];
                    // eventually actual stuff for editing the scene's .unity file will probably be here so it actually applies updates
                }
                else if (target[prop]) return delete target[prop];
                else return delete obj[prop];
            },
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
