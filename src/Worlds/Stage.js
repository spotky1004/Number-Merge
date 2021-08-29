import saveData from "../saveData.js";
import Chapter from "./Chapter.js";

export default class Stage {
    /** @param {import("../types/Stage.js").Stage} stage */
    constructor(stage, parent) {
        this.Symbol = stage.Symbol;
        this.Difficulty = stage.Difficulty;
        this.Title = stage.Title;
        this.Description = stage.Description;
        this.Goal = stage.Goal;
        this.Items = stage.Items;
        this.stageRules = stage.stageRules ?? {};
        /** @type {Chapter} */
        this.parent = parent;
    }

    isCompleted() {
        return saveData.Completed[this.parent.parent.name].includes(this.parent.name + "__" + this.Symbol);
    }
}