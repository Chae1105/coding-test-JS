function solution(num, k) {
    let answer = num.toString().indexOf(k.toString());
    
    return answer === -1 ? -1 : answer + 1;
}