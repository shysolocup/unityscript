const { Workspace } = require('../index.js');
const fs = require('fs');


Workspace.newF("newScript", function(name, data) { // function for opening the workspace

    function getPart(fileName) {
        return fs.readFileSync(`${this.mainPartsDir}/${fileName}.cs`, 'utf8')
    }

    var fileData = [];
    
    const parts = {
        start: getPart("start"),
        update: getPart("update"),
        end: getPart("end")
    };

    fileData.push(parts.start.replace("SCRIPT_NAME_HERE", name));

    fs.writeFileSync(`${this.scriptsDir}/${name}.cs`, fileData.join("\n"));
});
