/** @type { import("../../types/ChapterConstructor").ChapterConstructor } */
const Chapter = {
    description: "A chapter about Incrementer",
    isUnlocked: (saveData) => saveData.Completed.Main.length >= 27,
    unlockMessage: (saveData) => `Complete at least ${saveData.Completed.Main.length}/27 Stage to unlock this Chapter`,
    stages: [
        {
            Symbol: "4-1",
            Difficulty: 2,
            Title: "Incrementer!",
            Description: "Make 55",
            Goal: ["55"],
            Items: [
                [
                    ["number", { symbol: 0 }], ["number", { symbol: 0 }], ["number", { symbol: 0 }]
                ],
                [
                    ["number", { symbol: 0 }], ["number", { symbol: 0 }], ["number", { symbol: 0 }]
                ],
                [
                    ["incrementer", { symbol: 1 }]
                ],
                [
                    ["number", { symbol: 0 }], ["number", { symbol: 0 }], ["number", { symbol: 0 }]
                ],
                [
                    ["number", { symbol: 0 }], ["number", { symbol: 0 }], ["number", { symbol: 0 }]
                ],
            ]
        },
        {
            Symbol: "4-2",
            Difficulty: 3,
            Title: "Exponential Growth",
            Description: "Make a biggest possible number",
            Goal: ["136"],
            Items: [
                [
                    ["incrementer", { symbol: 1 }]
                ],
                [
                    ["number", { symbol: 0 }], ["number", { symbol: 0 }], ["number", { symbol: 0 }], ["number", { symbol: 0 }]
                ],
                [
                    ["incrementer", { symbol: 1 }]
                ]
            ]
        },
        {
            Symbol: "4-3",
            Difficulty: 5,
            Title: "Locked & Lock",
            Description: "Make 100 (99 + 1)",
            Goal: ["100"],
            Items: [
                [
                    ["incrementer", { symbol: 1, locked: true }]
                ],
                [
                    ["number", { symbol: 0 }], ["number", { symbol: 0 }], ["number", { symbol: 0 }], ["number", { symbol: 0 }], ["number", { symbol: 0 }]
                ],
                [
                    ["operator", { symbol: "×" }], ["operator", { symbol: "×" }], ["operator", { symbol: "×" }]
                ]
            ]
        },
        {
            Symbol: "4-4",
            Difficulty: 7,
            Title: "Asterisk",
            Description: "Make 598752001",
            Goal: ["598752001"],
            Items: [
                [
                    ["operator", { symbol: "×" }], ["operator", { symbol: "×" }]
                ],
                [
                    ["number", { symbol: 1 }], ["number", { symbol: 1}], ["number", { symbol: 1}]
                ],
                [
                    ["operator", { symbol: "!"}], ["number", { symbol: 1}], ["incrementer", { symbol: 1, locked: true }], ["number", { symbol: 1}], ["operator", { symbol: "!"}]
                ],
                [
                    ["number", { symbol: 1 }], ["number", { symbol: 1}], ["number", { symbol: 1}]
                ],
                [
                    ["term", { symbol: "1-" }], ["term", { symbol: "1-" }]
                ]
            ]
        }
    ]
};

export default Chapter;
