const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);
const fs = require('fs');


class Vector3 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}


OUT.push("Vector3", aepl.init("Vector3", Vector3));
module.exports = OUT.pour();

/*
let stuff = fs.readdirSync(__dirname+"/Resources/").filter( file => file.endsWith('.js'));
stuff.forEach( file => require(`./Resources/${file}`) );
*/
