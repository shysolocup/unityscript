const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);
const fs = require('fs');


class API {
    constructor(fileData) {
        this.workspace = this.parent;
        this.fileData = fileData;
    }
}


OUT.push("API", aepl.init("API", API));
module.exports = OUT.pour();


let stuff = fs.readdirSync(__dirname+"/Resources/").filter( file => file.endsWith('.js'));
stuff.forEach( file => require(`./Resources/${file}`) );
