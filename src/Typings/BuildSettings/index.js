const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);
const util = require('util');


class BuildSettings {
    constructor(settings, baseSettings) {
        Object.assign(this, baseSettings);
        util.inherits(this.constructor, baseSettings.constructor);
        
        this.agentTypeID = this.__getSetting("agentTypeID", settings);
        this.agentRadius = this.__getSetting("agentRadius", settings);
        this.agentHeight = this.__getSetting("agentHeight", settings);
        this.agentSlope = this.__getSetting("agentSlope", settings);
        this.agentClimb = this.__getSetting("agentClimb", settings);
        this.ledgeDropHeight = this.__getSetting("ledgeDropHeight", settings);
        this.maxJumpAcrossDistance = this.__getSetting("maxJumpAcrossDistance", settings);
        this.minRegionArea = this.__getSetting("minRegionArea", settings);
        this.manualCellSize = this.__getSetting("manualCellSize", settings);
        this.cellSize = this.__getSetting("cellSize", settings);
        this.manualTileSize = this.__getSetting("manualTileSize", settings);
        this.tileSize = this.__getSetting("tileSize", settings);
        this.accuratePlacement = this.__getSetting("accuratePlacement", settings);
        this.debugFlags = this.__getSetting("m_Flags", settings);
    }
}


OUT.push("BuildSettings", aepl.init("BuildSettings", BuildSettings));
module.exports = OUT.pour();
