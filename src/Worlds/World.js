/**
 * @typedef {object} WorldConstructor
 * @property {Object.<string, import("../types/Chapter").Chapter>} chapters
 * @property {import("../types/StageRules.js").StageRules} stageRules
 */

export default class World {
    /** @param {WorldConstructor} world */
    constructor(world) {
        this.chapters = world.chapters;
        this.stageRules = world.stageRules;
    }

    /**
     * @param {string} chapter
     * @param {number} stageIdx
     * @returns {import("../types/Stage.js").Stage}
     */
    getStage(chapter, stageIdx) {
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
