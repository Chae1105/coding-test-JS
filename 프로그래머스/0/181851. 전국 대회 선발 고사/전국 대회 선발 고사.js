function solution(rank, attendance) {
    const list = rank.filter((_, idx) => attendance[idx]).sort((a, b) => a - b);
    const [a, b, c] = list.map((n) => rank.indexOf(n));
    
    return 10000 * a + 100 * b + c;
}