function solution(n) {
    // n과 6의 최소공배수 구하기
    const gcd = (a, b) => {
        return b === 0 ? a : gcd(b, a%b);
    }
    
    const g = gcd(n, 6);
    
    return ((n*6) / g) / 6;
}