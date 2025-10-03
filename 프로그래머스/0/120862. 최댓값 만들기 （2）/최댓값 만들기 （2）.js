function solution(numbers) {
    /*
    numbers.sort((a, b) => a - b);
    
    const first = numbers[0] * numbers[1];
    const last = numbers.at(-1) * numbers.at(-2);
    
    return first >= last ? first : last;
    */
    
    numbers.sort((a, b) => a - b);
    
    return Math.max(numbers[0] * numbers[1], numbers.at(-1) * numbers.at(-2));
}