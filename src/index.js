import MergeField from "./merge/MergeField.js";
import * as Levels from "./Levels/_init.js";

window.MergeField = MergeField;


const Progress = {
    chapter: 1,
    level: 1
};
MergeField.OpenStage(Levels["Chapter" + Progress.chapter][Progress.level-1]);
function Tick() {
    // Check Completed
    check: if (MergeField.loadedLevel !== null) {
        const Items = Object.entries(MergeField.items).map(e => e[1]);
        for (let i = 0; i < MergeField.loadedLevel.Goal.length; i++) {
            const idx = Items.findIndex(e => e.symbol === MergeField.loadedLevel.Goal[i]);
            if (idx !== -1) {
                Items.splice(idx, 1);
            } else {
                break check;
            }
        }
        Progress.level++;
        if (Progress.level > 10) {
            Progress.chapter++;
            Progress.level = 1;
        }
        MergeField.OpenStage(Levels["Chapter" + Progress.chapter][Progress.level-1]);
    }

    // loop
    requestAnimationFrame(Tick);
}
requestAnimationFrame(Tick); // start loop