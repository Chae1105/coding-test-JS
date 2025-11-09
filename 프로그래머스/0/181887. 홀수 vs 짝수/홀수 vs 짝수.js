function solution(num_list) {
    const sum1 = num_list.reduce((sum, n, i) => i % 2 === 0 ? sum += n : sum, 0);
    const sum2 = num_list.reduce((sum, n, i) => i % 2 === 1 ? sum += n : sum, 0);
    
    return Math.max(sum1, sum2);
}