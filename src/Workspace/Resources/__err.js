const { Workspace } = require('../Workspace');

Workspace.newF("__err", function(code) {
    const errors = {
        api: this.UnityscriptError(undefined, "UnityscriptError:API")
    }

    switch(code) {
        case 0: errors.api.fire(null, "object type required for spawn") // type is not given for spawn
        case 1: errors.api.fire(null, "name is required for spawn") // name is not given for spawn
    }
})
