
// modules
const aepl = require('aepl');
const Soup = require('@stews/soup');
const OUT = new Soup(Object);
const fs = require('fs');



class UnityJSWorkspace {
    constructor(settings) {
        this.projectDir = settings.project; // directory for the project
        this.events = new Soup(Object); // event list


        // base client events
        this.workspaceEvents = require('./Resources/WorkspaceEvents.json');
        this.workspaceEvents.forEach( ev => {
            
            // workspace events with multiple names
            if (ev instanceof Array) {
                const event = new this.Event()
                ev.forEach(miniEv => this.events.push( miniEv, new Typings.Event() ) );
            }

            // workspace events with one name
            else if (typeof ev == "string") {
                const event = new this.Event();
                this.events.push(ev, event);
            }
        });


        // fs.readdirSync(this.project);
    }


    open() { // opens the workspace
        this.aliveInterval = setInterval(() => {}, 1 << 30); // keeps the process alive
        this.events.ready.fire(this, this.aliveInterval); // fires the ready event
    }
}



OUT.push("Workspace", aepl.init("Workspace", UnityJSWorkspace) );
module.exports = OUT.pour();


let stuff = fs.readdirSync(__dirname+"/Resources/").filter( file => file.endsWith('.js'));
stuff.forEach( file => require(`./Resources/${file}`) );
require('../Typings');
