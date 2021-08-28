// datas
import saveData from "./saveData.js";
import Worlds from "./Worlds/_init.js";
// types
import World from "./Worlds/World.js";
import Chapter from "./types/ChapterConstructor.js";
import Stage from "./types/Stage.js";

const stageSelectTitle = document.getElementById("stage-select-title");
const stageSelect = document.getElementById("stage-select-list");
export function displayWorlds() {
    stageSelectTitle.innerHTML = "Worlds";
    stageSelect.innerHTML = "";

    for (const name in Worlds) {
        const World = Worlds[name];
        addListItem(World);
    }
}
export function displayChapters(idx) {

}
export function displayLevels(idx) {

}

function addListItem(data) {
    const item = document.createElement("div");
    item.classList.add("stage-item");
    stageSelect.append(item);
    
    const title = document.createElement("div");
    title.classList.add("stage-title");
    title.innerHTML = data.name;
    item.append(title);

    const description = document.createElement("div");
    description.classList.add("stage-description");
    description.innerHTML = data.description;
    item.append(description);

    const difficulty = document.createElement("div");
    const _difficulty = data.Difficulty;
    difficulty.classList.add("stage-difficulty");
    console.log(difficultyColor(_difficulty));
    difficulty.style.background = ` linear-gradient(
        90deg,
        ${difficultyColor(_difficulty)} ${_difficulty*10}%,
        #333 ${_difficulty*10}%
    )`;
    difficulty.innerText = _difficulty;
    item.append(difficulty);
}

function difficultyColor(difficulty) {
    const per = difficulty/10;
    return `#${Math.floor(per*255).toString(16).padStart(2, "0")}${Math.floor((1-per)*255).toString(16).padStart(2, "0")}00`
}

// init
displayWorlds();
