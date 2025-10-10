function solution(score) {
    /*
    const avg = score.map(x => (x[0] + x[1])/2);
    const avgSort = [...avg].sort((a, b) => b - a);
    
    return avg.map(x => avgSort.indexOf(x) + 1);
    */

    /*
    let answer = [];
    for(let n of avg) {
        answer.push(avgSort.indexOf(n) + 1);
    }
    
    return answer;
    */
    
    return score.map((e) => {
        return (
            score.filter((n) => (n[0] + n[1]) / 2 > (e[0] + e[1]) / 2).length + 1
        );
    });
}
