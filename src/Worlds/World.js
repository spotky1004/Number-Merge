import saveData from "../saveData.js";

/**
 * @typedef {object} WorldConstructor
 * @property {Object.<string, import("../types/Chapter").Chapter>} chapters
 * @property {import("../types/StageRules.js").StageRules} stageRules
 * @property {function(SaveData): boolean} isUnlocked
 */

export default class World {
    /** @param {WorldConstructor} world */
    constructor(world) {
        this.chapters = world.chapters ?? {};
        this.stageRules = world.stageRules ?? {};
        this.isUnlocked = world.isUnlocked;
    }

    /**
     * @param {string} chapter
     * @param {number} stageIdx
     * @param {saveData} saveData
     * @returns {import("../types/Stage.js").Stage}
     */
    getStage(chapter, stageIdx, saveData) {
        const Chapter = this.chapters[chapter];
        const Stage = Chapter.stages[stageIdx];
        
        return {
            ...Stage,
            stageRules: {
                ...this.stageRules,
                ...Chapter.stageRules,
                ...Stage.stageRules
            }
        }
    }
}
