/** @type {Object.<import("../types/ItemType.js").ItemType, function(): import("../types/MergeItemConstructor.js").MergeItemConstructor>} */
const ItemTypes = {
    Number() {return {
        symbol: Math.floor(Math.random()*10),
        type: "number",
        tags: ["number", "base"],
        MergeFuntion: "Number",
        style: {
            textShadow: "0 0 1vh #0f0"
        }
    }},
    Operator() {return {
        symbol: randomPick("+-×÷"),
        type: "operator",
        tags: ["operator", "base"],
        MergeFuntion: "Operator",
        style: {
            textShadow: "0 0 1vh #f00"
        }
    }},
    Symbol() {return {
        symbol: "x",
        type: "symbol",
        tags: ["symbol", "base"],
        MergeFuntion: "Base",
        style: {
            textShadow: "0 0 1vh #00f"
        }
    }},
    Term() {return {
        symbol: "0+",
        type: "term",
        tags: ["term", "complex"],
        MergeFuntion: "Term",
        style: {
            textShadow: "0 0 1vh #ff0"
        }
    }}
};
export default ItemTypes;


// Util
/**
 * @param {string|string[]} value 
 */
function randomPick(value) {
    if (typeof value === "string") value = value.split("");
    return value[Math.floor(Math.random() * value.length)];
} 
