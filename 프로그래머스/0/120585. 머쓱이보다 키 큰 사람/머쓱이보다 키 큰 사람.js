function solution(array, height) {
    let taller = array.filter((item) => item > height);
    return taller.length;
}