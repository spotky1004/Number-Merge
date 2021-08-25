/** @type { import("../../types/Stage.js").Stage[] } */
const Chapter = [
  {
    Symbol: "1-2X",
    Description: "Make five 20 and one 13",
    Title: "Firse eXtra Stage",
    Goal: ["20", "20", "20", "20", "20", "13"],
    Items: [
      [
        ["number", { symbol: 4 }],
        ["number", { symbol: 5 }],
        ["number", { symbol: 5 }],
        ["number", { symbol: 5 }],
        ["number", { symbol: 6 }],
      ],
      [
        ["number", { symbol: 6 }],
        ["number", { symbol: 6 }],
        ["number", { symbol: 7 }],
        ["number", { symbol: 7 }],
        ["number", { symbol: 7 }],
      ],
      [
        ["number", { symbol: 8 }],
        ["number", { symbol: 8 }],
        ["number", { symbol: 9 }],
        ["number", { symbol: 9 }],
        ["number", { symbol: 10 }],
        ["number", { symbol: 11 }],
      ],
    ],
  },
  {
    Symbol: "1-5X",
    Title: "Increment & Calculate (Even More)",
    Description: "Make 2⁵×3³×5²",
    Goal: ["21600"],
    Items: [
      [
        ["number", { symbol: 24 }],
        ["number", { symbol: 12 }],
        ["number", { symbol: 9 }],
        ["number", { symbol: 6 }],
      ],
      [
        ["operator", { symbol: "×" }],
        ["operator", { symbol: "×" }],
        ["operator", { symbol: "×" }],
        ["operator", { symbol: "+" }],
        ["operator", { symbol: "+" }],
        ["operator", { symbol: "+" }],
      ],
    ],
  },
  {
    Symbol: "1-6X",
    Title: "Bigger number",
    Description: "Make 100⁵",
    Goal: ["10000000000"],
    Items: [
      [
        ["number", { symbol: 5 }],
        ["number", { symbol: 5 }],
        ["number", { symbol: 5 }],
        ["number", { symbol: 5 }],
      ],
      [
        ["operator", { symbol: "×" }],
        ["operator", { symbol: "×" }],
        ["operator", { symbol: "×" }],
        ["operator", { symbol: "×" }],
      ],
      [
        ["operator", { symbol: "×" }],
        ["operator", { symbol: "×" }],
        ["operator", { symbol: "-" }],
        ["operator", { symbol: "-" }],
      ],
    ],
  },
];

export default Chapter;
