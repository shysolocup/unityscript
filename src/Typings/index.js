const { Workspace } = require('../Workspace');
const fs = require('fs');
const Soup = require('@stews/soup');
const OUT = new Soup(Object);


const types = fs.readdirSync(__dirname).filter( file => file !== "index.js");
types.forEach( res => {
    const out = new Soup( require(`./${res}`) );
    out.forEach( (typeName, type) => {
        Workspace.newC(typeName, type);
        OUT.push(typeName, type);
    })
});


module.exports = OUT.pour();
