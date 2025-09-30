function solution(n) {
    function factorial(n) {
        if(n !== 0) return n * factorial(n-1);
        else return 1;
    }
    
    let num = 1;
    
    while(num < 11) {
        if(factorial(num) > n) break;
        else num++;
    }
    
    return num-1;
}