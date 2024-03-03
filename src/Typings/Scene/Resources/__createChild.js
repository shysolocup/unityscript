const { Scene } = require('../index.js');
const yaml = require('js-yaml');


Scene.newF("__createChild", function(name, settings) {
    let thing = settings.filter( s => s[0].includes(name))[0];
    let stuff = yaml.load(thing.join("\n"));
    return new this.parent[name](stuff[name]);
});
