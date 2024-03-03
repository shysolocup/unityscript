const { Scene } = require('../index.js');
const yaml = require('js-yaml');



Scene.newF("translate", function(data, meta) {
    Object.assign(this, yaml.load(meta)); // load and add the scene's metadata


    // most of this is string formatting sorry it's so messy
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
    // k messy is mostly over


    // adds the settings as their raw thing ex: Scene.occlusionCullingSettings
    this.occlusionCullingSettings = this.__createChild('OcclusionCullingSettings', stuff);
    this.renderSettings = this.__createChild('RenderSettings', stuff);
    this.lightmapSettings = this.__createChild('LightmapSettings', stuff);
    this.navMeshSettings = this.__createChild('NavMeshSettings', stuff);


    // adds the settings to Scene.settings
    this.settings.push("occlusionCulling", this.occlusionCullingSettings);
    this.settings.push("rendering", this.renderSettings);
    this.settings.push("lightmap", this.lightmapSettings);
    this.settings.push("navMesh", this.navMeshSettings);


    // removes the data and ids of the settings stuff
    stuff.shift(); stuff.shift(); stuff.shift(); stuff.shift();
    ids.shift(); ids.shift(); ids.shift(); ids.shift();
    

    // removes more whitespace :skull:
    stuff = stuff.map( s => s.filter( miniStuff => {
        return miniStuff.replace(/(\r\n|\n|\r)/gm, "").replace(/\s/, "").length > 1
    }));


    // nvm more messy
    stuff.forEach( (s, i) => {
        let name = s[0].replace(":", ""); // removes the : from the name of the property
        let { fileID } = ids[i]; // gets the file id

        try {
            // if the type class doesn't already exist create it
            if (!this.parent[name]) {
                this.parent.newC(name, class extends this.parent.BaseType {
                    constructor(settings) {
                        super(settings);
                    }
                });
            }


            let obj = this.__createChild(name, stuff); // creates a new child obj
            
            
            // this part is mostly just for like making sure that objects get put in Scene.objects and UnityscriptWorkspace.objects
            if (obj instanceof this.parent.GameObject) { this.objects.push(fileID, obj); this.parent.objects.push(fileID, obj); }
            if (obj instanceof this.parent.Light) { this.lights.push(fileID, obj); }
            if (obj instanceof this.parent.Camera) { this.cameras.push(fileID, obj); }


            // finally adds it to the children
            this.children.push(fileID, obj);
            
        } catch(e) {
            console.log(e);
        }
    });
});
