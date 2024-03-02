const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);


class Script {}


OUT.push("Script", aepl.init("Script", Script));
module.exports = OUT.pour();
