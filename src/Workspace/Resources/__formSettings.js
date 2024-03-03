const { Workspace } = require('../index.js');


Workspace.newF("__formSettings", function(cl, settings) {
    let fixSettings = Soup.from(settings); // turn to soup for better formatting

    // translate something like m_OcclusionBakeSettings to occlusionBakeSettings
    fixSettings = fixSettings.mapKeys( (k, v) => {
        let fixed = k.replace("m_", ""); // remove the m_
        fixed = fixed.split(""); // split it up
        if (fixed[1].toUpperCase() != fixed[1]) fixed[0] = fixed[0].toLowerCase(); // if the 2nd character isn't capital turn the first to lowercase
        return fixed.join("");
    });

    // turn everything into unityscript objects
    fixSettings.map( (k, v, i) => {
        return new cl.parent.UnityscriptObject(k, v);
    });

    // assign them to the class
    Object.assign(cl, fixSettings.pour());
    return fixSettings;
});
