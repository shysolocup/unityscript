const { Workspace } = require('../index.js');
const Soup = require('@stews/soup');
const fs = require('fs');


Workspace.newF("__buildProject", function() { // function for building the project's settings
    
    // a list of project settings
    let settingFiles = fs.readdirSync(this.settingsDir).filter( file => file.endsWith(".asset"));

    
    settingFiles.forEach( file => {

        // gets the file's name and creates a new Scene type
        let name = file.replace(".asset", ""); // name of the setting group

        
        // read the files
        let data = fs.readFileSync(`${this.settingsDir}/${file}`, 'utf8'); // setting data


        // translate and push
        this.settings.translate(data); // translates the setting's metadata and data into usable JSON data
    });
});
