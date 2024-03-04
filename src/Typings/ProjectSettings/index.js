const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);
const fs = require('fs');


class ProjectSettings extends Soup {
    constructor() {
        super(Object);
    }
}


OUT.push("ProjectSettings", aepl.init("ProjectSettings", ProjectSettings));
module.exports = OUT.pour();

let resFiles = fs.readdirSync(__dirname+"/Resources").filter( file => file.endsWith(".js"));
resFiles.forEach( file => {
    require('./Resources/'+file);
});
