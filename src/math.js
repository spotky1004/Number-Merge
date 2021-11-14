export function factorial(from, count = from) {
    //if (Math.abs(count) > 200) return Infinity;
    if (Math.abs(count) > 200 && !(count > from) && from < 0){return Infinity;}
    if (count > from && from >= 0){return 0;}
    if (Math.abs(count) > 200 && from < 0){return Infinity * (-1) ** count;}

    let res = 1;
    for (let i = from; i > from - Math.abs(count); i--) {
        res *= i;
    }

    return res;
}

export function sigma(from, count = from) {
    /*if (Math.abs(count) > 20000) return Infinity;*/

    let res = 0;
    /*for (let i = from; i > from - Math.abs(count); i--) {
        res += i;
    }*/
    
    res = Math.abs(count)*from + Math.abs(count)*(Math.abs(count)-1)*-0.5;
    
    return res;
}
