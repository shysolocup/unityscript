const { Workspace } = require('../index.js');


Workspace.newF("close", function() { // function for closing the workspace
    clearInterval(this.aliveInterval); // kills the process
    this.events.close.fire(); // fires the close event
});
