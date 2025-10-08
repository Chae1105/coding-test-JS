function solution(my_string) {
    /*
    let answer = my_string.split('');
    
    for(let i in answer) {
        if(answer[i] === answer[i].toLowerCase()) {
            answer[i] = answer[i].toUpperCase();
        } else answer[i] = answer[i].toLowerCase();
    }
    
    return answer.join('');
    */
    
    /* map 사용
    let answer = my_string.split('');
    return answer.map(s => s === s.toLowerCase() ? s.toUpperCase() : s.toLowerCase()).join('');
    */
    
    // 배열로 변환 X
    let answer = "";
    for(let s of my_string) answer += s === s.toLowerCase() ? s.toUpperCase() : s.toLowerCase();
    return answer;
}