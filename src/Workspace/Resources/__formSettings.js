const { Workspace } = require('../index.js');


Workspace.newF("__formSettings", function(cl, settings) {
    let fixSettings = Soup.from(settings);

        fixSettings = fixSettings.mapKeys( (k, v) => {
            let fixed = k.replace("m_", "");
            fixed = fixed.split("");
            if (fixed[1].toUpperCase() != fixed[1]) fixed[0] = fixed[0].toLowerCase();
            return fixed.join("");
        });

        fixSettings.map( (k, v, i) => {
            return new cl.parent.UnityscriptObject(k, v);
        });

        Object.assign(cl, fixSettings.pour());
        return fixSettings;
});
