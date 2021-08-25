/**
 * @typedef {object} WorldConstructor
 * @property {Object.<string, import("./Chapter").Chapter>} chapters
 * @property {string[]} chapterOrder
 * @property {import("./StageRules.js").StageRules} stageRules
 * @property {function(SaveData): boolean} isUnlocked
 */

/** @type {WorldConstructor} */
const worldConstructor = {};
export default worldConstructor;