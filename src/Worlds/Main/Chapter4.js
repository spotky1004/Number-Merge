/** @type { import("../../types/ChapterConstructor").ChapterConstructor } */
const Chapter = {
    description: "A chapter about Incrementer",
    isUnlocked: (saveData) => saveData.Completed.Main.length >= 27,
    unlockMessage: (saveData) => `Complete at least ${saveData.Completed.Main.length}/27 Stage to unlock this Chapter`,
    stages: [
        {
            Symbol: "4-1",
            Difficulty: 3,
            Title: "Incrementer!",
            Description: "Make 120",
            Goal: ["120"],
            Items: [
                [
                    ["number", { symbol: 0 }], ["number", { symbol: 0 }], ["number", { symbol: 0 }], ["number", { symbol: 0 }]
                ],
                [
                    ["incrementer", { symbol: 1 }]
                ]
            ]
        },
    ]
};

export default Chapter;
