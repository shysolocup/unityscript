const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);
const util = require('util');


class UnityJSObject {
    constructor(obj, line) {
        Object.defineProperty(this, "__value", {
            get: () => obj,
            set: (value) => obj = value,
            configurable: true
        });

        Object.defineProperty(this, "__line", {
            get: () => line,
            set: (value) => line = value,
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
        return `UnityJSObject { ${util.inspect(this.__value, { colors: true })} }`;
    }
}


OUT.push("UnityJSObject", aepl.init("UnityJSObject", UnityJSObject));
module.exports = OUT.pour();
