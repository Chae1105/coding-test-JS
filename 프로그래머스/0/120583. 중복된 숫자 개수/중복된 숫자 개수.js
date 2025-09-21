function solution(array, n) {
    return array.reduce((acc, num) => {
        return num === n ? acc + 1 : acc;
    }, 0);
}