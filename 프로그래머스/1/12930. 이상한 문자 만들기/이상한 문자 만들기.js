function solution(s) {
    let idx = 0;
    let answer = "";
    
    for(let c of s) {
        if(idx % 2 === 0) answer += c.toUpperCase();
        else if (idx % 2 === 1) answer += c.toLowerCase();
        else if (c === " ") answer += c;
        
        if(c !== " ") idx++;
        else idx = 0;
    }
    
    return answer;
}