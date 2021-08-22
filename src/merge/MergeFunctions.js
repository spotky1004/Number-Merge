import MergeField from "./MergeField.js";
import MergeItem from "./MergeItem.js";
import ItemTypes from "./ItemTypes.js";
import * as Operators from "../math.js";

/** Util Functions */
function removeAll(items) {
    for (var i = 0; i < items.length; i++) MergeField.removeItem(items[i].id);
}

let NumberLimit = Number.MAX_SAFE_INTEGER;

/** Main Functions */
/** @type {Object.<string, function(MergeItem, MergeItem[]): void>} */
const MergeFunctions = {
    number(mainItem, mergeItems) {
        const mergeables = mergeItems.filter((e) => e.hasTag(["number", "operator"]));

        if (mergeables.length === 0) {
            if (mergeItems.length >= 1) {
                this.term(mainItem, mergeItems);
            }
            return;
        }

        const toMerge = mergeables.slice(0, 1)[0];
        let symbol;
        switch (toMerge.type) {
            case "number":
                symbol = +mainItem.symbol + +toMerge.symbol;
                break;
            case "operator":
                switch(toMerge.symbol) {
                    case "+":
                        symbol = +mainItem.symbol + 1;
                        break;
                    case "-":
                        symbol = +mainItem.symbol - 1;
                        break;
                    case "×":
                        symbol = mainItem.symbol**2;
                        break;
                    case "÷":
                        symbol = 1;
                        break;
                    case "!":
                        symbol = Operators.factorial(mainItem.symbol);
                        break;
                }
                break;
        }
        symbol = Math.min(NumberLimit, +symbol);
            MergeField.addItem({
            ...ItemTypes.number(),
            position: mainItem.position,
            symbol
        });

        
        removeAll([mainItem, toMerge]);
    },
    base(mainItem, mergeItems) {
        
    },
    operator(mainItem, mergeItems) {
        const mergeables = mergeItems.filter(e => e.hasTag("number"));

        if (mergeables.length === 0) return;

        const toMerge = mergeables.slice(0, 1)[0];
        MergeField.addItem({
            ...ItemTypes.term(),
            position: mainItem.position,
            symbol: toMerge.symbol + mainItem.symbol
        });
        
        removeAll([mainItem, toMerge]);
    },
    term(mainItem, mergeItems) {
        const mergeables = mergeItems.filter(e => e.hasTag("number"));

        if (mergeables.length === 0) {
            if (mergeItems.length >= 1) {
                this.text(mainItem, mergeItems);
            }
            return;
        };

        const toMerge = mergeables.slice(0, 1)[0];

        const [number, operator] = [mainItem.symbol.slice(0, -1), mainItem.symbol.slice(-1)];

        let symbol;
        switch (operator) {
            case "+":
                symbol = +number + +toMerge.symbol;
                break;
            case "-":
                symbol = +number - +toMerge.symbol;
                break;
            case "×":
                symbol = number * toMerge.symbol;
                break;
            case "÷":
                symbol = Math.floor(number / toMerge.symbol);
                break;
            case "!":
                symbol = Operators.factorial(number, toMerge.symbol);
                break;
        }

        symbol = Math.min(NumberLimit, +symbol);

        MergeField.addItem({
            ...ItemTypes.number(),
            position: mainItem.position,
            symbol
        });
        
        removeAll([mainItem, toMerge]);
    },
    text(mainItem, mergeItems) {
        const mergeables = mergeItems.filter((e) => e.hasTag(["text", "number"]));

        if (mergeables.length === 0) return;

        const toMerge = mergeables.slice(0, 1)[0];

        MergeField.addItem({
            ...ItemTypes.text(),
            position: mainItem.position,
            symbol: toMerge.symbol + mainItem.symbol
        });

        removeAll([mainItem, toMerge]);
    }
};
export default MergeFunctions;