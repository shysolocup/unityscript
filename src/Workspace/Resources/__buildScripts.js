const { Workspace } = require('../index.js');
const Soup = require('@stews/soup');
const fs = require('fs');


Workspace.newF("__buildScripts", function() { // function for building the workspace.script property

    // a list of the script's raw code excluding meta files bc those will be used later
    let scriptFiles = fs.readdirSync(this.scriptsDir).filter( file => !file.endsWith(".meta"));


    scriptFiles.forEach( file => {
        let name = file.replace(".unity", ""); // name of the script
        const script = new this.Script(name); // creates a new script typing

        let data = fs.readFileSync(`${this.scriptsDir}/${file}`, 'utf8'); // script data
        let meta = fs.readFileSync(`${this.scriptsDir}/${file}.meta`, 'utf8'); // script metadata

        script.translate(data, meta); // translates the scripts's metadata and data into usable JSON data
        this.scripts.push(name, script); // pushes the new script into the script group
    });
});
