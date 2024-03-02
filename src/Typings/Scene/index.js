const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);


class Scene {
    constructor() {

    }

    translate(data, meta) {
        let stuff = data.split("--- !u");
        stuff.shift();

        stuff = stuff.map( s => {
            s = s.split(/(\r\n|\n|\r)/gm);
            s.shift();
            s = s.filter( thing => !(thing == "\r\n") );
            return s;
        });

        let occlusion = stuff.filter( s => s[0].includes("OcclusionCullingSettings"))[0];
        this.occlusionCullingSettings = new this.parent.OcclusionCullingSettings(occlusion);
    }
}


OUT.push("Scene", aepl.init("Scene", Scene));
module.exports = OUT.pour();
