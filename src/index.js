import MergeField from "./merge/MergeField.js";
import * as saveload from "./saveload.js";
import * as Levels from "./Levels/_init.js";

window.MergeField = MergeField;
window.OpenStage = (chapter, stage) => {
    MergeField.openStage(Levels["Chapter" + chapter][stage-1]);
}

const saveData = saveload.load();
MergeField.openStage(Levels["Chapter" + saveData.Progress.Chapter][saveData.Progress.Stage-1]);
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
        saveData.Progress.Stage++;
        if (saveData.Progress.Stage > 10) {
            saveData.Progress.Chapter++;
            saveData.Progress.Stage = 1;
        }
        MergeField.openStage(Levels["Chapter" + saveData.Progress.Chapter][saveData.Progress.Stage-1]);
        saveload.save(saveData);
    }

    // loop
    requestAnimationFrame(Tick);
}
requestAnimationFrame(Tick); // start loop