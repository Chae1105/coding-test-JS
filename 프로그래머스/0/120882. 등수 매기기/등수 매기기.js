function solution(score) {
    const avg = score.map(x => (x[0] + x[1])/2);
    const avgSort = [...avg].sort((a, b) => b - a);
    
    /*
    let answer = [];
    for(let n of avg) {
        answer.push(avgSort.indexOf(n) + 1);
    }
    
    return answer;
    */
    return avg.map(x => avgSort.indexOf(x) + 1);
}