/** @type { import("../types/Stage.js").Stage[] } */
const Chapter = [
    {
        Level: "1-1",
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
        Level: "1-2",
        Description: "Make two 5",
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
        Level: "1-3",
        Description: "Make 4, 7",
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
        Level: "1-4",
        Description: "Make 3",
        Goal: ["3"],
        Items: [
            [
                ["Number", { symbol: 2 }], ["Operator", { symbol: "-" }], ["Number", { symbol: 5 }]
            ]
        ]
    },
    {
        Level: "1-5",
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
        Level: "1-6",
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
        Level: "1-7",
        Description: "hehe",
        Goal: [null],
        Items: [
            [
                ["Operator", { symbol: "H" }], ["Operator", { symbol: "e" }], ["Operator", { symbol: "H" }], ["Operator", { symbol: "e" }]
            ]
        ]
    }
];

export default Chapter;
