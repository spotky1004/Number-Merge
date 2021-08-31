import MergeItem from "./MergeItem.js";

import MergeFunctions from "./MergeFunctions.js";
import MergeItemConstructor from "../types/MergeItemConstructor.js";
import ItemTypes from "./ItemTypes.js";
import { displayWorlds } from "../stageSelect.js";

import Stage from "../Worlds/Stage.js"

const StageRule = document.getElementById("stage-rule-display");
const StageRuleList = document.getElementById("stage-rule-list");

class MergeField {
    constructor() {
        this.ele = document.getElementById("merge-field");
        /** @type {Object.<string, MergeItem>} */
        this.items = {};

        this._title = {
            Symbol: document.getElementById("stage-symbol"),
            Title: document.getElementById("stage-title"),
            Description: document.getElementById("stage-description")
        };
        /** @type {Stage} */
        this.loadedLevel = null;
    }

    /** @param {import("../types/MergeItemConstructor.js").MergeItemConstructor} arg */
    addItem(arg) {
        const Item = new MergeItem(arg);
        this.items[Item.id] = Item;
        this.ele.append(Item.ele);
    }

    /** @param {string} id */
    removeItem(id) {
        const Item = this.items[id];

        Item.ele.remove();
        delete this.items[id];
    }

    /** @param {MergeItem?} from  */
    collisionCheck(from) {
        if (typeof from === "undefined") return;

        const FromPos = from.position;
        const FromSize = from.size;

        const collisions = [];
        for (const id in this.items) {
            const Item = this.items[id];

            const ItemPos = Item.position;
            const ItemSize = Item.size;

            if (
                FromPos.x < ItemPos.x + ItemSize.width &&
                FromPos.x + FromSize.width > ItemPos.x &&
                FromPos.y < ItemPos.y + ItemSize.height &&
                FromPos.y + FromSize.height > ItemPos.y &&
                Item !== from
            ) {
                collisions.push(Item);
            }
        }
        if (collisions.length === 0) return;
        collisions.sort((a, b) => Math.sqrt(b.x**2 + b.y**2) - Math.sqrt(a.x**2 + a.y**2));

        MergeFunctions[from.MergeFuntion].merge(from, collisions, this.loadedLevel.stageRules);
        this.onMerge();
    }

    onMerge() {
        for (const id in this.items) {
            const Item = this.items[id];
            switch (Item.type) {
                case "incrementer":
                    for (const _id in this.items) {
                        const _Item = this.items[_id];
                        if (
                            !["number", "incrementer"].includes(_Item.type) ||
                            Item === _Item
                        ) continue;
                        console.log(+_Item.symbol);
                        console.log(+_Item.symbol + +Item.symbol + "");
                        _Item.symbol = +_Item.symbol + +Item.symbol + "";
                        console.log(_Item.symbol);
                    }
                    break;
            }
        }
        console.log(this.items);
    }

    renderBranch() {
        
    }

    /** @param {import("../types/Stage.js").Stage} stage */
    openStage(stage) {
        // Remove all MergeItems
        for (const id in this.items) {
            this.removeItem(id);
        }

        // Level datas
        this.title = {
            Symbol: stage.Symbol,
            Description: stage.Description,
            Title: stage.Title
        };

        // Spawn MergeItems
        for (let i = 0; i < stage.Items.length; i++) {
            const Line = stage.Items[i];
            const y = 0.5 + (i - stage.Items.length/2) * this.#layout.LineGap;

            for (let j = 0; j < Line.length; j++) {
                const Item = Line[j];
                const x = 0.5 + (j - Line.length/2) * this.#layout.ItemGap;
                this.addItem({
                    ...ItemTypes[Item[0]](),
                    ...Item[1],
                    position: { x, y }
                });
            }
        }

        // StageRule display
        StageRuleList.innerHTML = "";
        let toDisplay = [];
        const sr = stage.stageRules;
        if (sr.MustUseAllItems) toDisplay.push("Must use all Items!");
        if (
            sr.NumberLimit.min !== Number.MIN_SAFE_INTEGER ||
            sr.NumberLimit.max !== Number.MAX_SAFE_INTEGER
        ) {
            toDisplay.push(`Number Range: ${sr.NumberLimit.min ?? Number.MIN_SAFE_INTEGER} ~  ${sr.NumberLimit.max ?? Number.MAX_SAFE_INTEGER}`);
        }
        for (let i = 0; i < toDisplay.length; i++) {
            const item = document.createElement("div");
            item.innerText = toDisplay[i];
            StageRuleList.appendChild(item);
        }
        if (toDisplay.length === 0) StageRule.style.display = "none";
        else StageRule.style.display = "";

        // Set loadedLevel
        this.loadedLevel = stage;
    }
    #layout = {
        ItemGap: 0.1,
        LineGap: 0.1
    };
    reloadStage() {
        this.openStage(this.loadedLevel);
    }
    checkCompleted() {
        if (this.loadedLevel === null) return false;
        
        const Items = Object.entries(this.items).map(e => e[1]);
        for (let i = 0; i < this.loadedLevel.Goal.length; i++) {
            const idx = Items.findIndex((e) => e.symbol === this.loadedLevel.Goal[i]);
            if (idx !== -1) {
                Items.splice(idx, 1);
            } else {
                return false;
            }
        }

        if (this.loadedLevel.stageRules.MustUseAllItems && Items.length !== 0) return false;
        return true;
    }

    get size() {
        return {
            width: this.ele.offsetWidth,
            height: this.ele.offsetHeight
        };
    }

    /** @param { { Symbol: string, Description: string, Title: string } } options */
    set title(options) {
        for (const key in options) {
            this._title[key].innerHTML = options[key] ?? "";
            this._title[key].style.display = options[key] ? "" : "none";
        }
    }
    get title() {
        return this._title.innerHTML;
    }
};

export default new MergeField();