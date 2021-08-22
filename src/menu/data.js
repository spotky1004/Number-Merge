import Dropdown from "./Dropdown.js";

import saveData from "../saveData.js";
import MergeField from "../merge/MergeField.js";
import * as Levels from "../Levels/_init.js";
import * as saveload from "../saveload.js";

const dropdown = new Dropdown({
    Title: "Menu",
    Items: [
        {
            Title: "Stage Select",
            Items: Array.from({ length: 2 }, (e, i) => e = {
                    Title: `Chapter ${i+1}`,
                    Items: Array.from({ length: 10 }, (e, j) => e = { 
                        Title: `Stage ${j+1}`,
                        func: new Function("saveData", `saveData.Playing.Chapter = ${i+1};saveData.Playing.Stage = ${j+1};MergeField.openStage(Levels["Chapter" + saveData.Playing.Chapter][saveData.Playing.Stage-1]);`),
                        clickable: new Function("saveData", `return saveData.Progress.Chapter*10+saveData.Progress.Stage >= ${(i+1)*10}+${j+1}`)
                    })
                }
            )
        }
    ]
});

// 이것들은 버려지는건가요 ㅠㅠㅠㅠㅠㅠㅠ 불쌍해
// ㅓ...
function OpenStage(chapter, stage) {
    saveData.Playing.Chapter = chapter;
    saveData.Playing.Stage = stage;
    saveload.save(saveData);
    MergeField.openStage(Levels["Chapter" + chapter][stage-1]);
}

function loadStages(saveData) {
    const res = []

    for (let i = 0; i < saveData.Progress.Chapter; i++) { 
        const stages = [];
        const stageCount = saveData.Playing.Chapter > i+1 ? 10 : saveData.Progress.Stage
        for (let j = 0; j < stageCount; j++) {
            if (i === saveData.Playing.Chapter && j === saveData.Playing.Stage) {
                stages.push({ Title: "Playing" })
                continue;
            }
            stages.push({ Title: `Stage ${j+1}`, func: () => OpenStage(i+1, j+1) })
        }
        res.push({ Title: `Chapter ${i+1}`, Items: stages })
    }

    console.log(res);
    return res;
}

export default dropdown;