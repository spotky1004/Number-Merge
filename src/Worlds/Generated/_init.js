import ChapterI from "./ChapterI.js";

/** @type {import("../../types/WorldConstructor.js").WorldConstructor} */
const World = {
  description: "The generated world",
  chapterOrder: [
    "ChapterI",
  ],
  chapters: {
    ChapterI,
  },
  isUnlocked: () => true
};
export default World;
