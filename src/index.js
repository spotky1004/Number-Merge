import MergeField from "./merge/MergeField.js";
import saveData from "./saveData.js";
import * as saveload from "./saveload.js";
import Worlds from "./Worlds/_init.js";
import * as StageSelect from "./stageSelect.js";



// For Debuging Purpose
// window.MergeField = MergeField;
// window.Worlds = Worlds;
// window.OpenStage = (world, chapter, stage) => {
//     saveData.Playing.World = world;
//     saveData.Playing.Chapter = chapter;
//     saveData.Playing.Stage = stage;
//     Worlds[world].openStage(chapter, stage, saveData);
//     saveload.save(saveData);
// }


// init variable
const StageIncrementButton = document.getElementById("increment-stage");

// Open level on start
try {
    Worlds[saveData.Playing.World].openStage(saveData.Playing.Chapter, saveData.Playing.Stage, saveData);
} catch {
    Worlds.Main.openStage("Chapter1", 0, saveData);
}


// Game loop
function Tick() {
    // Check The stage is Completed
    if (MergeField.checkCompleted()) {
        Worlds[saveData.Playing.World].completeStage();
        StageSelect.displayWorlds(); // To reset completed stage highlight
        StageIncrementButton.style.display = "";
    } else {
        StageIncrementButton.style.display = "none";
    }
    MergeField.renderBranch();
    
    // loop
    requestAnimationFrame(Tick);
}
requestAnimationFrame(Tick); // start Tick loop



// Save every 5 second
setInterval(function() {saveload.save(saveData);},5000);
