const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);


class Event {
    constructor(name=null) {
        this.name = name; // optional name of the event (if given it'll automatically add it to the event list)
        this.listeners = new Soup(Array); // array of functions that are fired off when the event is ran

        if (name) {
            this.parent.events.push(name, this);
        }
    }


    /* for listening to the event
        ex: event.listen( (a, b) => {
            // do stuff
        });
    */
    listen(f) {
        this.listeners.push(f);
    }


    /* for firing off the event
        ex: event.fire("a", "b");
    */
    fire(...args) {
        this.listeners.forEach(async l => await l(...args));
    }
}


OUT.push("Event", aepl.init("Event", Event));
module.exports = OUT.pour();
