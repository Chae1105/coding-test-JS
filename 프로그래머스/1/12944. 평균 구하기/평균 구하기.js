function solution(arr) {
    return arr.reduce((sum, n) => sum += n, 0) / arr.length;
}