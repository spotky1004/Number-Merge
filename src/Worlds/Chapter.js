export default class Chapter {
    /** @param {import("../types/ChapterConstructor").ChapterConstructor} chapter */
    constructor(chapter) {
        this.description = chapter.description;
        this.isUnlocked = chapter.isUnlocked;
        this.stageRules = chapter.stageRules ?? {};
        this.stages = chapter.stages;
        this.difficulty = this.stages.reduce((a, b) => Math.max(a, b.Difficulty ?? 0), 0);
    }
}
