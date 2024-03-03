const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);
const yaml = require('js-yaml');


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


        this.occlusionCullingSettings = this.createSettingChild('OcclusionCullingSettings', stuff);
        this.renderSettings = this.createSettingChild('RenderSettings', stuff);
        this.lightmapSettings = this.createSettingChild('LightmapSettings', stuff);
        this.NavMeshSettings = this.createSettingChild('NavMeshSettings', stuff);

        stuff.shift(); stuff.shift(); stuff.shift(); stuff.shift();
    }

    createSettingChild(setting, settings) {
        let thing = settings.filter( s => s[0].includes(setting))[0];
        let stuff = yaml.load(thing.join("\n"));
        return new this.parent[setting](stuff[setting]);
    }
}


OUT.push("Scene", aepl.init("Scene", Scene));
module.exports = OUT.pour();
