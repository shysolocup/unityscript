const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);

class Camera {
    constructor(settings) {
        let fixedSettings = this.extend(this.parent.BaseType, settings);

        /*
            I tried to get normalized view port rect working but it for some reason kept failling
            if you find a way to get it working you can reactivate it with this:
            
            this.normalizedViewPortRect = new this.parent.NormalizedViewPortRect(fixedSettings.normalizedViewPortRect.__value);

            also if you do please @ me @paishee on discord or make an issue on the github https://github.com/paishee/unityscript/issues
            thanks
        */

        this.backgroundColor = this.parent.Color.fromColor3(fixedSettings.backGroundColor.__value);
        this.cullingMask = new this.parent.CullingMask(fixedSettings.cullingMask.__value);
    }
}


OUT.push("Camera", aepl.init("Camera", Camera));
module.exports = OUT.pour();
