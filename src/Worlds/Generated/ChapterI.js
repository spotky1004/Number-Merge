/** @type { import("../../types/ChapterConstructor").ChapterConstructor } */
const Chapter = {
  description: "A chapter about Operators",
  isUnlocked: (saveData) => true,
  stages: [
    {
      "Symbol": "I-1",
      "Difficulty": 0.1,
      "Goal": [
        "6"
      ],
      "Description": "Make 6",
      "Items": [
        [
          ["number", { symbol: 3 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 2 }],
        ]
      ]
    },
    {
      "Symbol": "I-2",
      "Difficulty": 0.2,
      "Goal": [
        "9"
      ],
      "Description": "Make 9",
      "Items": [
        [
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
        ]
      ]
    },
    {
      "Symbol": "I-3",
      "Difficulty": 0.3,
      "Goal": [
        "4"
      ],
      "Description": "Make 4",
      "Items": [
        [
          ["number", { symbol: 2 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 1 }],
        ]
      ]
    },
    {
      "Symbol": "I-4",
      "Difficulty": 0.4,
      "Goal": [
        "8"
      ],
      "Description": "Make 8",
      "Items": [
        [
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
        ]
      ]
    },
    {
      "Symbol": "I-5",
      "Difficulty": 0.5,
      "Goal": [
        "5"
      ],
      "Description": "Make 5",
      "Items": [
        [
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
        ]
      ]
    },
    {
      "Symbol": "I-6",
      "Difficulty": 0.6,
      "Goal": [
        "4"
      ],
      "Description": "Make 4",
      "Items": [
        [
          ["number", { symbol: 1 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 1 }],
        ]
      ]
    },
    {
      "Symbol": "I-7",
      "Difficulty": 0.7,
      "Goal": [
        "4"
      ],
      "Description": "Make 4",
      "Items": [
        [
          ["number", { symbol: 3 }],
          ["number", { symbol: 1 }],
        ]
      ]
    },
    {
      "Symbol": "I-8",
      "Difficulty": 0.8,
      "Goal": [
        "8"
      ],
      "Description": "Make 8",
      "Items": [
        [
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
        ]
      ]
    },
    {
      "Symbol": "I-9",
      "Difficulty": 0.9,
      "Goal": [
        "5"
      ],
      "Description": "Make 5",
      "Items": [
        [
          ["number", { symbol: 2 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 2 }],
        ]
      ]
    },
    {
      "Symbol": "I-10",
      "Difficulty": 1,
      "Goal": [
        "7"
      ],
      "Description": "Make 7",
      "Items": [
        [
          ["number", { symbol: 3 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 3 }],
        ]
      ]
    },
    {
      "Symbol": "I-11",
      "Difficulty": 1.1,
      "Goal": [
        "4"
      ],
      "Description": "Make 4",
      "Items": [
        [
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 1 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-12",
      "Difficulty": 1.2,
      "Goal": [
        "2",
        "2×"
      ],
      "Description": "Make 2, 2×",
      "Items": [
        [
          ["number", { symbol: 2 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-13",
      "Difficulty": 1.3,
      "Goal": [
        "6"
      ],
      "Description": "Make 6",
      "Items": [
        [
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 1 }],
        ],
        [
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "+" }],
        ]
      ]
    },
    {
      "Symbol": "I-14",
      "Difficulty": 1.4,
      "Goal": [
        "2"
      ],
      "Description": "Make 2",
      "Items": [
        [
          ["number", { symbol: 1 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 3 }],
        ],
        [
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "+" }],
        ]
      ]
    },
    {
      "Symbol": "I-15",
      "Difficulty": 1.5,
      "Goal": [
        "3"
      ],
      "Description": "Make 3",
      "Items": [
        [
          ["number", { symbol: 2 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 1 }],
        ],
        [
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "+" }],
        ]
      ]
    },
    {
      "Symbol": "I-16",
      "Difficulty": 1.6,
      "Goal": [
        "3",
        "1×",
        "4÷"
      ],
      "Description": "Make 3, 1×, 4÷",
      "Items": [
        [
          ["number", { symbol: 2 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 1 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-17",
      "Difficulty": 1.7,
      "Goal": [
        "3",
        "1×"
      ],
      "Description": "Make 3, 1×",
      "Items": [
        [
          ["number", { symbol: 1 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 1 }],
        ],
        [
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-18",
      "Difficulty": 1.8,
      "Goal": [
        "3"
      ],
      "Description": "Make 3",
      "Items": [
        [
          ["number", { symbol: 2 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 3 }],
        ],
        [
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-19",
      "Difficulty": 1.9,
      "Goal": [
        "13"
      ],
      "Description": "Make 13",
      "Items": [
        [
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 1 }],
        ],
        [
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-20",
      "Difficulty": 2,
      "Goal": [
        "2",
        "3+",
        "3×"
      ],
      "Description": "Make 2, 3+, 3×",
      "Items": [
        [
          ["number", { symbol: 1 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
        ],
        [
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-21",
      "Difficulty": 2.1,
      "Goal": [
        "2",
        "1×",
        "7-"
      ],
      "Description": "Make 2, 1×, 7-",
      "Items": [
        [
          ["number", { symbol: 2 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 2 }],
        ],
        [
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-22",
      "Difficulty": 2.2,
      "Goal": [
        "8"
      ],
      "Description": "Make 8",
      "Items": [
        [
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 1 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
        ]
      ]
    },
    {
      "Symbol": "I-23",
      "Difficulty": 2.3,
      "Goal": [
        "6",
        "2×"
      ],
      "Description": "Make 6, 2×",
      "Items": [
        [
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 2 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-24",
      "Difficulty": 2.4,
      "Goal": [
        "13"
      ],
      "Description": "Make 13",
      "Items": [
        [
          ["number", { symbol: 1 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 2 }],
        ],
        [
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "+" }],
        ]
      ]
    },
    {
      "Symbol": "I-25",
      "Difficulty": 2.5,
      "Goal": [
        "19"
      ],
      "Description": "Make 19",
      "Items": [
        [
          ["number", { symbol: 4 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 2 }],
        ],
        [
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-26",
      "Difficulty": 2.6,
      "Goal": [
        "1",
        "6×"
      ],
      "Description": "Make 1, 6×",
      "Items": [
        [
          ["number", { symbol: 1 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 1 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "+" }],
        ]
      ]
    },
    {
      "Symbol": "I-27",
      "Difficulty": 2.7,
      "Goal": [
        "1",
        "2÷",
        "4×"
      ],
      "Description": "Make 1, 2÷, 4×",
      "Items": [
        [
          ["number", { symbol: 4 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 2 }],
        ],
        [
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-28",
      "Difficulty": 2.8,
      "Goal": [
        "4",
        "2×",
        "3×"
      ],
      "Description": "Make 4, 2×, 3×",
      "Items": [
        [
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "+" }],
        ]
      ]
    },
    {
      "Symbol": "I-29",
      "Difficulty": 2.9,
      "Goal": [
        "0"
      ],
      "Description": "Make 0",
      "Items": [
        [
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 3 }],
        ],
        [
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
        ]
      ]
    },
    {
      "Symbol": "I-30",
      "Difficulty": 3,
      "Goal": [
        "5",
        "5+"
      ],
      "Description": "Make 5, 5+",
      "Items": [
        [
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 2 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "+" }],
        ]
      ]
    },
    {
      "Symbol": "I-31",
      "Difficulty": 3.1,
      "Goal": [
        "10",
        "6×"
      ],
      "Description": "Make 10, 6×",
      "Items": [
        [
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 3 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-32",
      "Difficulty": 3.2,
      "Goal": [
        "5",
        "3+"
      ],
      "Description": "Make 5, 3+",
      "Items": [
        [
          ["number", { symbol: 2 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 2 }],
        ],
        [
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-33",
      "Difficulty": 3.3,
      "Goal": [
        "4"
      ],
      "Description": "Make 4",
      "Items": [
        [
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 4 }],
        ],
        [
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-34",
      "Difficulty": 3.4,
      "Goal": [
        "7",
        "7÷"
      ],
      "Description": "Make 7, 7÷",
      "Items": [
        [
          ["number", { symbol: 4 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 1 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-35",
      "Difficulty": 3.5,
      "Goal": [
        "5",
        "0+"
      ],
      "Description": "Make 5, 0+",
      "Items": [
        [
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 5 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-36",
      "Difficulty": 3.6,
      "Goal": [
        "6",
        "5÷"
      ],
      "Description": "Make 6, 5÷",
      "Items": [
        [
          ["number", { symbol: 1 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 3 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "÷" }],
        ]
      ]
    },
    {
      "Symbol": "I-37",
      "Difficulty": 3.7,
      "Goal": [
        "7",
        "2÷",
        "8×"
      ],
      "Description": "Make 7, 2÷, 8×",
      "Items": [
        [
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 1 }],
        ],
        [
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-38",
      "Difficulty": 3.8,
      "Goal": [
        "4",
        "2×"
      ],
      "Description": "Make 4, 2×",
      "Items": [
        [
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 2 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "÷" }],
        ]
      ]
    },
    {
      "Symbol": "I-39",
      "Difficulty": 3.9,
      "Goal": [
        "11"
      ],
      "Description": "Make 11",
      "Items": [
        [
          ["number", { symbol: 4 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 4 }],
        ],
        [
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-40",
      "Difficulty": 4,
      "Goal": [
        "21",
        "1÷"
      ],
      "Description": "Make 21, 1÷",
      "Items": [
        [
          ["number", { symbol: 4 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
        ],
        [
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-41",
      "Difficulty": 4.1,
      "Goal": [
        "2",
        "3+",
        "3×",
        "9×"
      ],
      "Description": "Make 2, 3+, 3×, 9×",
      "Items": [
        [
          ["number", { symbol: 2 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
        ],
        [
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-42",
      "Difficulty": 4.2,
      "Goal": [
        "29"
      ],
      "Description": "Make 29",
      "Items": [
        [
          ["number", { symbol: 2 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 2 }],
        ],
        [
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-43",
      "Difficulty": 4.3,
      "Goal": [
        "13",
        "1-"
      ],
      "Description": "Make 13, 1-",
      "Items": [
        [
          ["number", { symbol: 5 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
        ]
      ]
    },
    {
      "Symbol": "I-44",
      "Difficulty": 4.4,
      "Goal": [
        "6",
        "3+",
        "1×"
      ],
      "Description": "Make 6, 3+, 1×",
      "Items": [
        [
          ["number", { symbol: 1 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
        ],
        [
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
        ]
      ]
    },
    {
      "Symbol": "I-45",
      "Difficulty": 4.5,
      "Goal": [
        "47"
      ],
      "Description": "Make 47",
      "Items": [
        [
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 4 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
        ]
      ]
    },
    {
      "Symbol": "I-46",
      "Difficulty": 4.6,
      "Goal": [
        "-58"
      ],
      "Description": "Make -58",
      "Items": [
        [
          ["number", { symbol: 5 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
        ],
        [
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-47",
      "Difficulty": 4.7,
      "Goal": [
        "21"
      ],
      "Description": "Make 21",
      "Items": [
        [
          ["number", { symbol: 2 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 2 }],
        ],
        [
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-48",
      "Difficulty": 4.8,
      "Goal": [
        "-6"
      ],
      "Description": "Make -6",
      "Items": [
        [
          ["number", { symbol: 2 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 3 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "+" }],
        ]
      ]
    },
    {
      "Symbol": "I-49",
      "Difficulty": 4.9,
      "Goal": [
        "7",
        "4÷",
        "10-",
        "66×",
        "2÷"
      ],
      "Description": "Make 7, 4÷, 10-, 66×, 2÷",
      "Items": [
        [
          ["number", { symbol: 6 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 6 }],
        ],
        [
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "÷" }],
        ]
      ]
    },
    {
      "Symbol": "I-50",
      "Difficulty": 5,
      "Goal": [
        "18"
      ],
      "Description": "Make 18",
      "Items": [
        [
          ["number", { symbol: 5 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 2 }],
        ],
        [
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
        ]
      ]
    },
    {
      "Symbol": "I-51",
      "Difficulty": 5.1,
      "Goal": [
        "6"
      ],
      "Description": "Make 6",
      "Items": [
        [
          ["number", { symbol: 4 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 5 }],
        ],
        [
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-52",
      "Difficulty": 5.2,
      "Goal": [
        "271"
      ],
      "Description": "Make 271",
      "Items": [
        [
          ["number", { symbol: 4 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 1 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-53",
      "Difficulty": 5.3,
      "Goal": [
        "7",
        "21×"
      ],
      "Description": "Make 7, 21×",
      "Items": [
        [
          ["number", { symbol: 2 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 7 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 8 }],
        ],
        [
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-54",
      "Difficulty": 5.4,
      "Goal": [
        "10"
      ],
      "Description": "Make 10",
      "Items": [
        [
          ["number", { symbol: 4 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 5 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
        ]
      ]
    },
    {
      "Symbol": "I-55",
      "Difficulty": 5.5,
      "Goal": [
        "39"
      ],
      "Description": "Make 39",
      "Items": [
        [
          ["number", { symbol: 1 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 5 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "÷" }],
        ]
      ]
    },
    {
      "Symbol": "I-56",
      "Difficulty": 5.6,
      "Goal": [
        "-18"
      ],
      "Description": "Make -18",
      "Items": [
        [
          ["number", { symbol: 4 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 5 }],
        ],
        [
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-57",
      "Difficulty": 5.7,
      "Goal": [
        "-1"
      ],
      "Description": "Make -1",
      "Items": [
        [
          ["number", { symbol: 3 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
        ],
        [
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-58",
      "Difficulty": 5.8,
      "Goal": [
        "14",
        "0×"
      ],
      "Description": "Make 14, 0×",
      "Items": [
        [
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 7 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 10 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 7 }],
          ["number", { symbol: 5 }],
        ],
        [
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "+" }],
        ]
      ]
    },
    {
      "Symbol": "I-59",
      "Difficulty": 5.9,
      "Goal": [
        "18",
        "8×",
        "2×"
      ],
      "Description": "Make 18, 8×, 2×",
      "Items": [
        [
          ["number", { symbol: 3 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 5 }],
        ],
        [
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-60",
      "Difficulty": 6,
      "Goal": [
        "17",
        "12-"
      ],
      "Description": "Make 17, 12-",
      "Items": [
        [
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 1 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-61",
      "Difficulty": 6.1,
      "Goal": [
        "18",
        "19-"
      ],
      "Description": "Make 18, 19-",
      "Items": [
        [
          ["number", { symbol: 3 }],
          ["number", { symbol: 7 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 3 }],
        ],
        [
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "÷" }],
        ]
      ]
    },
    {
      "Symbol": "I-62",
      "Difficulty": 6.2,
      "Goal": [
        "232"
      ],
      "Description": "Make 232",
      "Items": [
        [
          ["number", { symbol: 5 }],
          ["number", { symbol: 7 }],
          ["number", { symbol: 7 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 8 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-63",
      "Difficulty": 6.3,
      "Goal": [
        "33"
      ],
      "Description": "Make 33",
      "Items": [
        [
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
        ],
        [
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-64",
      "Difficulty": 6.4,
      "Goal": [
        "26",
        "2×"
      ],
      "Description": "Make 26, 2×",
      "Items": [
        [
          ["number", { symbol: 2 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 8 }],
          ["number", { symbol: 12 }],
        ],
        [
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-65",
      "Difficulty": 6.5,
      "Goal": [
        "23",
        "17-"
      ],
      "Description": "Make 23, 17-",
      "Items": [
        [
          ["number", { symbol: 3 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 7 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 11 }],
          ["number", { symbol: 9 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 12 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "-" }],
        ]
      ]
    },
    {
      "Symbol": "I-66",
      "Difficulty": 6.6,
      "Goal": [
        "18"
      ],
      "Description": "Make 18",
      "Items": [
        [
          ["number", { symbol: 4 }],
          ["number", { symbol: 7 }],
          ["number", { symbol: 7 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 9 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
        ],
        [
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "÷" }],
        ]
      ]
    },
    {
      "Symbol": "I-67",
      "Difficulty": 6.7,
      "Goal": [
        "21"
      ],
      "Description": "Make 21",
      "Items": [
        [
          ["number", { symbol: 1 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 2 }],
        ],
        [
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "+" }],
        ]
      ]
    },
    {
      "Symbol": "I-68",
      "Difficulty": 6.8,
      "Goal": [
        "38",
        "0÷"
      ],
      "Description": "Make 38, 0÷",
      "Items": [
        [
          ["number", { symbol: 8 }],
          ["number", { symbol: 7 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 9 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 12 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 11 }],
          ["number", { symbol: 13 }],
          ["number", { symbol: 12 }],
          ["number", { symbol: 8 }],
          ["number", { symbol: 3 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-69",
      "Difficulty": 6.9,
      "Goal": [
        "68",
        "3×",
        "11×"
      ],
      "Description": "Make 68, 3×, 11×",
      "Items": [
        [
          ["number", { symbol: 6 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 2 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-70",
      "Difficulty": 7,
      "Goal": [
        "39",
        "21×",
        "7+"
      ],
      "Description": "Make 39, 21×, 7+",
      "Items": [
        [
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 7 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 7 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 5 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "+" }],
        ]
      ]
    },
    {
      "Symbol": "I-71",
      "Difficulty": 7.1,
      "Goal": [
        "44"
      ],
      "Description": "Make 44",
      "Items": [
        [
          ["number", { symbol: 6 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 12 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 13 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 9 }],
          ["number", { symbol: 19 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "+" }],
        ]
      ]
    },
    {
      "Symbol": "I-72",
      "Difficulty": 7.2,
      "Goal": [
        "63"
      ],
      "Description": "Make 63",
      "Items": [
        [
          ["number", { symbol: 13 }],
          ["number", { symbol: 8 }],
          ["number", { symbol: 18 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 7 }],
          ["number", { symbol: 20 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 15 }],
          ["number", { symbol: 1 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-73",
      "Difficulty": 7.3,
      "Goal": [
        "51"
      ],
      "Description": "Make 51",
      "Items": [
        [
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 9 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 8 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 8 }],
          ["number", { symbol: 9 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 7 }],
          ["number", { symbol: 7 }],
          ["number", { symbol: 7 }],
        ],
        [
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-74",
      "Difficulty": 7.4,
      "Goal": [
        "19"
      ],
      "Description": "Make 19",
      "Items": [
        [
          ["number", { symbol: 2 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 7 }],
          ["number", { symbol: 7 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 2 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "÷" }],
        ]
      ]
    },
    {
      "Symbol": "I-75",
      "Difficulty": 7.5,
      "Goal": [
        "33"
      ],
      "Description": "Make 33",
      "Items": [
        [
          ["number", { symbol: 1 }],
          ["number", { symbol: 7 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 7 }],
        ],
        [
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-76",
      "Difficulty": 7.6,
      "Goal": [
        "11"
      ],
      "Description": "Make 11",
      "Items": [
        [
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 2 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "-" }],
        ]
      ]
    },
    {
      "Symbol": "I-77",
      "Difficulty": 7.7,
      "Goal": [
        "41"
      ],
      "Description": "Make 41",
      "Items": [
        [
          ["number", { symbol: 2 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 14 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 8 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 7 }],
          ["number", { symbol: 10 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 8 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 16 }],
          ["number", { symbol: 5 }],
        ],
        [
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
        ]
      ]
    },
    {
      "Symbol": "I-78",
      "Difficulty": 7.8,
      "Goal": [
        "41"
      ],
      "Description": "Make 41",
      "Items": [
        [
          ["number", { symbol: 3 }],
          ["number", { symbol: 11 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 15 }],
          ["number", { symbol: 8 }],
          ["number", { symbol: 8 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 8 }],
          ["number", { symbol: 10 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 10 }],
          ["number", { symbol: 6 }],
        ],
        [
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-79",
      "Difficulty": 7.9,
      "Goal": [
        "134",
        "12-"
      ],
      "Description": "Make 134, 12-",
      "Items": [
        [
          ["number", { symbol: 8 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 7 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 12 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 9 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 2 }],
        ],
        [
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "÷" }],
        ]
      ]
    },
    {
      "Symbol": "I-80",
      "Difficulty": 8,
      "Goal": [
        "420",
        "32-"
      ],
      "Description": "Make 420, 32-",
      "Items": [
        [
          ["number", { symbol: 12 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 12 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 22 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 18 }],
          ["number", { symbol: 8 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 21 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 5 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "+" }],
        ]
      ]
    },
    {
      "Symbol": "I-81",
      "Difficulty": 8.1,
      "Goal": [
        "36"
      ],
      "Description": "Make 36",
      "Items": [
        [
          ["number", { symbol: 4 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 17 }],
          ["number", { symbol: 22 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 19 }],
          ["number", { symbol: 10 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 8 }],
          ["number", { symbol: 14 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
        ]
      ]
    },
    {
      "Symbol": "I-82",
      "Difficulty": 8.2,
      "Goal": [
        "22"
      ],
      "Description": "Make 22",
      "Items": [
        [
          ["number", { symbol: 7 }],
          ["number", { symbol: 7 }],
          ["number", { symbol: 9 }],
          ["number", { symbol: 9 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 9 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 10 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "÷" }],
        ]
      ]
    },
    {
      "Symbol": "I-83",
      "Difficulty": 8.3,
      "Goal": [
        "18",
        "3×",
        "11+"
      ],
      "Description": "Make 18, 3×, 11+",
      "Items": [
        [
          ["number", { symbol: 1 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
        ],
        [
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
        ]
      ]
    },
    {
      "Symbol": "I-84",
      "Difficulty": 8.4,
      "Goal": [
        "46",
        "1682×"
      ],
      "Description": "Make 46, 1682×",
      "Items": [
        [
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 7 }],
          ["number", { symbol: 16 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 10 }],
          ["number", { symbol: 15 }],
          ["number", { symbol: 7 }],
          ["number", { symbol: 14 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 10 }],
          ["number", { symbol: 2 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-85",
      "Difficulty": 8.5,
      "Goal": [
        "58"
      ],
      "Description": "Make 58",
      "Items": [
        [
          ["number", { symbol: 5 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 7 }],
          ["number", { symbol: 9 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 12 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 10 }],
          ["number", { symbol: 15 }],
          ["number", { symbol: 15 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 11 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 3 }],
        ],
        [
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "÷" }],
        ]
      ]
    },
    {
      "Symbol": "I-86",
      "Difficulty": 8.6,
      "Goal": [
        "18"
      ],
      "Description": "Make 18",
      "Items": [
        [
          ["number", { symbol: 3 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 13 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 11 }],
          ["number", { symbol: 12 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 10 }],
          ["number", { symbol: 7 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 14 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 16 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-87",
      "Difficulty": 8.7,
      "Goal": [
        "54"
      ],
      "Description": "Make 54",
      "Items": [
        [
          ["number", { symbol: 11 }],
          ["number", { symbol: 17 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 32 }],
          ["number", { symbol: 9 }],
          ["number", { symbol: 7 }],
          ["number", { symbol: 29 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 16 }],
          ["number", { symbol: 43 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 5 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-88",
      "Difficulty": 8.8,
      "Goal": [
        "54"
      ],
      "Description": "Make 54",
      "Items": [
        [
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 4 }],
        ],
        [
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "÷" }],
        ]
      ]
    },
    {
      "Symbol": "I-89",
      "Difficulty": 8.9,
      "Goal": [
        "5",
        "4÷"
      ],
      "Description": "Make 5, 4÷",
      "Items": [
        [
          ["number", { symbol: 1 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 5 }],
        ],
        [
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "÷" }],
        ]
      ]
    },
    {
      "Symbol": "I-90",
      "Difficulty": 9,
      "Goal": [
        "50"
      ],
      "Description": "Make 50",
      "Items": [
        [
          ["number", { symbol: 4 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 10 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 8 }],
          ["number", { symbol: 9 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 11 }],
          ["number", { symbol: 10 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 8 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-91",
      "Difficulty": 9.1,
      "Goal": [
        "524"
      ],
      "Description": "Make 524",
      "Items": [
        [
          ["number", { symbol: 47 }],
          ["number", { symbol: 35 }],
          ["number", { symbol: 25 }],
          ["number", { symbol: 34 }],
          ["number", { symbol: 13 }],
          ["number", { symbol: 7 }],
          ["number", { symbol: 52 }],
          ["number", { symbol: 18 }],
          ["number", { symbol: 9 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 7 }],
          ["number", { symbol: 13 }],
          ["number", { symbol: 29 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-92",
      "Difficulty": 9.2,
      "Goal": [
        "18",
        "6×"
      ],
      "Description": "Make 18, 6×",
      "Items": [
        [
          ["number", { symbol: 3 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
        ],
        [
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-93",
      "Difficulty": 9.3,
      "Goal": [
        "129"
      ],
      "Description": "Make 129",
      "Items": [
        [
          ["number", { symbol: 5 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 16 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 11 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 8 }],
          ["number", { symbol: 18 }],
          ["number", { symbol: 21 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 10 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 7 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 13 }],
          ["number", { symbol: 8 }],
          ["number", { symbol: 4 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-94",
      "Difficulty": 9.4,
      "Goal": [
        "106"
      ],
      "Description": "Make 106",
      "Items": [
        [
          ["number", { symbol: 2 }],
          ["number", { symbol: 7 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 16 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 10 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 9 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 17 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 20 }],
          ["number", { symbol: 18 }],
          ["number", { symbol: 10 }],
          ["number", { symbol: 14 }],
          ["number", { symbol: 7 }],
        ],
        [
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "÷" }],
        ]
      ]
    },
    {
      "Symbol": "I-95",
      "Difficulty": 9.5,
      "Goal": [
        "52"
      ],
      "Description": "Make 52",
      "Items": [
        [
          ["number", { symbol: 2 }],
          ["number", { symbol: 13 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 22 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 21 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 18 }],
          ["number", { symbol: 7 }],
          ["number", { symbol: 25 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 23 }],
          ["number", { symbol: 15 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "-" }],
        ]
      ]
    },
    {
      "Symbol": "I-96",
      "Difficulty": 9.6,
      "Goal": [
        "2945"
      ],
      "Description": "Make 2945",
      "Items": [
        [
          ["number", { symbol: 58 }],
          ["number", { symbol: 8 }],
          ["number", { symbol: 32 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 18 }],
          ["number", { symbol: 22 }],
          ["number", { symbol: 55 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 56 }],
          ["number", { symbol: 10 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 19 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-97",
      "Difficulty": 9.7,
      "Goal": [
        "162",
        "16×",
        "2×",
        "16×"
      ],
      "Description": "Make 162, 16×, 2×, 16×",
      "Items": [
        [
          ["number", { symbol: 25 }],
          ["number", { symbol: 13 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 9 }],
          ["number", { symbol: 17 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 16 }],
          ["number", { symbol: 10 }],
          ["number", { symbol: 16 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 20 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 8 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 18 }],
        ],
        [
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-98",
      "Difficulty": 9.8,
      "Goal": [
        "47"
      ],
      "Description": "Make 47",
      "Items": [
        [
          ["number", { symbol: 3 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 1 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
        ],
        [
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-99",
      "Difficulty": 9.9,
      "Goal": [
        "113"
      ],
      "Description": "Make 113",
      "Items": [
        [
          ["number", { symbol: 2 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 8 }],
          ["number", { symbol: 10 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 10 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 6 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 5 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 7 }],
          ["number", { symbol: 7 }],
          ["number", { symbol: 3 }],
        ],
        [
          ["operator", { symbol: "÷" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "-" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    },
    {
      "Symbol": "I-100",
      "Difficulty": 10,
      "Goal": [
        "91",
        "196×"
      ],
      "Description": "Make 91, 196×",
      "Items": [
        [
          ["number", { symbol: 20 }],
          ["number", { symbol: 12 }],
          ["number", { symbol: 68 }],
          ["number", { symbol: 3 }],
          ["number", { symbol: 9 }],
          ["number", { symbol: 43 }],
          ["number", { symbol: 9 }],
          ["number", { symbol: 72 }],
          ["number", { symbol: 17 }],
          ["number", { symbol: 32 }],
          ["number", { symbol: 56 }],
          ["number", { symbol: 35 }],
          ["number", { symbol: 4 }],
          ["number", { symbol: 2 }],
          ["number", { symbol: 60 }],
          ["number", { symbol: 59 }],
          ["number", { symbol: 16 }],
          ["number", { symbol: 46 }],
        ],
        [
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "×" }],
          ["operator", { symbol: "+" }],
          ["operator", { symbol: "×" }],
        ]
      ]
    }
  ]
};

export default Chapter;
