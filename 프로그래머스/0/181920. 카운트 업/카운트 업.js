function solution(start_num, end_num) {
    /*
    const answer = [];
    
    for(let i = start_num; i <= end_num; i++) {
        answer.push(i);
    }
    
    return answer;
    */
    
    return Array(end_num-start_num + 1).fill(start_num).map((n, idx) => n + idx);
}
