export function factorial(from, count = from) {
    if (Math.abs(count) > 200) return Infinity;

    let res = 1;
    for (let i = from; i > from - Math.abs(count); i--) {
        res *= i;
    }

    return res;
}