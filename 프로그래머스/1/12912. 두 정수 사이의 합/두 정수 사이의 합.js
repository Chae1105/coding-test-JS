function solution(a, b) {
    if(a === b) return a;
    
    /*
    const n1 = Math.min(a, b);
    const n2 = Math.max(a, b);
    let answer = 0;
    
    for(let i = n1; i <= n2; i++) {
        answer += i;
    }
    
    return answer;
    */
    
    return ((a+b) * (Math.abs(a-b) + 1)) / 2; //가우스..
}