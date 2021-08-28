/** @type { import("../../types/ChapterConstructor").ChapterConstructor } */
const Chapter = {
    stages: [
        {
            Symbol: "1-1",
            Title: "",
            Description: "Make 729",
            Goal: ["729"],
            Items: [
                [
                    ["number", { symbol: 6 }], ["number", { symbol: 9 }], ["operator", { symbol: "!" }]
                ],
            ]
        },
        {
            Symbol: "1-2",
            Description: "Make 256",
            Title: "",
            Goal: ["256"],
            Items: [
                [
                    ["number", { symbol: 6 }], ["number", { symbol: 9 }]
                ],
                [
                    ["operator", { symbol: "+" }], ["operator", { symbol: "×" }]
                ],
            ]
        },
        {
            Symbol: "1-3",
            Title: "",
            Description: "Make 5",
            Goal: ["5"],
            Items: [
                [
                    ["number", { symbol: 6 }], ["number", { symbol: 9 }]
                ],
                [
                    ["operator", { symbol: "+" }], ["operator", { symbol: "×" }], ["operator", { symbol: "÷" }]
                ]
            ]
        },
        {
            Symbol: "1-4",
            Title: "",
            Description: "Make 6241",
            Goal: ["6241"],
            Items: [
                [
                    ["number", { symbol: 6 }], ["number", { symbol: 9 }], ["operator", { symbol: "-" }]
                ],
                [
                    ["operator", { symbol: "×" }], ["operator", { symbol: "÷" }], ["operator", { symbol: "!" }]
                ]
            ]
        },
        {
            Symbol: "1-5",
            Title: "",
            Description: "Make 5041",
            Goal: ["5041"],
            Items: [
                [
                    ["number", { symbol: 6 }], ["number", { symbol: 9 }], ["operator", { symbol: "!" }]
                ],
                [
                    ["operator", { symbol: "+" }], ["operator", { symbol: "-" }]
                ],
                [
                    ["operator", { symbol: "+" }], ["operator", { symbol: "-" }]
                ],
            ]
        },
        {
            Symbol: "1-6",
            Title: "",
            Description: "Make 1319",
            Goal: ["1319"],
            Items: [
                [
                    ["number", { symbol: 6 }], ["number", { symbol: 9 }]
                ],
                [
                    ["operator", { symbol: "+" }], ["operator", { symbol: "+" }], ["operator", { symbol: "×" }]
                ],
                [
                    ["operator", { symbol: "-" }], ["operator", { symbol: "-" }], ["operator", { symbol: "!" }]
                ],
            ]
        },
        {
            Symbol: "1-7",
            Title: "",
            Description: "Make 3671",
            Goal: ["3671"],
            Items: [
                [
                    ["number", { symbol: 6 }], ["number", { symbol: 9 }], ["operator", { symbol: "-" }]
                ],
                [
                    ["operator", { symbol: "×" }], ["operator", { symbol: "!" }], ["operator", { symbol: "-" }]
                ],
                [
                    ["operator", { symbol: "×" }], ["operator", { symbol: "+" }], ["operator", { symbol: "-" }]
                ],
            ]
        },
        {
            Symbol: "1-8",
            Title: "",
            Description: "Make 1771561",
            Goal: ["1771561"],
            Items: [
                [
                    ["number", { symbol: 6 }], ["number", { symbol: 9 }]
                ],
                [
                    ["operator", { symbol: "+" }], ["operator", { symbol: "+" }], ["operator", { symbol: "+" }]
                ],
                [
                    ["operator", { symbol: "×" }], ["operator", { symbol: "×" }], ["operator", { symbol: "×" }]
                ],
               [
                    ["operator", { symbol: "!" }], ["operator", { symbol: "-" }]
                ],
            ]
        },
        {
            Symbol: "1-9",
            Title: "",
            Description: "Make 1600240009",
            Goal: ["1600240009"],
            Items: [
                [
                    ["number", { symbol: 6 }], ["number", { symbol: 9 }]
                ],
                [
                    ["operator", { symbol: "+" }], ["operator", { symbol: "+" }], ["operator", { symbol: "+" }]
                ],
                [
                    ["operator", { symbol: "!" }], ["operator", { symbol: "-" }], ["operator", { symbol: "-" }]
                ],
                [
                    ["operator", { symbol: "×" }], ["operator", { symbol: "×" }], ["operator", { symbol: "×" }]
                ],
            ]
        },
        {
            Symbol: "1-10",
            Title: "",
            Description: "Make 1845124808567056",
            Goal: ["1845124808567056"],
            Items: [
                [
                    ["number", { symbol: 6 }], ["number", { symbol: 9 }], ["operator", { symbol: "÷" }]
                ],
                [
                    ["operator", { symbol: "-" }], ["operator", { symbol: "-" }], ["operator", { symbol: "×" }]
                ],
                [
                    ["operator", { symbol: "+" }], ["operator", { symbol: "+" }], ["operator", { symbol: "×" }]
                ],
                [
                    ["operator", { symbol: "×" }], ["operator", { symbol: "×" }], ["operator", { symbol: "×" }]
                ],
            ]
        }
    ]
};

export default Chapter;
