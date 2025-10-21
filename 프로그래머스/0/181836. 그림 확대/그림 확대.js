function solution(picture, k) {
    let answer = [];
    
    for(let str of picture) {
        let s = "";
        for(let c of str) {
            s += c.repeat(k);
        }
        
        for(let i = 0; i < k; i++) {
            answer.push(s);
        }
    }
    
    return answer;
}