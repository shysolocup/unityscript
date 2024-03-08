const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);
const fs = require('fs');

class GameObject {
    constructor(settings) {
        this.extend(this.parent.BaseType, settings);
    }
}


OUT.push("GameObject", aepl.init("GameObject", GameObject));
module.exports = OUT.pour();

let resFiles = fs.readdirSync(__dirname+"/Resources").filter( file => file.endsWith(".js"));
resFiles.forEach( file => {
    require('./Resources/'+file);
});
