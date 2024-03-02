const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);


class LightmapEditorSettings {
    constructor(settings) {
        let baseSettings = this.extend(this.parent.BaseSettings, settings);

        this.serializedVersion = this.__getSetting("serializedVersion", settings, { layer: 1 });
        this.resolution = this.__getSetting("m_Resolution", settings);
        this.bakeResolution = this.__getSetting("m_BakeResolution", settings);
        this.atlasSize = this.__getSetting("m_AtlasSize", settings);
        this.ao = new this.parent.AO(settings, baseSettings);
        this.extractAmbientOcclusion = this.__getSetting("m_ExtractAmbientOcclusion", settings);
        this.padding = this.__getSetting("m_Padding", settings);

        let parameters = this.__getSetting("m_LightmapParameters", settings, { keepAsString: true });
        this.lightmapParameters = parseInt(parameters.substring(9, parameters.length-1));

        this.lightmapsBakeMode = this.__getSetting("m_LightmapsBakeMode", settings);
        this.textureCompression = this.__getSetting("m_TextureCompression", settings);
        this.finalGather = this.__getSetting("m_FinalGather", settings);
        this.finalGatherFiltering = this.__getSetting("m_FinalGatherFiltering", settings);
        this.finalGatherRayCount = this.__getSetting("m_FinalGatherRayCount", settings);
        this.reflectionCompression = this.__getSetting("m_ReflectionCompression", settings);
        this.mixedBakeMode = this.__getSetting("m_MixedBakeMode", settings);
        this.bakeBackend = this.__getSetting("m_BakeBackend", settings);
        this.pvr = new this.parent.PVR(settings, baseSettings);
        this.exportTrainingData = this.__getSetting("m_ExportTrainingData", settings);
        this.trainingDataDestination = this.__getSetting("m_TrainingDataDestination", settings);
        this.lightProbeSampleCountMultiplier = this.__getSetting("m_LightProbeSampleCountMultiplier", settings);
    }
}


OUT.push("LightmapEditorSettings", aepl.init("LightmapEditorSettings", LightmapEditorSettings));
module.exports = OUT.pour();
