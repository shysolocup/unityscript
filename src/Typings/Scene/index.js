const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);
const yaml = require('js-yaml');


class Scene {
    constructor() {
        this.children = new this.parent.SceneChildGroup;
        this.objects = new this.parent.SceneGameObjectGroup;
        this.lights = new this.parent.SceneLightGroup;
    }

    translate(data, meta) {
        Object.assign(this, yaml.load(meta));

        let stuff = data.split("--- !u");
        stuff.shift();

        let ids = [];

        stuff = stuff.map( s => {
            s = s.split(/(\r\n|\n|\r)/gm);
            let id = s.shift();
            let eid = parseInt(id.split(" ")[0].replace("!", ""));
            let fileID = parseInt(id.split(" ")[1].replace("&", ""));
            ids.push({ id: id, eid: eid, fileID: fileID});
            s = s.filter( thing => !(thing == "\r\n") );
            return s;
        });


        this.occlusionCullingSettings = this.__createChild('OcclusionCullingSettings', stuff);
        this.renderSettings = this.__createChild('RenderSettings', stuff);
        this.lightmapSettings = this.__createChild('LightmapSettings', stuff);
        this.navMeshSettings = this.__createChild('NavMeshSettings', stuff);


        stuff.shift(); stuff.shift(); stuff.shift(); stuff.shift();
        ids.shift(); ids.shift(); ids.shift(); ids.shift();
        
        stuff.forEach( (s, i) => {
            let name = s[0].replace(":", "");
            let { fileID } = ids[i];
            try {
                let obj = this.__createChild(name, stuff);
                
                if (obj instanceof this.parent.GameObject) { this.objects.push(fileID, obj); }
                if (obj instanceof this.parent.Light) { this.lights.push(fileID, obj); }

                this.children.push(fileID, obj);
            } catch(e) {}

        })
    }

    __createChild(name, settings) {
        let thing = settings.filter( s => s[0].includes(name))[0];
        let stuff = yaml.load(thing.join("\n"));
        return new this.parent[name](stuff[name]);
    }
}


OUT.push("Scene", aepl.init("Scene", Scene));
module.exports = OUT.pour();
