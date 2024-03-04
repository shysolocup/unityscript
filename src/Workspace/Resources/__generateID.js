const { Workspace } = require('../index.js');
const { random } = require('stews');


Workspace.newF("__generateID", function(length=5, characters=null) {
    characters = (characters) ? characters : "abcdefghijklmnopqrstuvwxyz1234567890-_"
    if (typeof characters == "string") characters = characters.split("");
    let id = "";
    
    for (let i = 0; i < length; i++) {
        id += random.choice(characters);
    }

    return id;
});
