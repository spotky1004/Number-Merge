import  MergeField from "./merge/MergeField.js";

// Util
/**
 * @param {string|string[]} value 
 */
function randomPick(value) {
    if (typeof value === "string") value = value.split("");
    return value[Math.floor(Math.random() * value.length)];
} 

const tick = {
    lastSpawn: new Date().getTime(),
    lastTick: new Date().getTime(),
    speed: 500,
};
window.tick = tick;

function Tick() {
    // init
    const now = new Date().getTime();
    const dT = now - tick.lastTick;
    tick.lastTick = now;

    // spawn
    if (now - tick.lastSpawn > tick.speed) {
        tick.lastSpawn = now;
        MergeField.addItem({
            ...ItemTypes[randomPick(Object.keys(ItemTypes))](),
        });
    }

    // loop
    requestAnimationFrame(Tick);
}
requestAnimationFrame(Tick); // start loop
