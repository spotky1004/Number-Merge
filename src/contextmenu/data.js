import ContextMenu from "./ContextMenu.js";

import MergeField from "../merge/MergeField.js";
import { LocalStorageKey } from "../constants.js";
import {
    toggleStageSelect
} from "../util.js";

const contextMenu = new ContextMenu({
    Title: "Menu",
    Items: [
        {
            Title: "Restart (R)",
            func: () => MergeField.reloadStage()
        },
        {
            Title: "Stage Select (S)",
            func: () => toggleStageSelect()
        },
        {
            Title: "Options",
            Items: [
                {
                    Title: "Reset Pogress",
                    Items: [
                        {
                            Title: "Reset Progress (3)",
                            Items: [
                                {
                                    Title: "Reset Progress (2)",
                                    Items: [
                                        {
                                            Title: "Reset Progress (1)",
                                            Items: [
                                                {
                                                    Title: "Reset Progress (Warning!)",
                                                    func: () => {
                                                        localStorage.removeItem(LocalStorageKey);
                                                        location.reload();
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
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