function solution(n) {
    /* 효율성 테스트에서 4케이스나 실패함
    let count = 0;
    let i = 1;
    
    while(i <= n) {
        let sum = 0;
        
        for(let j = i; j <= n; j++) {
            sum += j;
            if(sum === n) count++;
            else if(sum > n) {
                sum = 0;
                break;
            }
        }
        i++;
    }
    return count;
    */
    
    let answer = 0;
    
    for(let i = 1; i <= n; i++) {
        if(n%i === 0 && i % 2 === 1) answer++;
    }
    
    return answer;
}