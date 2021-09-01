/** @type { import("../../types/ChapterConstructor").ChapterConstructor } */
const Chapter = {
    description: "A chapter about Incrementer",
    isUnlocked: (saveData) => saveData.Completed.Main.length >= 27,
    unlockMessage: (saveData) => `Complete at least ${saveData.Completed.Main.length}/27 Stage to unlock this Chapter`,
    stages: [
        
    ]
};

export default Chapter;
