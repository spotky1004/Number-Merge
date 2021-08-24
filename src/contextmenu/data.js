import ContextMenu from "./ContextMenu.js";

import saveData from "../saveData.js";
import MergeField from "../merge/MergeField.js";
import * as Levels from "../Levels/_init.js";
import * as saveload from "../saveload.js";

const contextMenu = new ContextMenu({
    Title: "Menu",
    Items: [
        {
            Title: "Restart (R)",
            func: () => MergeField.reloadStage()
        },
        {
            Title: "For now..."
        }
    ]
});

export default contextMenu;