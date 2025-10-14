function solution(n) {
    /*
    let i = 1;
    
    while(Math.pow(i, 2) <= n) {
        if(Math.pow(i, 2) === n) return 1;
        else i++;
    }
    
    return 2;
    */
    
    // isInteger : 정수인지 판별하는 함수
    return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}