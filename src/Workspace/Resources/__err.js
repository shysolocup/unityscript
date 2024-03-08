const { Workspace } = require('../index.js');

Workspace.newF("__err", function(code) {
    const err = this.UnityscriptError;
    
    const errors = {
        api: new err(undefined, "UnityscriptError@API")
    }

    switch(code) {
        case 0: errors.api.fire(null, "object type required for spawn", true) // type is not given for spawn
        case 1: errors.api.fire(null, "name is required for spawn", true) // name is not given for spawn
    }
})
