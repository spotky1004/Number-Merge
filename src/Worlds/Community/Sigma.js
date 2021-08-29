/** @type { import("../../types/ChapterConstructor").ChapterConstructor } */
const Chapter = {
    description: "This chapter intoduces new Operator: Sigma - by bu-gye-jeong",
    stages: [
        {
            Symbol: "Σ-1",
            Title: "Sigma",
            Description: "Make 21",
            Goal: ["21"],
            Items: [
                [
                    ["number", { symbol: 4 }],
                    ["number", { symbol: 5 }],
                    ["number", { symbol: 6 }],
                ],
                [
                    ["operator", { symbol: "Σ" }],
                    ["operator", { symbol: "Σ" }],
                    ["operator", { symbol: "Σ" }],
                ],
            ],
        },
        {
            Symbol: "Σ-2",
            Description: "Make 22",
            Title: "nΣm",
            Goal: ["22"],
            Items: [
                [
                    ["number", { symbol: 7 }],
                    ["number", { symbol: 6 }],
                    ["number", { symbol: 4 }],
                ],
                [
                    ["operator", { symbol: "Σ" }],
                    ["operator", { symbol: "Σ" }],
                    ["operator", { symbol: "Σ" }],
                ],
            ],
        },
        {
            Symbol: "Σ-3",
            Title: "",
            Description: "Make 98",
            Goal: ["98"],
            Items: [
                [
                    ["number", { symbol: 7 }],
                    ["number", { symbol: 4 }],
                    ["number", { symbol: 4 }],
                    ["number", { symbol: 2 }],
                ],
                [
                    ["operator", { symbol: "Σ" }],
                    ["operator", { symbol: "Σ" }],
                    ["operator", { symbol: "Σ" }],
                ],
            ],
        },
        {
            Symbol: "Σ-4",
            Title: "Factorials & Sigmas",
            Description: "Make 129",
            Goal: ["129"],
            Items: [
                [
                    ["number", { symbol: 4 }],
                    ["number", { symbol: 3 }],
                ],
                [
                    ["operator", { symbol: "Σ" }],
                    ["operator", { symbol: "!" }],
                    ["operator", { symbol: "!" }],
                ],
            ],
        },
        {
            Symbol: "Σ-5",
            Title: "",
            Description: "Make 627",
            Goal: ["627"],
            Items: [
                [
                    ["number", { symbol: 3 }],
                    ["number", { symbol: 3 }],
                    ["number", { symbol: 3 }],
                    ["number", { symbol: 3 }],
                ],
                [
                    ["operator", { symbol: "Σ" }],
                    ["operator", { symbol: "!" }],
                    ["operator", { symbol: "+" }],
                ],
            ],
        }
    ]
};

export default Chapter;