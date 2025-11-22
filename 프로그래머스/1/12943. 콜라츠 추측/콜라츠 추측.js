function solution(num) {
    /*
    let count = 0;
    
    while (num !== 1) {
        if(num%2 === 0) {
            num /= 2;
        } else {
            num = num * 3 + 1;
        }
        
        count++;
        if(count >= 500) return -1;
    }
    
    return count;
    */
    
    let count = 0;
    
    while(num !== 1 && count < 500) {
        num = num % 2 ? num * 3 + 1 : num / 2;
        count++;
    }
    
    return num === 1 ? count : -1;
}