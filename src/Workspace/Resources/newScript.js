const { Workspace } = require('../index.js');
const fs = require('fs');


Workspace.newF("newScript", function(name, data) { // function for creating/compiling new scripts

    // gets main script parts
    getPart = (fileName) => {
        return fs.readFileSync(`${this.mainPartsDir}/${fileName}.cs`, 'utf8')
    }


    // main file data thing
    var fileData = [];


    data = Object.fromEntries(
        Object.entries(data).map( e => {
            e[0] = e[0].toLowerCase();
            return e;
        })
    );
    

    // different main script parts
    const parts = {
        start: getPart("start"),
        update: getPart("update"),
        end: getPart("end")
    };


    // adds the start void for the script to the file data
    fileData.push(parts.start.replace("SCRIPT_NAME_HERE", name));
    

    // runs stuff for the the script's start
    data.start(new this.API(fileData));
    

    // adds the update void for the script to the file data
    fileData.push(parts.update);


    // runs stuff for the script's update stuff
    if (!data.update) 
    data.update(new this.API(fileData));

    
    // adds the end stuff for the script to the file data
    fileData.push(parts.end);


    // joined file content
    let fileContent = fileData.join("\n");


    // compiles and writes the data to a file
    fs.writeFileSync(`${this.scriptsDir}/${name}.cs`, fileContent);
    return fileContent;
});