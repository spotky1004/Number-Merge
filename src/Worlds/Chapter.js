import World from "./World.js";
import Stage from "./Stage.js";

export default class Chapter {
    /** @param {import("../types/ChapterConstructor").ChapterConstructor} chapter */
    constructor(chapter, parent, name) {
        this.name = name;
        this.description = chapter.description;
        this.isUnlocked = chapter.isUnlocked;
        this.unlockMessage = chapter.unlockMessage;
        this.stageRules = chapter.stageRules ?? {};
        /** @type {Stage[]} */
        this.stages = chapter.stages.map(e => new Stage(e, this));
        this.minDifficulty = this.stages.reduce((a, b) => Math.min(a, b.Difficulty ?? 10), 10);
        if (this.stages.length === 0) this.minDifficulty = 0;
        this.maxDifficulty = this.stages.reduce((a, b) => Math.max(a, b.Difficulty ?? 0), 0);
        /** @type {World} */
        this.parent = parent;
    }

    isCompleted() {
        return this.stages.every(e => e.isCompleted());
    }
}
