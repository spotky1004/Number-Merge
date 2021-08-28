import MergeFunction from "./MergeFunction.js";
import * as Operators from "../math.js";

/** Main Functions */
/** @type {Object.<string, MergeFunction>} */
const MergeFunctions = {};
MergeFunctions.number = new MergeFunction({
    mergeableTypes: ["number", "operator"],
    outputMergeType: "number",
    fallbackMergeFunction: "term",
    defaultMerge: (a, b) => +a + +b,
    operatorAt: "mergeItems",
    getOperctor: (_, b) => b,
    operatorMerge: {
        "+": (a, _) => a + 1,
        "-": (a, _) => a - 1,
        "×": (a, _) => a ** 2,
        "÷": (a, _) => 1,
        "!": (a, _) => Operators.factorial(a),
        "|": (a, _) => Math.abs(a),
        "%": (a, _) => 0,
        ">": (a, _) => (a+"").slice(0, -1) || "0",
        "<": (a, _) => a+"0",
        "√": (a, _) => Math.floor(Math.sqrt(a))
    },
    MergeFunctions
});
MergeFunctions.base = new MergeFunction({
    MergeFunctions
});
MergeFunctions.operator = new MergeFunction({
    mergeableTypes: ["number"],
    outputMergeType: "term",
    fallbackMergeFunction: "text",
    defaultMerge: (a, b) => b + a,
    MergeFunctions
})
MergeFunctions.term = new MergeFunction({
    mergeableTypes: ["number"],
    outputMergeType: "number",
    fallbackMergeFunction: "text",
    operatorAt: "mainItem",
    getNumber: (a, _) => a.slice(0, -1),
    getOperctor: (a, _) => a.slice(-1),
    operatorMerge: {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "×": (a, b) => a * b,
        "÷": (a, b) => Math.floor(a / b),
        "!": (a, b) => Operators.factorial(a, b),
        "|": (a, b) => "NaN", // Warning: This can be changed anytime
        "%": (a, b) => a % b,
        ">": (a, b) => (a+"").slice(0, -1) + (b+"").slice(-1),
        "<": (a, b) => "NaN", // Warning: This can be changed anytime
        "√": (a, b) => Math.floor( b ** (1/a) )
    },
    MergeFunctions
})
MergeFunctions.text = new MergeFunction({
    mergeableTypes: ["text", "number", "operator"],
    outputMergeType: "text",
    defaultMerge: (a, b) => b + a,
    MergeFunctions
});

export default MergeFunctions;
