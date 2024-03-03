/*
	--< UnityScript >--
	:: created by @paishee using ::
	- stews: https://github.com/paishee/stews
    - aepl: https://github.com/paishee/aepl
    - js-yaml: https://github.com/nodeca/js-yaml

    https://github.com/paishee/unityscript

*/




// modules
const aepl = require('aepl');
const Soup = require('@stews/soup');
const fs = require('fs');




class UnityscriptWorkspace {
    constructor(settings={}) {
        
        // directories
        this.projectDir = undefined; // directory for the project
        this.assetsDir = undefined; // directory for the project's assets
        this.scenesDir = undefined; // directory for the project's scenes
        this.scriptsDir = undefined; // directory for the project's scripts


        // groups
        this.events = new this.EventGroup; // event list
        this.scenes = new this.SceneGroup; // scene list
        this.scripts = new this.ScriptGroup; // script list


        // base client events
        this.workspaceEvents = require('./Resources/WorkspaceEvents.json');
        this.workspaceEvents.forEach( ev => {
            
            // workspace events with multiple names
            if (ev instanceof Array) {
                let event = new this.Event
                ev.forEach(miniEv => this.events.push( miniEv, event ) );
            }

            // workspace events with one name
            else if (typeof ev == "string") {
                let event = new this.Event;
                this.events.push(ev, event);
            }
        });


        // fs.readdirSync(this.project);
    }
}




// exporting out stuff
const OUT = new Soup(Object);
OUT.push("Workspace", aepl.init("Workspace", UnityscriptWorkspace) );
OUT.push("Typings", new Soup(Object));
module.exports = OUT.pour();



// building resources
let stuff = fs.readdirSync(__dirname+"/Resources/").filter( file => file.endsWith('.js'));
stuff.forEach( file => require(`./Resources/${file}`) );



// building types
const typeDir = __dirname.replace("Workspace", "Typings");
const types = fs.readdirSync(typeDir).filter( file => file !== "index.js");

types.forEach( res => {
    const out = new Soup( require(`../Typings/${res}`) );
    out.forEach( (typeName, type) => {
        OUT.Typings.push(typeName, type);
        Workspace.newC(typeName, type);
    })
});
