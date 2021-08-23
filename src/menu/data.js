import Dropdown from "./Dropdown.js";

import saveData from "../saveData.js";
import MergeField from "../merge/MergeField.js";
import * as Levels from "../Levels/_init.js";
import * as saveload from "../saveload.js";

const dropdown = new Dropdown({
    Title: "Menu",
    Items: [
        {
            Title: "Nothing to show"
        },
        {
            Title: "For now..."
        }
        // {
        //     Title: "Stage Select",
        //     Items: Array.from({ length: 2 }, (e, i) => e = {
        //             Title: `Chapter ${i+1}`,
        //             Items: Array.from({ length: 10 }, (e, j) => e = { 
        //                 Title: `Stage ${j+1}`,
        //                 func: new Function("saveData", `saveData.Playing.Chapter = ${i+1};saveData.Playing.Stage = ${j+1};MergeField.openStage(Levels["Chapter" + saveData.Playing.Chapter][saveData.Playing.Stage-1]);`),
        //                 clickable: new Function("saveData", `return saveData.Progress.Chapter*10+saveData.Progress.Stage >= ${(i+1)*10}+${j+1}`)
        //             })
        //         }
        //     )
        // }
    ]
});

export default dropdown;