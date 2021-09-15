export const LocalStorageKey = "number_merge_2";
export const WorldNames = [ "Main", "Generated", "Community" ];
/** @type {import("./types/StageRules.js").StageRules} */
export const DefaultStageRules = {
    MustUseAllItems: false,
    NumberLimit: {
        min: Number.MIN_SAFE_INTEGER,
        max: Number.MAX_SAFE_INTEGER
    }
};
