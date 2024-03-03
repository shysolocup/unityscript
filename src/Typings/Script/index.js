const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);
const yaml = require('js-yaml');


class Script {
    translate(code, meta) {
        Object.assign(this, yaml.load(meta)); // load and add the scene's metadata
        this.code = new this.parent.UnityscriptObject("code", code);

        let lines = code.split("\n");
        this.lines = new this.parent.UnityscriptObject("lines", lines);

        let flag = "    }";

        const stStart = code.indexOf("void Start");
        const stEnd = code.indexOf(flag);

        const upStart = code.indexOf("void Update");
        const upEnd = code.lastIndexOf(flag);

        this.start = code.substring(stStart, stEnd+flag.length);
        this.update = code.substring(upStart, upEnd+flag.length);

        this.start = new this.parent.UnityscriptObject("start", this.start);
        this.update = new this.parent.UnityscriptObject("update", this.update);
    }
}


OUT.push("Script", aepl.init("Script", Script));
module.exports = OUT.pour();
