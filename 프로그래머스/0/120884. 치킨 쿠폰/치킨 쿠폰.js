function solution(chicken) {  
    let coupons = chicken;
    let answer = 0;
    
    while(coupons >= 10) {
        answer += Math.floor(coupons/10);
        coupons = Math.floor(coupons/10) + coupons%10;
    }
    
    return answer;
}