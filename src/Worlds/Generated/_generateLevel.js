function generateLevel(chapter=0, diff=0, symbol="") {
  let data = {
    symbol,
    goals: [],
    difficulty: Number((diff+0.1).toFixed(1)),
    items: {
      Number: [],
      Operator: [],
    }
  }

  // Set init data
  const itemCounts = {};
  itemCounts.Number = Math.floor(Math.random()*diff*1.2 + diff*1.2) + Math.floor(Math.random() * 2) + 2;
  itemCounts.Operator = Math.floor(itemCounts.Number / (2 + Math.random())) + 2;
  if (chapter === 0 && diff < 1) itemCounts.Operator = 0;

  // Generate item
  const numBase = Math.sqrt(Math.random()*diff) + 1;
  for (let i = 0; i < itemCounts.Number; i++) {
    data.items.Number.push(
      Math.floor(
        numBase ** (Math.random() * diff/3) +
        Math.random() * 3
      )
    );
  }
  const Operators = "+-×××÷!";
  for (let i = 0; i < itemCounts.Operator; i++) {
    data.items.Operator.push(
      Operators[Math.floor(Math.random() * (6 + chapter))]
    );
  }

  // Calculate
  const itemCount = itemCounts.Number + itemCounts.Operator;
  const calcCount = itemCount - Math.floor(4 - (Math.random() * 4**(12-diff*2))**(1/(12-diff*2)));
  const mergeables = [
    [...data.items.Number],
    [...data.items.Operator],
    [],
  ];
  for (let i = 0; i < calcCount; i++) {
    if (mergeables[0].length === 1) break;

    const toMerge = [];
    toMerge.push(
      mergeables[0].splice(Math.floor(Math.random() * mergeables[0].length), 1)[0]
    );
    const canPick = Array.from({ length: mergeables.length }, (_, i) => mergeables[i].length >= 1 ? i : null ).filter(e => e !== null);
    if (
      canPick.length === 0 ||
      toMerge.includes(undefined)
    ) break;
    const selectFrom = canPick[Math.floor(Math.random() * canPick.length)];
    toMerge.push(
      mergeables[selectFrom].splice(Math.floor(Math.random() * mergeables[selectFrom].length), 1)[0]
    );
    if (Math.random() > 0.5) toMerge.reverse();

    if (
      // Number Merge
      typeof toMerge[0] === "number" &&
      typeof toMerge[1] === "number"
    ) {
      mergeables[0].push(toMerge[0] + toMerge[1]);
    } else if (
      // Number - Operator Merge
      typeof toMerge[0] === "number" &&
      Operators.includes(toMerge[1]+"")
    ) {
      switch (toMerge) {
        case "+":
          mergeables[0].push(toMerge[0] + 1);
          break;
        case "-":
          mergeables[0].push(toMerge[0] - 1);
          break;
        case "×":
          mergeables[0].push(toMerge[0] ** 2);
          break;
        case "÷":
          mergeables[0].push(1);
          break;
      }
    } else if (
      // Operator - Number Merge
      Operators.includes(toMerge[0]+"") &&
      typeof toMerge[1] === "number"
    ) {
      mergeables[2].push(toMerge[1] + toMerge[0]);
    } else {
      // Term & Number Merge
      if (typeof toMerge[0] === "string") toMerge.reverse();
      const OperatorPart = toMerge[1].substr(-1);
      const NumberPart = +toMerge[1].slice(0, -1);
      switch (OperatorPart) {
        case "+":
          mergeables[0].push(NumberPart + toMerge[0]);
          break;
        case "-":
          mergeables[0].push(NumberPart - toMerge[0]);
          break;
        case "×":
          mergeables[0].push(NumberPart * toMerge[0]);
          break;
        case "÷":
          if (toMerge[0] === 0) continue;
          mergeables[0].push(Math.floor(NumberPart / toMerge[0]));
          break;
      }
    }
  }

  let toExport = {};
  toExport.Symbol = data.symbol;
  toExport.Difficulty = data.difficulty;
  toExport.Goal = [...mergeables[0], ...mergeables[2]].map(e => e+"");
  toExport.Description = "Make " + toExport.Goal.join(", ");
  toExport.Items = [
    data.items.Number.map(e => ["number", { symbol: e }]),
    data.items.Operator.map(e => ["operator", { symbol: e }]),
  ].filter(e => e.length);

  return toExport;
}

// Generate
let levels = [];
for (let i = 0; i < 100; i++) {
  levels.push(generateLevel(0, i/10, "I-" + (i+1)));
}
let exportForm = levels.map(e => JSON.stringify(e, null, 2)).join(",\n");
exportForm = exportForm.replace(/(\s)+\[\s+("[^"]+"),\s+{\s+"symbol": ("?[^" \n]+"?)\s+}\s+],?\n/gm, (_, g1, g2, g3) => `\n      [${g2}, { symbol: ${g3} }],\n`)
  .replace(/^\s*$\n/gm, "");
console.log(exportForm);
