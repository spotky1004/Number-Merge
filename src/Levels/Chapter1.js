/** @type { import("../types/Stage.js").Stage[] } */
const Chapter = [
    {
        Symbol: "1-1",
        Title: "Welcome",
        Description: "Make 10",
        Goal: ["10"],
        Items: [
            [
                ["Number", { symbol: 1 }], ["Number", { symbol: 2 }]
            ],
            [
                ["Number", { symbol: 3 }], ["Number", { symbol: 4 }]
            ]
        ]
    },
    {
        Symbol: "1-2",
        Description: "Make two 5",
        Title: "Double",
        Goal: ["5", "5"],
        Items: [
            [
                ["Number", { symbol: 1 }], ["Number", { symbol: 2 }]
            ],
            [
                ["Number", { symbol: 3 }], ["Number", { symbol: 4 }]
            ]
        ]
    },
    {
        Symbol: "1-3",
        Title: "Increment",
        Description: "Make 4 and 7",
        Goal: ["4", "7"],
        Items: [
            [
                ["Number", { symbol: 8 }], ["Number", { symbol: 3 }]
            ],
            [
                ["Operator", { symbol: "+" }], ["Operator", { symbol: "-" }]
            ]
        ]
    },
    {
        Symbol: "1-4",
        Title: "Calculate",
        Description: "Make 3",
        Goal: ["3"],
        Items: [
            [
                ["Number", { symbol: 2 }], ["Operator", { symbol: "-" }], ["Number", { symbol: 5 }]
            ]
        ]
    },
    {
        Symbol: "1-5",
        Title: "Increment & Calculate",
        Description: "Make 15",
        Goal: ["15"],
        Items: [
            [
                ["Number", { symbol: 5 }], ["Number", { symbol: 2 }]
            ],
            [
                ["Operator", { symbol: "×" }], ["Operator", { symbol: "+" }]
            ]
        ]
    },
    {
        Symbol: "1-6",
        Title: "A big number",
        Description: "Make 100",
        Goal: ["100"],
        Items: [
            [
                ["Number", { symbol: 5 }], ["Number", { symbol: 5 }]
            ],
            [
                ["Operator", { symbol: "×" }], ["Operator", { symbol: "×" }], ["Operator", { symbol: "-" }]
            ]
        ]
    },
    {
        Symbol: "1-7",
        Title: "Divide",
        Description: "Make 6",
        Goal: ["6"],
        Items: [
            [
                ["Number", { symbol: 12 }], ["Number", { symbol: 36 }], ["Number", { symbol: 3 }]
            ],
            [
                ["Operator", { symbol: "÷" }]
            ]
        ]
    },
    {
        Symbol: "1-8",
        Title: "Approximate",
        Description: "Make 9",
        Goal: ["9"],
        Items: [
            [
                ["Number", { symbol: 17 }], ["Number", { symbol: 17 }]
            ],
            [
                ["Number", { symbol: 3 }], ["Number", { symbol: 4 }],
            ],
            [
                ["Operator", { symbol: "÷" }], ["Operator", { symbol: "÷" }]
            ]
        ]
    },
    {
        Symbol: "1-9",
        Title: "8 bit",
        Description: "Make 256",
        Goal: ["256"],
        Items: [
            [
                ["Number", { symbol: 1 }],
                ["Number", { symbol: 1 }],
                ["Number", { symbol: 1 }],
                ["Number", { symbol: 1 }],
                ["Number", { symbol: 1 }],
                ["Number", { symbol: 1 }],
                ["Number", { symbol: 1 }],
                ["Number", { symbol: 1 }],
            ],
            [
                ["Operator", { symbol: "+" }], ["Operator", { symbol: "-" }], ["Operator", { symbol: "×" }], ["Operator", { symbol: "÷" }]
            ],
            [
                ["Operator", { symbol: "+" }], ["Operator", { symbol: "-" }], ["Operator", { symbol: "×" }], ["Operator", { symbol: "÷" }]
            ]
        ]
    },
    {
        Symbol: "1-10",
        Title: "Approximate II",
        Description: "Make 9, 9, 11, 11",
        Goal: ["9", "9", "11", "11"],
        Items: [
            [
                ["Term", { symbol: "140÷" }],
                ["Term", { symbol: "145÷" }],
                ["Term", { symbol: "150÷" }],
                ["Term", { symbol: "160÷" }],
            ],
            [
                ["Number", { symbol: 13 }],
                ["Number", { symbol: 14 }],
                ["Number", { symbol: 15 }],
                ["Number", { symbol: 16 }],
            ],
        ]
    }
];

export default Chapter;
