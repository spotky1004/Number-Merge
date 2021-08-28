/**
 * @typedef {object} WorldConstructor
 * @property {Object.<string, import("./ChapterConstructor").ChapterConstructor>} chapters
 * @property {string} description
 * @property {string[]} chapterOrder - Order of the chapters
 * @property {import("./StageRules.js").StageRules} stageRules - Stage rules (this can bve overridden by chapter and stage rules)
 * @property {function(SaveData): boolean} isUnlocked
 */

/** @type {WorldConstructor} */
const worldConstructor = {};
export default worldConstructor;