const { Color } = require('../index.js');


function fromRGBA(red=0, green=0, blue=0, alpha=1, color=new Color()) {
    if (red instanceof Object) {
        green = red.g;
        blue = red.b;
        alpha = red.a;
        red = red.r;
    }

    color.red = red;
    color.green = green;
    color.blue = blue;
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


Color.newPF("fromRGBA", fromRGBA);
Color.newPF("fromRGB", fromRGBA);
module.exports = fromRGBA;
