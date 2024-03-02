const { Color } = require('../index.js');


function fromHex(hexCode, color=new Color()) {
    function parse(hex) {
        color.red = parseInt(hex.substring(1, 3), 16);
        color.green = parseInt(hex.substring(3, 5), 16);
        color.blue = parseInt(hex.substring(5, 7), 16);
        color.alpha = 1;
        color.hexCode = hex;
        color.hexCodeNumber = parseInt(hex.replace("#", "0x"));

        color.color3 = {
            r: color.red/255,
            g: color.green/255,
            b: color.blue/255,
        };
    }

    if (typeof hexCode == "string") {
        parse(hexCode);
    }

    else if (typeof hexCode == "number") {
        parse(hexCode.toString().replace("0x", "#"));
    }

    return color;
}


Color.newPF("fromHex", fromHex);
module.exports = fromHex;
