function solution(strArr) {
    /*
    const obj = {};
    let answer = 0;
    
    for(let str of strArr) {
        obj[str.length] = obj[str.length] + 1 || 1;
    }
    
    for(let value of Object.values(obj)) {
        if(value > answer) answer = value;
    }
    
    return answer;
    */
    
    const counter = new Map();
    
    for(let str of strArr) {
        counter.set(str.length, (counter.get(str.length) || 0) + 1);

    }

    return Math.max(...counter.values());
}