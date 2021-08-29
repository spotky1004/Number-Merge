/** @type { import("../../types/ChapterConstructor").ChapterConstructor } */
const Chapter = {
    description: "A chapter about Negative Numbers",
    isUnlocked: (saveData) => saveData.Completed.Main.length >= 8,
    unlockMessage: (saveData) => `Complete at least ${saveData.Completed.Main.length}/8 Stage to unlock this Chapter`,
    stages: [
        {
            Symbol: "2-1",
            Difficulty: 0,
            Title: "Minus!",
            Description: "Make -2",
            Goal: ["-2"],
            Items: [
                [
                    ["number", { symbol: -1 }],
                    ["number", { symbol: -1 }]
                ]
            ],
        },
        {
            Symbol: "2-2",
            Difficulty: 1,
            Title: "Minus-Minus",
            Description: "Make 4",
            Goal: ["4"],
            Items: [
                [
                    ["number", { symbol: -2 }],
                    ["number", { symbol: -6 }],
                ],
                [
                    ["operator", { symbol: "-" }]
                ],
            ],
        },
        {
            Symbol: "2-3",
            Difficulty: 3,
            Title: "",
            Description: "Make -75",
            Goal: ["-75"],
            Items: [
                [
                    ["number", { symbol: -3 }],
                    ["number", { symbol: -5 }],
                    ["number", { symbol: -11 }],
                ],
                [
                    ["operator", { symbol: "×" }],
                    ["operator", { symbol: "-" }],
                ],
            ],
        },
        {
            Symbol: "2-4",
            Difficulty: 4,
            Title: "Reverse",
            Description: "Make -50",
            Goal: ["-50"],
            Items: [
                [
                    ["term", { symbol: "0-" }],
                    ["term", { symbol: "0-" }],
                ],
                [
                    ["number", { symbol: -13 }],
                    ["number", { symbol: -7 }],
                    ["number", { symbol: -4 }],
                    ["number", { symbol: -3 }],
                ],
                [
                    ["operator", { symbol: "×" }],
                    ["operator", { symbol: "×" }],
                ],
            ],
        },
        {
            Symbol: "2-5",
            Difficulty: 3,
            Title: "Minus Zero",
            Description: "Make -32",
            Goal: ["-32"],
            Items: [
                [
                    ["number", { symbol: 0 }],
                    ["number", { symbol: 0 }],
                ],
                [
                    ["operator", { symbol: "×" }],
                    ["operator", { symbol: "×" }],
                ],
                [
                    ["operator", { symbol: "-" }],
                    ["operator", { symbol: "-" }],
                    ["operator", { symbol: "-" }],
                    ["operator", { symbol: "-" }],
                    ["operator", { symbol: "-" }],
                    ["operator", { symbol: "-" }],
                ],
            ],
        },
        {
            Symbol: "2-6",
            Difficulty: 4,
            Title: "-8 bit",
            Description: "Make -256",              
            Goal: ["-256"],
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
            Symbol: "2-7",
            Difficulty: 4,
            Title: "!suniMinus!",
            Description: "-25-",
            Goal: ["-25-"],
            Items: [
                [
                    ["operator", { symbol: "-" }]
                ],
                [
                    ["operator", { symbol: "×" }], ["operator", { symbol: "-" }]
                ],
                [
                    ["number", { symbol: 1 }],
                    ["number", { symbol: -2 }],
                    ["number", { symbol: 1 }],
                ],
                [
                    ["operator", { symbol: "-" }], ["operator", { symbol: "×" }]
                ],
                [
                    ["operator", { symbol: "-" }]
                ],
            ]
        },
        {
            Symbol: "2-8",
            Difficulty: 5,
            Title: "Primes",
            Description: "Make three Zeros",
            Goal: ["0", "0", "0"],
            Items: [
                [
                    ["number", { symbol: 2 }], ["number", { symbol: -3 }], ["number", { symbol: 5 }], ["number", { symbol: -7 }]
                ],
                [
                    ["number", { symbol: -11 }], ["number", { symbol: 13 }], ["number", { symbol: -17 }], ["number", { symbol: 19 }]
                ],
                [
                    ["number", { symbol: 23 }], ["number", { symbol: -29 }], ["number", { symbol: 31 }], ["number", { symbol: -37 }]
                ],
                [
                    ["number", { symbol: -41 }], ["number", { symbol: 43 }], ["number", { symbol: -47 }], ["number", { symbol: 53 }]
                ],
            ]
        },
        {
            Symbol: "2-9",
            Difficulty: 6,
            Title: "Approximate III",
            Description: "Make -35",
            Goal: ["-35"],
            Items: [
                [
                    ["number", { symbol: 7 }], ["number", { symbol: 2 }], ["number", { symbol: 7 }], ["number", { symbol: -2 }],
                ],
                [
                    ["operator", { symbol: "÷" }], ["operator", { symbol: "÷" }]
                ],
                [
                    ["operator", { symbol: "×" }]
                ]
            ]
        },
        {
            Symbol: "2-10",
            Difficulty: 3,
            Title: "The last stage",
            Description: "3ND-0F-TH3-CHAPTER-2",
            Goal: ["3ND-0F-TH3-CHAPTER-2"],
            Items: [
                [
                    ["text", { symbol: "T" }], ["text", { symbol: "H" }], ["text", { symbol: "E" }], ["operator", { symbol: "-" }],
                ],
                [
                    ["number", { symbol: "2" }], ["text", { symbol: "N" }], ["text", { symbol: "D" }], ["operator", { symbol: "-" }]
                ],
                [
                    ["text", { symbol: "C" }], ["text", { symbol: "A" }], ["text", { symbol: "P" }], ["operator", { symbol: "+" }],
                ],
                [
                    ["operator", { symbol: "-" }]
                ],
                [
                    ["text", { symbol: "F" }], ["text", { symbol: "H" }], ["text", { symbol: "T" }], ["text", { symbol: "R" }]
                ],
                [
                    ["number", { symbol: "10" }], ["number", { symbol: "20" }], ["number", { symbol: "30" }], ["number", { symbol: "40" }]
                ],
                [
                    ["number", { symbol: "50" }], ["number", { symbol: "60" }], ["number", { symbol: "70" }], ["number", { symbol: "80" }]
                ],
                [
                    ["operator", { symbol: "-" }], ["operator", { symbol: "-" }], ["operator", { symbol: "÷" }], ["operator", { symbol: "÷" }]
                ]
            ]
        }
    ]
}

export default Chapter;
