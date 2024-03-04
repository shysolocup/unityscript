const { ProjectSettings } = require('unityscript/src/Typings/ProjectSettings/index.js');
const yaml = require('js-yaml');



ProjectSettings.newF("translate", function(data) {

    // most of this is string formatting sorry it's so messy
    let stuff = data.split("--- !u");
    stuff.shift();

    let ids = [];

    stuff = stuff.map( s => {
        s = s.split(/(\r\n|\n|\r)/gm);
        let id = s.shift();
        let eid = parseInt(id.split(" ")[0].replace("!", ""));
        let fileID = parseInt(id.split(" ")[1].replace("&", ""));
        ids.push({ id: id, eid: eid, fileID: fileID});
        s = s.filter( thing => !(thing == "\r\n") );
        return s;
    });
    // k messy is mostly over
    

    // removes more whitespace :skull:
    stuff = stuff.map( s => s.filter( miniStuff => {
        return miniStuff.replace(/(\r\n|\n|\r)/gm, "").replace(/\s/, "").length > 1
    }));


    // nvm more messy
    stuff.forEach( (s, i) => {
        let name = s[0].replace(":", ""); // removes the : from the name of the property
        let { fileID } = ids[i]; // gets the file id

        try {
            // if the type class doesn't already exist create it
            if (!this.parent[name]) {
                this.parent.newC(name, class extends this.parent.BaseType {
                    constructor(settings) {
                        super(settings);
                    }
                });
            }


            let obj = this.__createSetting(name, stuff); // creates a new child obj


            // finally adds it to the children
            this.push(name, obj);
            
        } catch(e) {
            console.log(e);
        }
    });
});
