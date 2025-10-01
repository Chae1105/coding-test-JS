function solution(my_string) {
    let numbers = my_string.match(/\d/g).map(n => Number(n));
    return numbers.reduce((sum, num) => sum += num, 0);
}