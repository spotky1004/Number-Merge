import Chapter666 from "./666.js";
import Chapter69 from "./69.js";

/** @type {import("../../types/WorldConstructor.js").WorldConstructor} */
const World = {
    description: "The world made by community",
    chapterOrder: [
        "Chapter666",
        "Chapter69",
    ],
    chapters: {
        Chapter666,
        Chapter69
    },
    isUnlocked: () => true
};
export default World;
