function solution(a, b) {
    for(let i = 2; i <= a; i++) {
        if(a%i === 0 && b%i === 0) {
            a /= i;
            b /= i;
        }
    }
    
    let n = 2;
    let answer = [];
    
    /*
    for(n; n <= b; n++) {
        if(b % n === 0) {
            b /= n;
            answer.push(n);
            n = 2;
        }
    }
    */
    
    while (b > 1) {
        if(b%n === 0) {
            answer.push(n);
            b /= n;
        } else {
            n++;
        }
    }

    // every : 배열의 모든 요소가 조건을 만족할 때에만 true 반환
    return answer.every(x => x === 2 || x === 5) ? 1 : 2;
}