/** @type {Object.<string, function(): import("../types/MergeItemConstructor.js").MergeItemConstructor>} */
const ItemTypes = {
    number() {return {
        symbol: Math.floor(Math.random()*10),
        type: "number",
        tags: ["number", "base"],
        MergeFuntion: "number",
        style: {
            textShadow: "0 0 1vh #0f0"
        }
    };},
    operator() {return {
        symbol: randomPick("+-×÷!"),
        type: "operator",
        tags: ["operator", "base"],
        MergeFuntion: "operator",
        style: {
            textShadow: "0 0 1vh #f00"
        }
    };},
    symbol() {return {
        symbol: "x",
        type: "symbol",
        tags: ["symbol", "base"],
        MergeFuntion: "base",
        style: {
            textShadow: "0 0 1vh #00f"
        }
    };},
    term() {return {
        symbol: "0+",
        type: "term",
        tags: ["term", "complex"],
        MergeFuntion: "term",
        style: {
            textShadow: "0 0 1vh #ff0"
        }
    };},
    incrementer() {return {
        symbol: "1",
        type: "incrementer",
        tags: ["incrementer"],
        MergeFuntion: "incrementer",
        style: {
            textShadow: "0 0 1vh #0ff"
        }
    }},
    text() {return {
        symbol: "A",
        type: "text",
        tags: ["text"],
        MergeFuntion: "text",
        style: {
            color: "#000"
        }
    };}
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
