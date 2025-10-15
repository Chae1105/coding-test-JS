function solution(my_str, n) {
    /*
    let answer = [];
    
    while(my_str.length !== 0) {
        answer.push(my_str.slice(0, n));
        my_str = my_str.slice(n, my_str.length);
    }
    
    return answer;
    */
    
    return my_str.match(new RegExp(`.{1,${n}}`, "g"));
}