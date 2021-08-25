export const LocalStorageKey = "number_merge_1";
export const WorldNames = [ "Main", "Community" ];
/** @type {import("./types/StageRules.js").StageRules} */
export const DefaultStageRules = {
    MustUseAllItems: false,
    NumberLimit: {
        min: Number.MIN_SAFE_INTEGER,
        max: Number.MAX_SAFE_INTEGER
    }
};
