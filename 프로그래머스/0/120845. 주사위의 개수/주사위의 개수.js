function solution(box, n) {
    let a = 1;
    for(let i in box) {
        a *= Math.floor(box[i] / n);
    }
    
    return a;
}