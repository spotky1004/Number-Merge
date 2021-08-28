// datas
import saveData from "./saveData.js";
import Worlds from "./Worlds/_init.js";
// types
import World from "./Worlds/World.js";
import Chapter from "./Worlds/Chapter.js";
// etc
import { WorldNames } from "./constants.js";
import { closeStageSelect } from "./util.js";

const stageSelectStatus = {
    watching: "Worlds",
    /** @type {World|Chapter} */
    data: Worlds,
};

export function selected(param) {
    if (!isNaN(+param)) {
        switch (stageSelectStatus.watching) {
            case "Worlds":
                displayWorld(param);
                break;
            case "World":
                displayChapter(param);
                break;
            case "Chapter":
                stageSelectStatus.data.parent.openStage(
                    stageSelectStatus.data.name,
                    param,
                    saveData
                );
                closeStageSelect();
                break;
        }
    } else if (param === "back") {
        switch (stageSelectStatus.watching) {
            case "Worlds":
                closeStageSelect();
                break;
            case "World":
                displayWorlds();
                break;
            case "Chapter":
                displayWorld(WorldNames.findIndex(e => e === stageSelectStatus.data.parent.name));
                break;
        }
    }
}

const stageSelectTitle = document.getElementById("stage-select-title");
const stageSelect = document.getElementById("stage-select-list");
export function displayWorlds() {
    stageSelectStatus.watching = "Worlds";
    stageSelectStatus.data = Worlds;
    stageSelectTitle.innerHTML = "Worlds";
    stageSelect.innerHTML = "";

    let i = 0;
    for (const name in Worlds) {
        const World = Worlds[name];
        const item = addListItem(World, i);

        item.dataset.idx = i;
        i++;
    }
}
function displayWorld(idx) {
    const World = Worlds[WorldNames[idx]];

    stageSelectStatus.watching = "World";
    stageSelectStatus.data = World;
    stageSelectTitle.innerHTML = "World";
    stageSelect.innerHTML = "";
    
    for (let i = 0; i < World.chapterOrder.length; i++) {
        const Chapter = World.chapters[World.chapterOrder[i]];
        const item = addListItem(Chapter, i);

        item.dataset.idx = i;
    }
}
function displayChapter(idx) {
    const Chapter = stageSelectStatus.data.chapters[stageSelectStatus.data.chapterOrder[idx]];

    stageSelectStatus.watching = "Chapter";
    stageSelectStatus.data = Chapter;
    stageSelectTitle.innerHTML = "Chapter";
    stageSelect.innerHTML = "";

    for (let i = 0; i < Chapter.stages.length; i++) {
        const Stage = Chapter.stages[i];
        const item = addListItem(Stage, i);

        item.dataset.idx = i;
    }
}

function addListItem(data) {
    const item = document.createElement("div");
    item.classList.add("stage-item");
    stageSelect.append(item);
    
    const title = document.createElement("div");
    title.classList.add("stage-title");
    title.innerHTML = data.name ?? data.Symbol ?? "";
    item.append(title);
    if (data.isCompleted()) title.style.color = "#ebd234";

    const description = document.createElement("div");
    description.classList.add("stage-description");
    description.innerHTML = data.description ?? "";
    item.append(description);

    const difficulty = document.createElement("div");
    difficulty.classList.add("stage-difficulty");
    if (typeof data.maxDifficulty !== "undefined") {
        const _difficulty = [
            Math.min(data.maxDifficulty, data.minDifficulty) || 0,
            data.maxDifficulty || 0
        ];
        difficulty.innerText = _difficulty[0].toFixed(1) + " ~ " + _difficulty[1].toFixed(1);
        difficulty.style.background = `linear-gradient(
            90deg,
            #333 ${_difficulty[0]*10}%,
            ${difficultyColor(_difficulty[0])} ${_difficulty[0]*10}%,
            ${difficultyColor(_difficulty[1])} ${_difficulty[1]*10}%,
            #333 ${_difficulty[1]*10}%
        )`;
    } else if (typeof data.Difficulty !== "undefined") {
        const _difficulty = data.Difficulty;
        difficulty.innerText = _difficulty.toFixed(1);
        difficulty.style.background = `linear-gradient(
            90deg,
            ${difficultyColor(_difficulty)} ${_difficulty*10}%,
            #333 ${_difficulty*10}%
        )`;
    }
    item.append(difficulty);

    if (
        ( data.constructor.name === "World" || data.constructor.name === "Chapter") && (
            typeof data.isUnlocked !== "undefined" && !data.isUnlocked(saveData)
        )
    ) {
        item.style.pointerEvents = "none";
        item.style.opacity = 0.5;
        item.childNodes[0].innerText = "Locked!";
        item.childNodes[1].innerText = data.unlockMessage(saveData) ?? "Coming Soon!";
    }

    return item;
}

function difficultyColor(difficulty) {
    const per = difficulty/10;
    return `#${Math.floor(per*255).toString(16).padStart(2, "0")}${Math.floor((1-per)*255).toString(16).padStart(2, "0")}00`
}

// init
displayWorlds();
