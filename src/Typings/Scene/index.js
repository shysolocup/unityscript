const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);


class Scene {}


OUT.push("Scene", aepl.init("Scene", Scene));
module.exports = OUT.pour();
