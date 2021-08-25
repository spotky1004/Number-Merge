import MergeItem from "../merge/MergeItem.js";

/**
 * @typedef MergeItemConstructor
 * @property {string} symbol
 * @property {string} type
 * @property {string[]} tags
 * @property { function(MergeItem[]): void } MergeFuntion
 * @property { { x: number, y: number } } position
 * @property { Object.<string, string> } style
 */

/** @type {MergeItemConstructor} */
const mergeItem = {};
export default mergeItem;