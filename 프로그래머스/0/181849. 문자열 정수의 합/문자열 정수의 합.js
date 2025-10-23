function solution(num_str) {
    let answer = 0;
    for(let n of num_str) {
        answer += +n;
    }
    
    return answer;
}