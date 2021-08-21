/** @type { import("../types/Stage.js").Stage[] } */
const Chapter = [
    {
        Symbol: "2-1",
        Title: "Factorials!",
        Description: "Make 120",
        Goal: ["120"],
        Items: [
            [
                ["Number", { symbol: 5 }]
            ],
            [
                ["Operator", { symbol: "!" }]
            ]
        ],
    },
    {
        Symbol: "2-2",
        Title: "pseudo-Factorials!",
        Description: "Make 12",
        Goal: ["12"],
        Items: [
            [
                ["Number", { symbol: 2 }],
                ["Number", { symbol: 4 }],
            ],
            [
                ["Operator", { symbol: "!" }]
            ],
        ],
    },
    {
        Symbol: "2-3",
        Title: "Harder?",
        Description: "Make 144",
        Goal: ["144"],
        Items: [
            [
                ["Number", { symbol: 2 }],
                ["Number", { symbol: 4 }],
            ],
            [
                ["Operator", { symbol: "!" }],
                ["Operator", { symbol: "×" }],
            ],
        ],
    },
    {
        Symbol: "2-4",
        Title: "",
        Description: "Make 18",
        Goal: ["18"],
        Items: [
            [
                ["Number", { symbol: 7 }],
                ["Number", { symbol: 7 }],
                ["Number", { symbol: 3 }],
                ["Number", { symbol: 2 }],
            ],
            [
                ["Operator", { symbol: "!" }],
                ["Operator", { symbol: "×" }],
                ["Operator", { symbol: "÷" }],
            ],
        ],
    },
    {
        Symbol: "2-5",
        Title: "What?",
        Description: "Make 2303",
        Goal: ["2303"],
        Items: [
            [
                ["Number", { symbol: 7 }],
                ["Number", { symbol: 4 }],
                ["Number", { symbol: 3 }],
            ],
            [
                ["Number", { symbol: 2 }],
                ["Operator", { symbol: "×" }],
                ["Operator", { symbol: "!" }],
            ],
            [
                ["Operator", { symbol: "×" }],
                ["Operator", { symbol: "!" }],
                ["Operator", { symbol: "÷" }],
            ],
        ],
    },
    {
        Symbol: "2-6",
        Title: "Plus & Minus",
        Description: "Make 25",
        Goal: ["25"],
        Items: [
            [
                ["Number", { symbol: 5 }]
            ],
            [
                ["Operator", { symbol: "!" }],
                ["Operator", { symbol: "+" }],
                ["Operator", { symbol: "-" }],
            ],
        ],
    },
    {
        Symbol: "2-7",
        Title: "A BiT CoMpLiCaTeD",
        Description: "Make 505",
        Goal: ["505"],
        Items: [
            [
                ["Number", { symbol: 2 }],
                ["Number", { symbol: 2 }],
            ],
            [
                ["Operator", { symbol: "-" }],
                ["Operator", { symbol: "!" }],
                ["Operator", { symbol: "×" }],
                ["Operator", { symbol: "!" }],
                ["Operator", { symbol: "-" }],
            ],
        ],
    },
    {
        Symbol: "2-8",
        Title: "Wait for the next update",
        Description: "GG",
        Goal: [ null ],
        Items: Array.from({ length: 26 }, (_, i) => (i+10).toString(36).toUpperCase())
            .map(e => ["Text", {symbol: e}])
            .map((_, i, a) => a.slice(i*6, (i+1)*6))
            .filter(e => e.length).concat(
                Array.from({ length: 10 }, (_, i) => i)
                .map(e => ["Number", {symbol: e}])
                .map((_, i, a) => a.slice(i*5, (i+1)*5))
                .filter(e => e.length)
            )
    }
];

export default Chapter;
