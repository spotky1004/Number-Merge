// datas
import saveData from "./saveData.js";
import Worlds from "./Worlds/_init.js";
// types
import World from "./Worlds/World.js";
import Chapter from "./types/ChapterConstructor.js";
import Stage from "./types/Stage.js";


const stageSelect = document.getElementById("stage-select");
export function displayWorlds() {
    for (const name in Worlds) {
        const World = Worlds[name];

        const item = document.createElement("div");
        stageSelect.append(item);
        
        const title = document.createElement("div");
        title.innerHTML = World.name;
        item.append(title);

        const description = document.createElement("div");
        description.innerHTML = World.description;
        item.append(description);

        const difficulty = document.createElement("div");
        difficulty.style.setProperty("--difficulty", World.difficulty ?? 0);
    }
}
export function displayChapters(idx) {

}
export function displayLevels(idx) {

}

// init
displayWorlds();
