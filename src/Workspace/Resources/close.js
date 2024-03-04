const { Workspace } = require('../index.js');


Workspace.newF("close", function() { // function for closing the workspace
    clearInterval(this.aliveInterval); // kills the process
    this.events.close.fire(this, this.aliveInterval); // fires the close event
});
