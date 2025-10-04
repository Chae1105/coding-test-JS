function solution(n) {
    let diverse = 0;
    
    for(let i = 1; i <= n; i++) {
        if(n % i === 0) diverse++;
    }
    
    return diverse;
}