function solution(strArr) {
    const obj = {};
    let answer = 0;
    
    for(let str of strArr) {
        obj[str.length] = obj[str.length] + 1 || 1;
    }
    
    for(let value of Object.values(obj)) {
        if(value > answer) answer = value;
    }
    
    return answer;
}