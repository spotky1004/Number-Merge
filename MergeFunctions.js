import MergeField from "./MergeField.js";
import MergeItem from "./MergeItem.js";

/** Util Functions */
function removeAll(items) {
    for (var i = 0; i < items.length; i++) MergeField.removeItem(items[i].id);
}

/** Main Functions */
/** @type {Object.<string, function(MergeItem, MergeItem[]): void>} */
const MergeFunctions = {
    Number(mainItem, mergeItems) {
        const mergeables = mergeItems.filter(e => e.hasTag("number"));

        if (mergeables.length < 1) {
            if (mergeItems.length >= 1) this.Base(mainItem, mergeItems);
            return;
        }

        const toMerge = mergeItems.slice(0, 1);
        MergeField.addItem({
            symbol: +mainItem.symbol + +toMerge[0].symbol,
            id: "number",
            tags: ["number", "base"],
            MergeFuntion: "Number",
            position: mainItem.position,
            style: {
                textShadow: "0 0 1vh #0f0"
            }
        });
        
        removeAll([mainItem, ...toMerge]);
    },
    Base(mainItem, mergeItems) {
        const mergeables = mergeItems.filter(e => e.hasTag(["base", "operator"]));

        if (mergeables.length < 1) return;

        const toMerge = mergeItems.slice(0, 1);
        if (Math.max(toMerge[0].symbol.length, mainItem.symbol.length) >= 5) return;
        MergeField.addItem({
            symbol: mainItem.symbol + toMerge[0].symbol,
            id: "base",
            tags: ["base", "complex"],
            MergeFuntion: "Base",
            position: mainItem.position,
            style: {
                textShadow: "0 0 1vh #000"
            }
        });

        removeAll([mainItem, ...toMerge]);
    },
    Operator(mainItem, mergeItems) {

    }
};
export default MergeFunctions;