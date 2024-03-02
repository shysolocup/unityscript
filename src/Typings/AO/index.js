const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);
const util = require('util');


class AO {
    constructor(settings, baseSettings) {
        util.inherits(this.constructor, baseSettings.constructor);
        
        this.value = this.__getSetting("m_AO", settings);
        this.maxDistance = this.__getSetting("m_AOMaxDistance", settings);
        this.compAOExponent = this.__getSetting("m_CompAOExponent", settings);
        this.compAOExponentDirect = this.__getSetting("m_CompAOExponentDirect", settings);
    }
}


OUT.push("AO", aepl.init("AO", AO));
module.exports = OUT.pour();
