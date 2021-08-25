import MergeField from "./MergeField.js";
import MergeItem from "./MergeItem.js";
import ItemTypes from "./ItemTypes.js";

/**
 * @typedef MergeFunctionConstructor
 * @property {string[]} mergeableTypes
 * @property {string} outputMergeType
 * @property {string} fallbackMergeFunction
 * @property {function(string, string): string} defaultMerge
 * @property {"mainItem" | "mergeItems"} operatorAt
 * @property {function(string, string): string} getNumber
 * @property {function(string, string): string} getOperctor
 * @property {Object.<string, function(string, string): string>} operatorMerge
 * @property {MergeFunction[]} MergeFunctions
 */

export default class MergeFunction {
    /** @param {MergeFunctionConstructor} obj */
    constructor({
        mergeableTypes,
        outputMergeType,
        fallbackMergeFunction,
        defaultMerge,
        getNumber,
        operatorAt,
        getOperctor,
        operatorMerge,
        MergeFunctions
    }) {
        this.mergeableTypes = mergeableTypes ?? [];
        this.outputMergeType = outputMergeType ?? null;
        this.fallbackMergeFunction = fallbackMergeFunction;
        this.defaultMerge = defaultMerge;
        this.operatorAt = operatorAt;
        this.getNumber = getNumber;
        this.getOperctor = getOperctor;
        this.operatorMerge = operatorMerge;
        this.MergeFunctions = MergeFunctions;
    }

    /**
     * @param {MergeItem} mainItem 
     * @param {MergeItem[]} mergeItems 
     * @param {import("../types/StageRules.js").StageRules} stageRules
     */
    merge(mainItem, mergeItems, stageRules) {
        // Filter mergeables
        const mergeables = mergeItems.filter((e) => e.hasTag(this.mergeableTypes));

        if (mergeables.length === 0) {
            // Do fallback
            if (mergeItems.length >= 1) {
                if (typeof this.fallbackMergeFunction === "undefined") return;
                this.MergeFunctions[this.fallbackMergeFunction].merge(mainItem, mergeItems);
            }
            return;
        }

        // Get nearest mergeable
        const toMerge = mergeables.slice(0, 1)[0];

        // Do merge
        const [mainSymbol, toMergeSymbol] = [mainItem.symbol, toMerge.symbol]
        let symbol;
        if (toMerge.type !== "operator" && typeof this.defaultMerge !== "undefined") {
            symbol = this.defaultMerge(mainSymbol, toMergeSymbol);
        } else {
            if (typeof this.operatorMerge === "undefined") return;
            // Get Number and Operator from item
            let number;
            if (typeof this.getNumber !== "undefined") number = this.getNumber(mainSymbol, toMergeSymbol);
            const operator = this.getOperctor(mainSymbol, toMergeSymbol);

            let a, b;
            if (this.operatorAt === "mainItem") {
                [a, b] = [+(number ?? mainSymbol), toMergeSymbol];
            } else if (this.operatorAt === "mergeItems") {
                [a, b] = [+mainSymbol, +(number ?? toMergeSymbol)];
            }
            symbol = this.operatorMerge[operator](a, b);
        }


        // Apply number limit
        if (
            !isNaN(parseInt(symbol)) &&
            !isNaN(+symbol)
        ) symbol = Math.max(stageRules.NumberLimit.min, Math.min(stageRules.NumberLimit.max, +symbol));
        // Add result item in the MergeField
        MergeField.addItem({
            ...ItemTypes[this.outputMergeType](),
            position: mainItem.position,
            symbol
        });

        // Remove items that used for merge
        removeAll([mainItem, toMerge]);
    }
}

function removeAll(items) {
    for (var i = 0; i < items.length; i++) MergeField.removeItem(items[i].id);
}
