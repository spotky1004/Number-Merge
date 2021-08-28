import World from "./World.js";

export default class Chapter {
    /** @param {import("../types/ChapterConstructor").ChapterConstructor} chapter */
    constructor(chapter, parent, name) {
        this.name = name;
        this.description = chapter.description;
        this.isUnlocked = chapter.isUnlocked;
        this.unlockMessage = chapter.unlockMessage;
        this.stageRules = chapter.stageRules ?? {};
        this.stages = chapter.stages;
        this.minDifficulty = this.stages.reduce((a, b) => Math.min(a, b.Difficulty || 10), 10);
        if (this.stages.length === 0) this.minDifficulty = 0;
        this.maxDifficulty = this.stages.reduce((a, b) => Math.max(a, b.Difficulty || 0), 0);
        /** @type {World} */
        this.parent = parent;
    }
}
