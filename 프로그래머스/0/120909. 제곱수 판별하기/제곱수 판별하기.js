function solution(n) {
    let i = 1;
    
    while(Math.pow(i, 2) <= n) {
        if(Math.pow(i, 2) === n) return 1;
        else i++;
    }
    
    return 2;
}