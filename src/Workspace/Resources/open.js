const { Workspace } = require('../index.js');


Workspace.newF("open", function(projectDir) { // function for opening the workspace
    // directories
    this.projectDir = projectDir;
    this.settingsDir = projectDir+"/ProjectSettings";
    this.assetsDir = projectDir+"/Assets";
    this.scenesDir = this.assetsDir+"/Scenes";
    this.scriptsDir = this.assetsDir+"/Scripts";

    // alive interval
    this.aliveInterval = setInterval(() => {}, 1 << 30); // keeps the process alive

    // building
    this.__buildProject();
    this.__buildScenes();
    this.__buildScripts();

    // event firing
    this.events.open.fire(this, this.aliveInterval); // fires the open event
});
