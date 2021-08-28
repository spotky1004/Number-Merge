import Chapter666 from "./666.js";

/** @type {import("../../types/WorldConstructor.js").WorldConstructor} */
const World = {
    description: "The world made my community",
    chapterOrder: [
        "Chapter666",
    ],
    chapters: {
        Chapter666
    },
    isUnlocked: () => true
};
export default World;
