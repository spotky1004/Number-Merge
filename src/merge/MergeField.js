import MergeItem from "./MergeItem.js";
import MergeFunctions from "./MergeFunctions.js";
import MergeItemConstructor from "../types/MergeItemConstructor.js";
import ItemTypes from "./ItemTypes.js";


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
        /** @type {import("../types/Stage.js").Stage} */
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
        collisions.sort((a, b) => Math.sqrt(b.x**2 + b.y**2) - Math.sqrt(a.x**2 + a.y**2));

        MergeFunctions[from.MergeFuntion](from, collisions);
    }

    /** @param {import("../types/Stage.js").Stage} stage */
    openStage(stage) {
        for (const id in this.items) {
            this.removeItem(id);
        }

        this.title = {
            Symbol: stage.Symbol,
            Description: stage.Description,
            Title: stage.Title
        };

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

        this.loadedLevel = stage;
    }
    #layout = {
        ItemGap: 0.1,
        LineGap: 0.1
    };
    reloadStage() {
        this.openStage(this.loadedLevel);
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