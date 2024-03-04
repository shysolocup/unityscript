const { ProjectSettings } = require('unityscript/src/Typings/ProjectSettings/index.js');
const yaml = require('js-yaml');


ProjectSettings.newF("__createSetting", function(name, settings) {

    // removing whitespace so it doesn't die
    settings = settings.map( setting => setting.filter( miniSetting => {
        return miniSetting.replace(/(\r\n|\n|\r)/gm, "").replace(/\s/, "").length > 1
    }));

    // actually loading the stuff
    let thing = settings.filter( s => s[0].includes(name))[0];
    let stuff = yaml.load(thing.join("\n"));

    // returning the stuff typed
    return new this.parent[name](stuff[name]);
});
