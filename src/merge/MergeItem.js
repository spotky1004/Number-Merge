import MergeField from "./MergeField.js";
import MergeItemConstructor from "../types/MergeItemConstructor.js";

const Char = document.createElement("span");
Char.style.display = "inline-block";
Char.style.fontSize = "2.6em";
Char.innerText = "0";
document.body.appendChild(Char);
const CharSize = {
    x: Char.offsetWidth,
    y: Char.offsetHeight
};
Char.remove();

export default class MergeItem {
    /**
     * @param {MergeItemConstructor} obj 
     */
    constructor({ symbol, type, id, tags, MergeFuntion, position = {}, style = {} }) {
        this.symbol = symbol + "";
        this.type = type;
        this.id = id ?? `${this.type}_T${new Date().getTime()}_R${Math.floor(Math.random()*16**6).toString(16)}`;
        this.tags = tags.map((e) => e.toString());
        this.MergeFuntion = MergeFuntion;

        const ele = document.createElement("span");
        ele.classList.add("merge-item");
        ele.innerText = this.symbol;
        ele.dataset.id = this.id;
        for (const s in style) {
            ele.style[s] = style[s];
        }
        this.ele = ele;

        this.position = {
            x: position.x ?? Math.random(),
            y: position.y ?? Math.random()
        };
    }
    symbol = new String;
    tags = [new String];
    _position = {x: 0, y: 0};

    /**
     * @param { { x: number, y: number } } position
     */
    set position({ x, y }) {
        const Size = this.size;

        x = Math.max(0, Math.min(1 - Size.width, x));
        y = Math.max(0, Math.min(1 - Size.height, y));

        this._position = { x, y };
        this.ele.style.left = x*100 + "%";
        this.ele.style.top = y*100 + "%";
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
    get size() {
        const SymbolLength = this.symbol.length;
        const MergeFieldEle = MergeField.ele;
        
        return {
            width: Math.max(SymbolLength*20, this.ele.offsetWidth) / MergeFieldEle.offsetWidth,
            height: Math.max(44, this.ele.offsetHeight) / MergeFieldEle.offsetHeight
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
            symbol: this.symbol,
            id: this.id,
            tags: this.tags,
            position: this.position,
            MergeFuntion: this.MergeFuntion
        };
    }
}