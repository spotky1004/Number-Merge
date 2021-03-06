import MergeField from "./MergeField.js";
import MergeItemConstructor from "../types/MergeItemConstructor.js";

// const Char = document.createElement("span");
// Char.style.display = "inline-block";
// Char.style.fontSize = "2.6em";
// Char.innerText = "0";
// document.body.appendChild(Char);
// const CharSize = {
//     x: Char.offsetWidth,
//     y: Char.offsetHeight
// };
// Char.remove();

export default class MergeItem {
    /**
     * @param {import("../types/MergeItemConstructor.js").MergeItemConstructor} obj 
     */
    constructor({ symbol, type, id, tags, MergeFuntion, locked = false, position = {}, style = {} }) {
        this.type = type;
        this.id = id ?? `${this.type}_T${new Date().getTime()}_R${Math.floor(Math.random()*16**6).toString(16)}`;
        this.tags = tags.map((e) => e.toString());
        this.MergeFuntion = MergeFuntion;

        const ele = document.createElement("span");
        ele.classList.add("merge-item");
        ele.dataset.id = this.id;
        for (const s in style) {
            ele.style[s] = style[s];
        }
        this.ele = ele;

        this.symbol = symbol + "";
        this.locked = locked;

        // To read offsetWidth/Height
        document.body.appendChild(this.ele);
        this.position = {
            x: position.x ?? Math.random(),
            y: position.y ?? Math.random()
        };
        this.ele.remove();
    }

    /** @param {string} str */
    set symbol(str) {
        const NumberLimit = MergeField.loadedLevel.stageRules.NumberLimit;
        if (
            !isNaN(parseInt(str)) &&
            !isNaN(+str)
        ) str = Math.max(NumberLimit.min, Math.min(NumberLimit.max, +str));
        if (!this.locked) this._symbol = str + "";
        
        this.ele.innerText = this._symbol;
        return this._symbol;
    }
    get symbol() {
        return this._symbol;
    }

    set locked(bool) {
        this._locked = bool;
        this.ele.classList[this._locked ? "add" : "remove"]("locked");
        return this._locked;
    }
    get locked() {
        return this._locked;
    }

    /**
     * @param { { x: number, y: number } } position
     */
    set position({ x, y }) {
        const MergeFieldEle = MergeField.ele;
        const SizePx = this.sizePx;

        x = Math.max(0, Math.min(1, x));
        y = Math.max(0, Math.min(1, y));

        this._position = { x, y };
        this.ele.style.left = (x - SizePx.width / MergeFieldEle.offsetWidth / 2)*100 + "%";
        this.ele.style.top = (y - SizePx.height / MergeFieldEle.offsetHeight / 2)*100 + "%";
        return this._position;
    }
    get position() {
        return this._position;
    }
    get positionPx() {
        return {
            x: MergeField.offsetWidth * this._position.x,
            y: MergeField.offsetHeight * this._position.y
        }
    }
    get centerPositionPx() {
        const MergeFieldEle = MergeField.ele;
        const SizePx = this.sizePx;

        return {
            x: this._position.x * MergeFieldEle.offsetWidth - SizePx.width / MergeFieldEle.offsetWidth / 2,
            y: this._position.y * MergeFieldEle.offsetHeight - SizePx.height / MergeFieldEle.offsetHeight / 2
        }
    }
    get sizePx() {
        return {
            width: this.ele.offsetWidth,
            height: this.ele.offsetHeight
        }
    }
    get size() {
        const MergeFieldEle = MergeField.ele;
        
        return {
            width: this.sizePx.width / MergeFieldEle.offsetWidth,
            height: this.sizePx.height / MergeFieldEle.offsetHeight
        }
    }

    /**
     * @param {string|string[]} tags 
     */
    hasTag(tags) {
        if (typeof tags === "string") {
            return this.tags.includes(tags);
        } else {
            return tags.some(tag => this.tags.includes(tag));
        }
    }

    export() {
        return {
            symbol: this._symbol,
            id: this.id,
            tags: this.tags,
            position: this.position,
            MergeFuntion: this.MergeFuntion
        };
    }
}