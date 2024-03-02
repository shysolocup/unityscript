const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);
const fs = require('fs');


class Color {
    constructor() {
        this.red = undefined;
        this.green = undefined;
        this.blue = undefined;
        this.alpha = undefined;
    }
}


OUT.push("Color", aepl.init("Color", Color));
module.exports = OUT.pour();

let stuff = fs.readdirSync(__dirname+"/Resources/").filter( file => file.endsWith('.js'));
stuff.forEach( file => require(`./Resources/${file}`) );
