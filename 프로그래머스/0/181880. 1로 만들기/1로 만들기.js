function solution(num_list) {
    let answer = 0;
    for(let n of num_list) {
        for(let i = 1; i < 6; i++) {
           if(n / Math.pow(2, i) < 1) {
               answer += i - 1; 
               break;
           }
        }
    }
    
    return answer;
}