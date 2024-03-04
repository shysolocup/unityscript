const { Workspace } = require('../index.js');
const Soup = require('@stews/soup');
const fs = require('fs');


Workspace.newF("__buildProject", function() { // function for building the project's settings
    
    // a list of project settings
    let settingFiles = fs.readdirSync(this.settingsDir).filter( file => !file.endsWith(".asset"));

    
    settingFiles.forEach( file => {

        // gets the file's name and creates a new Scene type
        let name = file.replace(".asset", ""); // name of the setting group
        const setting = new this.ProjectSetting(name);

        
        // read the files
        let data = fs.readFileSync(`${this.settingsDir}/${file}`, 'utf8'); // setting data


        // translate and push
        setting.translate(data); // translates the setting's metadata and data into usable JSON data
        this.settings.push(name, setting); // pushes the new project setting 
    });
});
