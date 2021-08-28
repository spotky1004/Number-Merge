import Chapter1 from "./Chapter1.js";
import Chapter2 from "./Chapter2.js";
import Chapter3 from "./Chapter3.js";
import Chapter4 from "./Chapter4.js";
import ChapterExtra from "./ChapterExtra.js";

/** @type {import("../../types/WorldConstructor.js").WorldConstructor} */
const World = {
    description: "The starting world!",
    chapterOrder: [
        "Chapter1",
        "Chapter2",
        "Chapter3",
        "Chapter4",
    ],
    chapters: {
        Chapter1,
        Chapter2,
        Chapter3,
        Chapter4,
        ChapterExtra,
    },
    isUnlocked: () => true
};
export default World;
