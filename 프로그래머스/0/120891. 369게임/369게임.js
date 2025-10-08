function solution(order) {
    /*
    let answer = 0;
    let num = order.toString();
    
    for(let i in num) {
        if(num[i] === "3" || num[i] === "6" || num[i] === "9") answer += 1;
    }
    
    return answer;
    */
    
    let answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
    
    return answer;
    
}