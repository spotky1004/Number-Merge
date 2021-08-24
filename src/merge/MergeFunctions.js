import MergeFunction from "./MergeFunction.js";
import * as Operators from "../math.js";

/** Main Functions */
/** @type {Object.<string, MergeFunction>} */
const MergeFunctions = {
    number: new MergeFunction({
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
            "!": (a, _) => Operators.factorial(a)
        }
    }),
    base: new MergeFunction({

    }),
    operator: new MergeFunction({
        mergeableTypes: ["number"],
        outputMergeType: "term",
        fallbackMergeFunction: "text",
        defaultMerge: (a, b) => b + a
    }),
    term: new MergeFunction({
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
            "!": (a, b) => Operators.factorial(a, b)
        }
    }),
    text : new MergeFunction({
        mergeableTypes: ["text", "number", "operator"],
        outputMergeType: "text",
        defaultMerge: (a, b) => b + a
    }),
};
export default MergeFunctions;