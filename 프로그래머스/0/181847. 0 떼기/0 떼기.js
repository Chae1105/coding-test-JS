function solution(n_str) {
    let answer = n_str.split('');
    
    while(answer[0] === "0") {
        answer.shift();
    }
    
    return answer.join('');
}