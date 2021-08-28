import Chapter from "./Chapter.js";

import MergeField from "../merge/MergeField.js";
import saveData from "../saveData.js";
import { DefaultStageRules } from "../constants.js";
import { openStageSelect } from "../util.js";

export default class World {
    /** @param {import("../types/WorldConstructor.js").WorldConstructor} world */
    constructor(world, worldName) {
        /** @type {string} */
        this.name = worldName;
        /** @type {Object.<string, Chapter>} */
        this.chapters = {};
        this.minDifficulty = 10;
        this.maxDifficulty = 0;
        for (const name in world.chapters) {
            this.chapters[name] = new Chapter(world.chapters[name], this, name);
            this.minDifficulty = Math.min(this.minDifficulty, this.chapters[name].maxDifficulty || 10);
            this.maxDifficulty = Math.max(this.maxDifficulty, this.chapters[name].maxDifficulty || 0);
        }
        this.chapterOrder = world.chapterOrder ?? [];
        this.stageRules = world.stageRules ?? {};
        this.isUnlocked = world.isUnlocked;
        this.description = world.description;
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
                ...DefaultStageRules,
                ...this.stageRules,
                ...Chapter.stageRules,
                ...Stage.stageRules
            }
        }
    }
    /**
     * @param {saveData} saveData
     */
    completeStage(saveData) {
        if (typeof MergeField.loadedLevel === "undefined") return;

        const playingChapter = this.chapters[saveData.Playing.Chapter];
        if (saveData.Playing.Stage + 1 >= playingChapter.stages.length) {
            const chapterIdx = this.chapterOrder.findIndex(e => e === saveData.Playing.Chapter);
            if (this.chapterOrder.length > chapterIdx+2) {
                this.openStage(this.chapterOrder[chapterIdx+1], 0, saveData);
            } else {
                openStageSelect();
            }
        } else {
            this.openStage(saveData.Playing.Chapter, +saveData.Playing.Stage + 1, saveData);
        }

        const StageSymbol = MergeField.loadedLevel.Symbol;
        if (!saveData.Completed[this.name].includes(StageSymbol)) {
            saveData.Completed[this.name].push(StageSymbol);
        }
    }

    openStage(chapter, stage, saveData) {
        const Stage = this.getStage(chapter, stage, saveData);

        MergeField.openStage(Stage);

        saveData.Playing.World = this.name;
        saveData.Playing.Chapter = chapter;
        saveData.Playing.Stage = stage;

        return Stage;
    }
}
