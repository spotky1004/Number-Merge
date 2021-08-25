import MergeField from "../merge/MergeField.js";
import saveData from "../saveData.js";
import { DefaultStageRules } from "../constants.js";

export default class World {
    /** @param {import("../types/WorldConstructor.js").WorldConstructor} world */
    constructor(world, worldName) {
        /** @type {string} */
        this.name = worldName;
        this.chapters = world.chapters ?? {};
        this.chapterOrder = world.chapterOrder ?? [];
        this.stageRules = world.stageRules ?? {};
        this.isUnlocked = world.isUnlocked;

        console.log(this);
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
                // Open Stage Select
            }
        } else {
            this.openStage(saveData.Playing.Chapter, saveData.Playing.Stage + 1, saveData);
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
