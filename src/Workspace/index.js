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



// extras
const OUT = new Soup(Object);
const Workspaces = new Soup(Object);




class UnityscriptWorkspace {
    constructor(settings={}) {

		// workspace id
		this.id = this.__generateID(18, "1234567890");
		Workspaces.push(this.id, this);


		// workspace type (2D or 3D)
		this.type = 0;
		if (settings.type) {
			if (typeof settings.type == "string") this.type = (settings.type.toLowerCase() == "3d") ? 0 : (settings.type.toLowerCase() == "2d") ? 1 : 0;
			else this.type = settings.type;
		}

		
		// instances
		Object.defineProperty(this, "__instances", {
			value: Workspaces,
			configurable: true
		});

		
        // directories
        this.projectDir = undefined; // directory for the project
        this.settingsDir = undefined; // directory for the project's settings
        this.assetsDir = undefined; // directory for the project's assets
        this.scenesDir = undefined; // directory for the project's scenes
        this.scriptsDir = undefined; // directory for the project's scripts


        // groups
        this.events = new this.EventGroup; // event list
        this.scenes = new this.SceneGroup; // scene list
        this.scripts = new this.ScriptGroup; // script list
        this.objects = new this.GameObjectGroup; // global object list between all scenes


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



// ObjectHideFlags
let flags = ["None", "HideInHierarchy", "HideInInspector", "DontSaveInEditor", "NotEditable", "DontSaveInBuild", "DontUnloadUnusedAsset", "DontSave", "HideAndDontSave"];
flags = Object.fromEntries(flags.map( (e, i) => [e, i]));



// exporting out stuff
OUT.push("Workspace", aepl.init("Workspace", UnityscriptWorkspace) );
OUT.push("Typings", new Soup(Object));
OUT.push("ObjectHideFlags", flags);
OUT.push("Workspaces", Workspaces);
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


// parseTime for sleep
const parseTime = require('./Resources/parseTime.js');



/* group exports that automatically define so you don't have to import them manually

ex:
const { Workspace } = require('unityscript');
const workspace = new Workspace();

console.log(ObjectHideFlags);
*/



return [ 
	ObjectHideFlags, 
	sleep,
	sleepMs
	
] = [
	
	flags,
	function(time) { return new Promise(resolve => setTimeout(resolve, parseTime(time)*1000)) },
	function(time) { return new Promise(resolve => setTimeout(resolve, parseTime(time))) }
];
