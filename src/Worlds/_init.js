import World from "./World.js";

// Import Worlds
import Main from "./Main/_init.js";
import Community from "./Community/_init.js";

/** @type {Object.<string, World>} */
let Worlds = { Main, Community };
for (const name in Worlds) {
    Worlds[name] = new World(Worlds[name], name);
}

export default Worlds;
