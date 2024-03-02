const { Workspace } = require('unity-js');
const Soup = require('@stews/soup');
const fs = require('fs');


Workspace.newF("__buildScenes", function() { // function for building the workspace.scenes property
    
    // a list of raw scene data files excluding meta files bc those will be used later
    let sceneFiles = fs.readdirSync(this.scenesDir).filter( file => !file.endsWith(".meta"));


    sceneFiles.forEach( file => {
        let name = file.replace(".unity", ""); // name of the scene
        const scene = new this.Scene(name); // creates a new scene typing

        let data = fs.readFileSync(`${this.scenesDir}/${file}`, 'utf8'); // scene data
        let meta = fs.readFileSync(`${this.scenesDir}/${file}.meta`, 'utf8'); // scene metadata

        scene.translate(data, meta); // translates the scene's metadata and data into usable JSON data
        this.scenes.push(name, scene); // pushes the new scene into the scene group
    });
});
