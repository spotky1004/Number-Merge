/** @type { import("../../types/ChapterConstructor").ChapterConstructor } */
const Chapter = {
    description: "A chapter about Incrementer",
    stages: [
        {
            Symbol: "GG",
            Title: "Wait for the next update",
            Description: "GG",
            Goal: [ null ],
            Items: Array.from({ length: 26 }, (_, i) => (i+10).toString(36).toUpperCase())
                .map((e) => ["text", {symbol: e}])
                .map((_, i, a) => a.slice(i*6, (i+1)*6))
                .filter((e) => e.length).concat(
                    Array.from({ length: 10 }, (_, i) => i)
                    .map((e) => ["number", {symbol: e}])
                    .map((_, i, a) => a.slice(i*5, (i+1)*5))
                    .filter((e) => e.length)
                )
        }
    ]
};

export default Chapter;
