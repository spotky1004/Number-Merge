import ContextMenu from "./ContextMenu.js";

import MergeField from "../merge/MergeField.js";
import { LocalStorageKey } from "../constants.js";

const contextMenu = new ContextMenu({
    Title: "Menu",
    Items: [
        {
            Title: "Restart (R)",
            func: () => MergeField.reloadStage()
        },
        {
            Title: "Options",
            
        },
        {
            Title: "Social Links",
            Items: [
                {
                    Title: "Discord",
                    func: () => window.open("https://discord.com/invite/wkdVQxT")
                },
                {
                    Title: "Youtube",
                    func: () => window.open("https://www.youtube.com/channel/UChnISIErP62cfpdu0DWucxw")
                },
                {
                    Title: "Github",
                    func: () => window.open("https://github.com/spotky1004")
                },
                {
                    Title: "Reddit",
                    func: () => window.open("https://www.reddit.com/user/spotky1004")
                }
            ]
        }
    ]
});

export default contextMenu;