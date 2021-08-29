import Chapter666 from "./666.js";
import Chapter69 from "./69.js";
import Sigma from "./Sigma.js";

/** @type {import("../../types/WorldConstructor.js").WorldConstructor} */
const World = {
    description: "The world made by community",
    chapterOrder: [
        "Chapter666",
        "Chapter69",
        "Sigma",
    ],
    chapters: {
        Chapter666,
        Chapter69,
        Sigma,
    },
    isUnlocked: () => true
};
export default World;
