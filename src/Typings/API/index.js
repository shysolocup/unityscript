const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);


class API {
    constructor(fileData) {
        this.workspace = this.parent;
        this.fileData = fileData;
    }


    __getPart = (fileName) => {
        return fs.readFileSync(`${this.scriptPartsDir}/${fileName}.cs`, 'utf8')
    }


    spawn(type, name, properties) {

        // error stuff
        if (!this.type) this.parent.__err(0);
        if (!this.name) this.parent.__err(1);


        // getting the stuff
        let typeName = (typeof type == "string") ? type : type.name;
        let part;


        // if it's a game object type like Cube or Plane
        if ( this.GameObject.types.includes(typeName)) {
            part = this.__getPart(`GameObjectInit`);
            this.fileData.push(part
                .replace("PART_NAME_HERE", name)
                .replace("TYPE_NAME_HERE", typeName)
            );
        }

        // if it's not then it just creates it normally
        else {
            part = this.__getPart(`${typeName}Init`);
            this.fileData.push(part
                .replace("PART_NAME_HERE", name)
            );
        }


        // adding the properties
        Soup.from(properties).forEach( (prop, value) => {
            this.fileData.push(`${name}.${prop} = ${value};`);
        });
    }
}


OUT.push("API", aepl.init("API", API));
module.exports = OUT.pour();