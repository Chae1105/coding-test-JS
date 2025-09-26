function solution(balls, share) {
    let num = 1;
    let den = 1;
    
    for (let a = 0;a < share; a++) {
        num *= share - a;
        den *= balls - a;
    }
    
    return den / num;
}