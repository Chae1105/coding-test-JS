function solution(s) {
    /*
    const answer = s.split(" ").map(n => +n).sort((a, b) => a - b);
    return `${answer[0]} ${answer.at(-1)}`;
    */
    
    const answer = s.split(" ");
    return `${Math.min(...answer)} ${Math.max(...answer)}`;
}