const { Color } = require('../index.js');


function fromColor3(red=0, green=0, blue=0, alpha=1, color=new Color()) {
    if (red instanceof Object) {
        green = red.g*255;
        blue = red.b*255;
        alpha = red.a*255;
        red = red.r*255;
    }

    color.red = red*255;
    color.green = green*255;
    color.blue = blue*255;
    color.alpha = alpha;
    color.hexCode = rgbToHex(red, green, blue);
    color.hexCodeNumber = parseInt(color.hexCode.replace("#", "0x"));

    return color;
}


// thanks https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
  
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


Color.newPF("fromColor3", fromColor3);
module.exports = fromColor3;
