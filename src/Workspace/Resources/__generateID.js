const { Workspace } = require('../index.js');
const random = require('@stews/random');


Workspace.newF("__generateID", function(length=5, characters=null) {
    characters = (characters) ? characters : "abcdefghijklmnopqrstuvwxyz1234567890-_".split("");
    let id = "";
    
    for (let i = 0; i < length; i++) {
        id += random.choice(characters);
    }

    return id;
});
