function solution(my_string, index_list) {
    /*
    let answer = "";
    
    for(let idx of index_list) {
        answer += my_string[idx];
    }
    
    return answer;
    */
    
    //return index_list.reduce((answer, idx) => answer += my_string[idx], "");
    
    return index_list.map(idx => my_string[idx]).join('');
}