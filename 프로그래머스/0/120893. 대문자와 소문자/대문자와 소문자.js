function solution(my_string) {
    let answer = my_string.split('');
    
    for(let i in answer) {
        if(answer[i] === answer[i].toLowerCase()) {
            answer[i] = answer[i].toUpperCase();
        } else answer[i] = answer[i].toLowerCase();
    }
    
    return answer.join('');
}