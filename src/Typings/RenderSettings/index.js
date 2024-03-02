const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);

class RenderSettings {
    constructor(settings) {
        let baseSettings = this.extend(this.parent.BaseSettings, settings);

        this.fog = new this.parent.Fog(settings, baseSettings);
        this.ambient = new this.parent.Ambient(settings, baseSettings);
        this.subtractiveShadowColor = this.__getSetting("m_SubtractiveShadowColor", settings);
        this.skybox = new this.parent.Skybox(settings, baseSettings);
        this.halo = new this.parent.Halo(settings, baseSettings);
        this.flare = new this.parent.Flare(settings, baseSettings);

        let spotCookie = this.__getSetting("m_SpotCookie", settings, { keepAsString: true});
        spotCookie = spotCookie.substring(1, spotCookie.length-1)
        this.spotCookie = new this.parent.SpotCookie(spotCookie.split(", "), baseSettings);

        this.reflection = new this.parent.Reflection(settings, baseSettings);
    }
}


OUT.push("RenderSettings", aepl.init("RenderSettings", RenderSettings));
module.exports = OUT.pour();
