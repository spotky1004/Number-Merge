import contextMenu from "./contextmenu/data.js";
import MergeField from "./merge/MergeField.js";
import saveData from "./saveData.js";
import * as saveload from "./saveload.js";
import * as Worlds from "./Worlds/_init.js";

// For Debuging Purpose
window.MergeField = MergeField;
window.OpenStage = (chapter, stage) => {
    saveData.Playing.Chapter = chapter;
    saveData.Playing.Stage = stage;
    saveload.save(saveData);
    MergeField.openStage(Levels["Chapter" + chapter][stage-1]);
}

function Tick() {
    // Check The stage is Completed
    if (MergeField.checkCompleted()) {
        // do something
    }

    // loop
    requestAnimationFrame(Tick);
}
requestAnimationFrame(Tick); // start loop

setInterval(function() {saveload.save(saveData);},5000); // Save every 5 second
