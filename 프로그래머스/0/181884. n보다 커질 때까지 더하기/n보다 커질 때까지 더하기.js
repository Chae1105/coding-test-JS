function solution(numbers, n) {
    return numbers.reduce((sum, ele) => sum <= n ? sum += ele : sum);
}