function solution(arr, n) {
    return arr.map((x, idx) => arr.length % 2 !== idx % 2 ? x + n : x);
}