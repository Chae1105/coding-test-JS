function solution(num_list) {
    /*
    const sum1 = num_list.reduce((sum, n, i) => i % 2 === 0 ? sum += n : sum, 0);
    const sum2 = num_list.reduce((sum, n, i) => i % 2 === 1 ? sum += n : sum, 0);
    
    return Math.max(sum1, sum2);
    */
    
    let even = 0;
    let odd = 0;
    
    num_list.map((num, idx) => idx % 2 === 0 ? even += num : odd += num);
    
    return Math.max(even, odd);
}