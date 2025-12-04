function solution(num_list) {
    const mul = num_list.reduce((acc, n) => acc *= n, 1);
    const sum = num_list.reduce((acc, n) => acc += n, 0);
    
    return sum*sum > mul ? 1 : 0;
}