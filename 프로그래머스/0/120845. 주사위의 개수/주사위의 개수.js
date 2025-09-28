function solution(box, n) {
    let a = 1;
    for(let i in box) {
        a *= Math.floor(box[i] / n);
    }
    
    return a;
    
    /*
    let [width, length, height] = box;
    return Math.floor(width / n) + Math.floor(length / n) + Math.floor(height / n);
    */
}