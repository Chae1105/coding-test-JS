function solution(arr) {
    const answer = [];
    
    for(let n of arr) {
        answer.push(...Array(n).fill(n));
    }
    
    return answer;
}