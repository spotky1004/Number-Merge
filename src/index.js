import Dropdown from "./menu/data.js";
import MergeField from "./merge/MergeField.js";
import saveData from "./saveData.js";
import * as saveload from "./saveload.js";
import * as Levels from "./Levels/_init.js";

// For Debuging Purpose
window.MergeField = MergeField;
window.OpenStage = (chapter, stage) => {
    saveData.Playing.Chapter = chapter;
    saveData.Playing.Stage = stage;
    saveload.save(saveData);
    MergeField.openStage(Levels["Chapter" + chapter][stage-1]);
}

MergeField.openStage(Levels["Chapter" + saveData.Playing.Chapter][saveData.Playing.Stage-1]);
function Tick() {
    // Check The stage is Completed & If stage is completed, increment stage
    check: if (MergeField.loadedLevel !== null) {
        const Items = Object.entries(MergeField.items).map(e => e[1]);
        for (let i = 0; i < MergeField.loadedLevel.Goal.length; i++) {
            const idx = Items.findIndex((e) => e.symbol === MergeField.loadedLevel.Goal[i]);
            if (idx !== -1) {
                Items.splice(idx, 1);
            } else {
                break check;
            }
        }
        saveData.Playing.Stage++;
        if (saveData.Playing.Stage > 10) {
            saveData.Playing.Chapter++;
            saveData.Playing.Stage = 1;
            if (saveData.Playing.Chapter === saveData.Progress.Chapter) {
                saveData.Progress.Stage = 1;
            }
        }
        saveData.Progress.Chapter = Math.max(saveData.Playing.Chapter, saveData.Progress.Chapter);
        if (saveData.Playing.Chapter === saveData.Progress.Chapter) {
            saveData.Progress.Stage = Math.max(saveData.Playing.Stage, saveData.Progress.Stage);
        }
        MergeField.openStage(Levels["Chapter" + saveData.Playing.Chapter][saveData.Playing.Stage-1]);
        saveload.save(saveData);
    }

    // loop
    requestAnimationFrame(Tick);
}
requestAnimationFrame(Tick); // start loop

setInterval(function() {saveload.save(saveData);},5000); // Save every 5 second
