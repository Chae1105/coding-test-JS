function solution(myString) {
    let answer = "";
    
    for(let s of myString) {
        if(s < 'l') answer += 'l';
        else answer += s;
    }
    
    return answer;
}