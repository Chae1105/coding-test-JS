function solution(n) {
    return n.toString().split('').reduce((sum, x) => sum += Number(x), 0);
}