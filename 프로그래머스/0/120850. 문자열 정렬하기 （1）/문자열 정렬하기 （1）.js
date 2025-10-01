function solution(my_string) {
    let numbers = Array.from(my_string.replace(/[^0-9]/g, ''), Number);
    return numbers.sort((a, b) => a-b);
}