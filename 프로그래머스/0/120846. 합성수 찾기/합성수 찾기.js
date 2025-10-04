function solution(n) {
    let count = 0;
    
    if(n > 3) {
        for(let i = 4; i <= n; i++) {
            let diverse = 0;
            
            for(let j = 1; j <= i; j++) {
                if(i % j === 0) diverse++;
                if(diverse === 3) {
                    count++;
                    break;
                }
            }
        }
    }
    
    return count;
}