function solution(price) {
    let result = 0;
    
    if(price >= 500000) {
        result = price * (1 - 0.2);
    } else if (price >= 300000) {
        result = price * (1 - 0.1);
    } else if (price >= 100000) {
        result = price * (1 - 0.05);
    } else {
        result = price;
    }
    
    return Math.trunc(result);
}