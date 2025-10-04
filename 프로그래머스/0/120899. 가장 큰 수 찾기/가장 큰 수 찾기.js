function solution(array) {
    const maxN = [...array].sort((a, b) => a - b).at(-1);
    return [maxN, array.indexOf(maxN)];
}