
// modules
const aepl = require('aepl');
const Soup = require('@stews/soup');
const OUT = new Soup(Object);
const fs = require('fs');



class UnityJSWorkspace {
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



OUT.push("Workspace", aepl.init("Workspace", UnityJSWorkspace) );
module.exports = OUT.pour();


let stuff = fs.readdirSync(__dirname+"/Resources/").filter( file => file.endsWith('.js'));
stuff.forEach( file => require(`./Resources/${file}`) );


const typeDir = __dirname.replace("Workspace", "Typings");
const types = fs.readdirSync(typeDir).filter( file => file !== "index.js");
types.forEach( res => {
    const out = new Soup( require(`./${res}`) );
    out.forEach( (typeName, type) => {
        Workspace.newC(typeName, type);
    })
});
