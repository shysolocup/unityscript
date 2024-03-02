const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);
const util = require('util');


class PVR {
    constructor(settings, baseSettings) {
        util.inherits(this.constructor, baseSettings.constructor);
        
        this.sampling = this.__getSetting("m_PVRSampling", settings);
        this.directSampleCount = this.__getSetting("m_PVRDirectSampleCount", settings);
        this.sampleCount = this.__getSetting("m_PVRSampleCount", settings);
        this.bounces = this.__getSetting("m_PVRBounces", settings);
        this.envSampleCount = this.__getSetting("m_PVREnvironmentSampleCount", settings);
        this.envReferencePointCount = this.__getSetting("m_PVREnvironmentReferencePointCount", settings);
        this.filteringMode = this.__getSetting("m_PVRFilteringMode", settings);
        this.denoiserTypeDirect = this.__getSetting("m_PVRDenoiserTypeDirect", settings);
        this.denoiserTypeIndirect = this.__getSetting("m_PVRDenoiserTypeIndirect", settings);
        this.denoiserTypeAO = this.__getSetting("m_PVRDenoiserTypeAO", settings);
        this.filterTypeDirect = this.__getSetting("m_PVRFilterTypeDirect", settings);
        this.filterTypeIndirect = this.__getSetting("m_PVRFilterTypeIndirect", settings);
        this.filterTypeAO = this.__getSetting("m_PVRFilterTypeAO", settings);
        this.envMIS = this.__getSetting("m_PVREnvironmentMIS", settings);
        this.culling = this.__getSetting("m_PVRCulling", settings);
        this.filteringGaussRadiusDirect = this.__getSetting("m_PVRFilteringGaussRadiusDirect", settings);
        this.filteringGaussRadiusIndirect = this.__getSetting("m_PVRFilteringGaussRadiusIndirect", settings);
        this.filteringGaussRadiusAO = this.__getSetting("m_PVRFilteringGaussRadiusAO", settings);
        this.filteringAtrousPositionSigmaDirect = this.__getSetting("m_PVRFilteringAtrousPositionSigmaDirect", settings);
        this.filteringAtrousPositionSigmaIndirect = this.__getSetting("m_PVRFilteringAtrousPositionSigmaIndirect", settings);
        this.filteringAtrousPositionSigmaAO = this.__getSetting("m_PVRFilteringAtrousPositionSigmaAO", settings);
    }
}


OUT.push("PVR", aepl.init("PVR", PVR));
module.exports = OUT.pour();
