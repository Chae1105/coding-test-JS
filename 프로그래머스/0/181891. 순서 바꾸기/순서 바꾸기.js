function solution(num_list, n) {
    //return [...num_list.slice(n), ...num_list.slice(0, n)];
    
    const answer = num_list.splice(n);
    answer.push(...num_list);
    
    return answer;
}