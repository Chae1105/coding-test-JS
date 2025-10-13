function solution(a, b) {
    /*
    for(let i = 2; i <= a; i++) {
        if(a%i === 0 && b%i === 0) {
            a /= i;
            b /= i;
        }
    }
    
    let n = 2;
    let answer = [];
    
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
    */
    
    let n = 1;
    for (let i = 1; i <= Math.min(a,b); i++) {
        if (a%i===0 && b%i===0) n = i;
    } // a, b의 최대공약수 구하기

    b/=n;
    while (b%2===0) b/=2;
    while (b%5===0) b/=5;

    return b === 1 ? 1 : 2; // 2와 5로만 나눈 후의 값이 1인지 확인
}