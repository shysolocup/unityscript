---

# <a href="https://github.com/paishee/unityscript"><img height=100 src="https://github.com/paishee/unityscript/blob/main/assets/unityscript%20w%20text.png" alt="UnityScript">

<a href="https://www.npmjs.com/package/unityscript"><img height=22 src="https://img.shields.io/npm/v/unityscript?style=flat&color=red&logo=npm&logoColor=white" alt="version" />
<a href="https://www.npmjs.com/package/unityscript"><img height=22 src="https://img.shields.io/npm/dt/unityscript?style=flat&color=green&logo=docusign&logoColor=white" alt="downloads" />
<a href="https://npmjs.com/package/aepl"><img src="https://img.shields.io/badge/powered%20by-aepl-a?color=blue&logo=npm&logoColor=white" alt="powered by aepl" /></a>
<a href="https://github.com/paishee/unityscript/wiki"><img height=22 src="https://img.shields.io/badge/documentation-blue?style=flat&color=purple&logo=github&logoColor=white" alt="documentation" />
<img height=22 src="https://github.com/paishee/unityscript/actions/workflows/publish.yml/badge.svg" alt="publish">

UnityScript is an early access JavaScript to C# compiler and API wrapper package for the game engine Unity<br>

⚠️ __PLEASE NOTE:__
this package is currently in early access and is far from finished ⚠️ 

<br>

```console
npm i noscord.js
```
```console
npm i paishee/noscord.js
```

<br>

--- 

<br><br>

```js
const { Workspace } = require('unityscript');
const workspace = new Workspace();


workspace.on("ready", (ctx) => {
    const scene = ctx.scenes.first();

    scene.create("Cube", {
        localPosition: { x: 0, y: 5, z: 0 }
    });
});


workspace.open("C:/Users/owner/MyProject");
```

<br>

## Disclaimer
this project is created out of pure boredom and coolness<br>
this project and the developers behind it are:
- not associated with Unity or its developers
- not responsible for anything created

<br><br>

## Collaborators

<table>
    
  <tr>
    <td align="center"><a href="https://github.com/paishee"><img src="https://avatars.githubusercontent.com/u/88659700?v=4?s=100" width="100px;" alt="me"/><br /><sub><b>paishee</b></sub></a><br/>
    <td align="center"><a href="https://github.com/polish-penguin-dev"><img src="https://avatars.githubusercontent.com/u/74113025?v=4?s=100" width="100px;" alt="penguins"/><br /><sub><b>penguin dev</b></sub></a><br/>
</td>
    
      
</table>
