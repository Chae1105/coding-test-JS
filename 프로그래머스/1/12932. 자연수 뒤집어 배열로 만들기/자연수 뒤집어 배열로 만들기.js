function solution(n) {
    //return String(n).split('').reverse().map(n => +n);
    return n.toString().split('').reverse().map(n => parseInt(n));
}