function solution(arr, k) {
    /*
    if(k % 2 === 0) {
        return arr.map(x => x + k);
    } else return arr.map(x => x * k);
    */
    
    return arr.map(x => k % 2 ? x * k : x + k);
}