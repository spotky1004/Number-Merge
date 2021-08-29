/** @type { import("../../types/ChapterConstructor").ChapterConstructor } */
const Chapter = {
    description: "A chapter about Operators",
    isUnlocked: (saveData) => true,
    stages: [
        {
            Symbol: "1-1",
            Difficulty: 0,
            Title: "Welcome",
            Description: "Make 10",
            Goal: ["10"],
            Items: [
                [
                    ["number", { symbol: 1 }], ["number", { symbol: 2 }]
                ],
                [
                    ["number", { symbol: 3 }], ["number", { symbol: 4 }]
                ]
            ]
        },
        {
            Symbol: "1-2",
            Difficulty: 0,
            Description: "Make two 5",
            Title: "Double",
            Goal: ["5", "5"],
            Items: [
                [
                    ["number", { symbol: 1 }], ["number", { symbol: 2 }]
                ],
                [
                    ["number", { symbol: 3 }], ["number", { symbol: 4 }]
                ]
            ]
        },
        {
            Symbol: "1-3",
            Difficulty: 1,
            Title: "Increment",
            Description: "Make 4 and 7",
            Goal: ["4", "7"],
            Items: [
                [
                    ["number", { symbol: 8 }], ["number", { symbol: 3 }]
                ],
                [
                    ["operator", { symbol: "+" }], ["operator", { symbol: "-" }]
                ]
            ]
        },
        {
            Symbol: "1-4",
            Difficulty: 1,
            Title: "Calculate",
            Description: "Make 3",
            Goal: ["3"],
            Items: [
                [
                    ["number", { symbol: 2 }], ["operator", { symbol: "-" }], ["number", { symbol: 5 }]
                ]
            ]
        },
        {
            Symbol: "1-5",
            Difficulty: 1,
            Title: "Increment & Calculate",
            Description: "Make 15",
            Goal: ["15"],
            Items: [
                [
                    ["number", { symbol: 5 }], ["number", { symbol: 2 }]
                ],
                [
                    ["operator", { symbol: "×" }], ["operator", { symbol: "+" }]
                ]
            ]
        },
        {
            Symbol: "1-6",
            Difficulty: 2,
            stageRules: {
                MustUseAllItems: true
            },
            Title: "A big number",
            Description: "Make 100",
            Goal: ["100"],
            Items: [
                [
                    ["number", { symbol: 5 }], ["number", { symbol: 5 }]
                ],
                [
                    ["operator", { symbol: "×" }], ["operator", { symbol: "×" }], ["operator", { symbol: "-" }]
                ]
            ]
        },
        {
            Symbol: "1-7",
            Difficulty: 2,
            Title: "Divide",
            Description: "Make 6",
            Goal: ["6"],
            Items: [
                [
                    ["number", { symbol: 12 }], ["number", { symbol: 36 }], ["number", { symbol: 3 }]
                ],
                [
                    ["operator", { symbol: "÷" }]
                ]
            ]
        },
        {
            Symbol: "1-8",
            Difficulty: 3,
            stageRules: {
                MustUseAllItems: true
            },
            Title: "Approximate",
            Description: "Make 9",
            Goal: ["9"],
            Items: [
                [
                    ["number", { symbol: 17 }], ["number", { symbol: 17 }]
                ],
                [
                    ["number", { symbol: 3 }], ["number", { symbol: 4 }],
                ],
                [
                    ["operator", { symbol: "÷" }], ["operator", { symbol: "÷" }]
                ]
            ]
        },
        {
            Symbol: "1-9",
            Difficulty: 3,
            Title: "8 bit",
            Description: "Make 256",
            Goal: ["256"],
            Items: [
                [
                    ["number", { symbol: 1 }],
                    ["number", { symbol: 1 }],
                    ["number", { symbol: 1 }],
                    ["number", { symbol: 1 }],
                    ["number", { symbol: 1 }],
                    ["number", { symbol: 1 }],
                    ["number", { symbol: 1 }],
                    ["number", { symbol: 1 }],
                ],
                [
                    ["operator", { symbol: "+" }], ["operator", { symbol: "-" }], ["operator", { symbol: "×" }], ["operator", { symbol: "÷" }]
                ],
                [
                    ["operator", { symbol: "+" }], ["operator", { symbol: "-" }], ["operator", { symbol: "×" }], ["operator", { symbol: "÷" }]
                ]
            ]
        },
        {
            Symbol: "1-10",
            Difficulty: 4,
            Title: "Approximate II",
            Description: "Make 9, 9, 11, 11",
            Goal: ["9", "9", "11", "11"],
            Items: [
                [
                    ["term", { symbol: "140÷" }],
                    ["term", { symbol: "145÷" }],
                    ["term", { symbol: "150÷" }],
                    ["term", { symbol: "160÷" }],
                ],
                [
                    ["number", { symbol: 13 }],
                    ["number", { symbol: 14 }],
                    ["number", { symbol: 15 }],
                    ["number", { symbol: 16 }],
                ],
            ]
        }
    ]
};

export default Chapter;
