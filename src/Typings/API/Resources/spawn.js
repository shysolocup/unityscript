const { API } = require('../index.js');
const Soup = require('@stews/soup');
const util = require('util');
const fs = require('fs');


API.newF("spawn", function(type, name, properties) {


    // function for getting script parts
    const __getPart = (fileName) => {
        return fs.readFileSync(`${this.parent.actionPartsDir}/${fileName}.cs`, 'utf8')
    }


    // error stuff
    if (!type) this.parent.__err(0);
    if (!name) this.parent.__err(1);


    // getting the stuff
    let typeName = (typeof type == "string") ? type : type.name;
    let part;


    // if it's a game object type like Cube or Plane
    if ( Soup.from(this.parent.PrimitiveType).includes(typeName)) {
        part = __getPart(`GameObjectInit`);
        this.fileData.push(part
            .replace("PART_NAME_HERE", name)
            .replace("TYPE_NAME_HERE", typeName)
        );
    }

    // if it's not then it just creates it normally
    else {
        part = __getPart(`${typeName}Init`);
        this.fileData.push(part
            .replace("PART_NAME_HERE", name)
        );
    }


    // adding the properties
    if (properties) {
        Soup.from(properties).forEach( (prop, value) => {

            if (value instanceof this.parent.Vector3) value = `new Vector3(${ 
                    (value.x == parseInt(value.x)) ? value.x : `${value.x}f`
                }, ${
                    (value.y == parseInt(value.y)) ? value.y : `${value.y}f`
                }, ${
                    (value.z == parseInt(value.z)) ? value.z : `${value.z}f`
                })`;
            else value = JSON.stringify(value);
            
            this.fileData.push(`${name}.${prop} = ${value};`);
        });
    }
});
