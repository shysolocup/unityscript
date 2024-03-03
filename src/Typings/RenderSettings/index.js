const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);

class RenderSettings {
    constructor(settings) {
        let fixedSettings = this.parent.__formSettings(this, settings);
        this.extend(this.parent.BaseSettings, fixedSettings);

        let fromColor3 = this.parent.Color.fromColor3;

        this.ambientEquatorColor = fromColor3(this.ambientEquatorColor);
        this.ambientGroundColor = fromColor3(this.ambientGroundColor);
        this.ambientSkyColor = fromColor3(this.ambientSkyColor);
        this.fogColor = fromColor3(this.fogColor);
        this.indirectSpecularColor = fromColor3(this.indirectSpecularColor);
        this.subtractiveShadowColor = fromColor3(this.subtractiveShadowColor);
    }
}


OUT.push("RenderSettings", aepl.init("RenderSettings", RenderSettings));
module.exports = OUT.pour();
