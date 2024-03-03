const { Workspace } = require('../index.js');


Workspace.newF("__formSettings", function(cl, settings) {
    let fixSettings = Soup.from(settings); // turn to soup for better formatting

    // translate something like m_OcclusionBakeSettings to occlusionBakeSettings
    fixSettings = fixSettings.mapKeys( (k, v) => {
        
        // removing the m_ and making the first letter lowercase
        let fixed = k.replace("m_", ""); // remove the m_
        fixed = fixed.split(""); // split it up
        if (fixed[1].toUpperCase() != fixed[1]) fixed[0] = fixed[0].toLowerCase(); // if the 2nd character isn't capital turn the first to lowercase

        let fixedStr = fixed.join("")
        .replace(":", ""); // also remove : from the string

        
        if (fixedStr.includes(" ")) {
            fixedStr = fixedStr.split(" ");
            fixedStr = fixedStr.map( (str, i ) => {
                if (i > 0) {
                    str = str.split("");
                    str[0] = str[0].toUpperCase();
                    return str.join("");
                }
                else return str;
            });
            fixedStr = fixedStr.join("");
        }

        // return the joined string
        return fixedStr
    });

    // turn everything into unityscript objects
    fixSettings = fixSettings.map( (k, v, i) => {
        return new cl.parent.UnityscriptObject(k, v);
    });

    // assign them to the class
    Object.assign(cl, fixSettings.pour());
    Object.defineProperty(cl, "__raw", {
        value: settings,
        configurable: true
    });
    return fixSettings;
});
