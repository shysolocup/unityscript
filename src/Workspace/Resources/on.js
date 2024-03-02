const { Workspace } = require('../index.js');



Workspace.newF("on", function(...args) { // function for adding listeners to events
    const callback = args.pop(); // callback function

    // if multiple events are given in args
    if (args.length > 1) {
        let events = args;
        events.forEach( event => {
            this.events[event].listen(callback);
        });
    }

    // if only one event is given in arg
    else {
        let event = args.pop();

        // if multiple events are given in an array
        if (event instanceof Array) {
            let events = event;
            events.forEach( event => {
                this.events[event].listen(callback);
            });
        }

        // if only one event is given
        else {
            this.events[event].listen(callback);
        }
    }
});
