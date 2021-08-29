export function factorial(from, count = from) {
    if (Math.abs(count) > 200) return Infinity;

    let res = 1;
    for (let i = from; i > from - Math.abs(count); i--) {
        res *= i;
    }

    return res;
}

export function sigma(from, count = from) {
    if (Math.abs(count) > 20000) return Infinity;

    let res = 0;
    for (let i = from; i > from - Math.abs(count); i--) {
        res += i;
    }

    return res;
}

