function solution(num, total) {
    let answer = [];
    let sum = 0;
    
    for(let i = 0; i < num; i++) {
        sum += i;
    }
    
    let start = (total - sum) / num;
    
    for(let j = start; j < start + num; j++){
        answer.push(j);
    }
    
    return answer;
}