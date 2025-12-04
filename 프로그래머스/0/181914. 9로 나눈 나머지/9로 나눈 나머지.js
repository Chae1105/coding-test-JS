function solution(number) {
    let sum = 0;
    
    for(let n of number) {
        sum += +n;
    }
    
    return sum % 9;
}