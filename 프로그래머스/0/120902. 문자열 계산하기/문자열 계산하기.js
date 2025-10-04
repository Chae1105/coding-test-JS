function solution(my_string) {
    let arr = my_string.split(' ');
    let answer = Number(arr[0]);
    
    for(let i = 1; i < arr.length; i+=2) {
        const operator = arr[i];
        const num = Number(arr[i+1]);
        
        if(operator === '+') {
            answer += num;
        } else {
            answer -= num;
        }
    }
    
    return answer;
}