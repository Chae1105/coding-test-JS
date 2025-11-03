function solution(num_list) {
    return num_list.length < 11 ? num_list.reduce((acc, n) => acc *= n, 1) : num_list.reduce((sum, n) => sum += n, 0);
}