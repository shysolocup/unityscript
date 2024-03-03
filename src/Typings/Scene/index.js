const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);
const fs = require('fs');


class Scene {
    constructor() {
        this.children = new this.parent.SceneChildGroup;
        this.objects = new this.parent.SceneGameObjectGroup;
        this.lights = new this.parent.SceneLightGroup;
        this.cameras = new this.parent.SceneCameraGroup;
        this.settings = new Soup(Object);
    }
}


OUT.push("Scene", aepl.init("Scene", Scene));
module.exports = OUT.pour();

let resFiles = fs.readdirSync(__dirname+"/Resources").filter( file => file.endsWith(".js"));
resFiles.forEach( file => {
    require('./Resources/'+file);
});
