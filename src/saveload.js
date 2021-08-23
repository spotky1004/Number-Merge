import SaveData from "./types/SaveData.js";

export function save(data, key="number_merge_1") {
    localStorage.setItem(key, JSON.stringify(data));
}

/**
 * @returns {SaveData}
 */
export function load(key="number_merge_1") {
    return mergeObject(JSON.parse(localStorage.getItem(key)), SaveData ?? {});
}



function mergeObject(target, source) {
    target = target ?? {};
    for (const i in source) {
        if (Array.isArray(source[i])) {
            target[i] = target[i] ?? [];
            mergeArray(target[i], source[i])
        } else if (typeof source[i] === "object") {
            target[i] = mergeObject(target[i], source[i]);
        } else {
            target[i] = source[i].constructor(target[i] ?? source[i]);
        }
    }
    return target;
}
function mergeArray(target, source) {
    for (let i = 0, l = source.length; i < l; i++) {
        if (Array.isArray(source[i])) {
            mergeArray(target[i], source[i]);
        } else if (typeof source[i] === "object") {
            target[i] = mergeObject(target[i], source[i]);
        } else {
            target[i] = source[i].constructor(target[i] ?? source[i]);
        }
    }
    return target;
}