import SaveData from "../types/SaveData.js";

/**
 * @typedef {object} ChapterConstructor
 * 
 * @property {string} description
 * @property {import("./Stage.js").Stage[]} stages
 * @property {function(SaveData): boolean} isUnlocked
 * @property {function(SaveData): string} unlockMessage
 * @property {import("./StageRules.js").LevelRules} stageRules
 */

/** @type {ChapterConstructor} */
const chapterConstructor = {};
export default chapterConstructor;
