function solution(n) {
    let answer = new Set(); // 중복값 제거
    
    for(let i = 2; i <= n; i++) {
        while(n % i === 0) {
            answer.add(i);
            n /= i;
        }
    }

    return [...answer];
}