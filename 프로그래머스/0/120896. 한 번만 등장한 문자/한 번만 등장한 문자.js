function solution(s) {
    let answer = s
    .split('')
    .filter((c, idx) => s.indexOf(c) === s.lastIndexOf(c))
    .sort().join('');
    
    return answer;
}