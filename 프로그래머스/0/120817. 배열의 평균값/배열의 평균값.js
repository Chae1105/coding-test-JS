function solution(numbers) {
    const avg = (numbers.reduce((acc, num) => {
        return acc += num;
    }, 0)) / numbers.length;
    return avg;
}