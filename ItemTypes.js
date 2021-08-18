/**
 * @typedef DragableConstructor
 * @property {string} symbol
 * @property {string} id
 * @property {string[]} tags
 * @property { function(MergeItem[]): void } MergeFuntion
 * @property { { x: number, y: number } } position
 */

/** @type {Object.<string, function(): DragableConstructor>} */
const ItemTypes = {
    DefaultNumber() {return {
        symbol: Math.floor(Math.random()*10),
        id: "number",
        tags: ["number", "base"],
        MergeFuntion: "Number",
        style: {
            textShadow: "0 0 1vh #0f0"
        }
    }},
    Operator() {return {
        symbol: randomPick("+-×÷"),
        id: "operator",
        tags: ["operator", "base"],
        MergeFuntion: "Operator",
        style: {
            textShadow: "0 0 1vh #f00"
        }
    }},
    Symbol() {return {
        symbol: "𝑥",
        id: "stymbol",
        tags: ["symbol", "base"],
        MergeFuntion: "Base",
        style: {
            textShadow: "0 0 1vh #00f"
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