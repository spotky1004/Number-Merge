import MergeItem from "./MergeItem.js";
import MergeFunctions from "./MergeFunctions.js";


class MergeField {
    constructor() {
        this.ele = document.getElementById("merge-field");
        /** @type {Object.<string, MergeItem>} */
        this.items = {};
    }

    /**
     * @typedef DragableConstructor
     * @property {string} symbol
     * @property {string} id
     * @property {string[]} tags
     * @property { function(MergeItem[]): void } MergeFuntion
     * @property { { x: number, y: number } } position
     */
    /** 
     * @param {DragableConstructor} arg
     */
    addItem(arg) {
        const Item = new MergeItem(arg);
        this.items[Item.id] = Item;
        this.ele.append(Item.ele);
    }

    /**
     * @param {string} id 
     */
    removeItem(id) {
        const Item = this.items[id];

        Item.ele.remove();
        delete this.items[id];
    }

    /**
     * @param {MergeItem?} from 
     */
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
            ) collisions.push(Item);
        }
        collisions.sort((a, b) => Math.sqrt(b.x**2 + b.y**2) - Math.sqrt(a.x**2 + a.y**2));

        MergeFunctions[from.MergeFuntion](from, collisions);
    }

    get size() {
        return {
            width: this.ele.offsetWidth,
            height: this.ele.offsetHeight
        };
    }
};

export default new MergeField();