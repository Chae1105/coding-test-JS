function solution(quiz) {
    let answer = [];
    
    for(let str of quiz) {
        let arr = str.split(' ');
        if(arr[1] === '+') {
            if(Number(arr[0]) + Number(arr[2]) === +arr.at(-1)) answer.push("O");
            else answer.push("X");
        } else {
            if(Number(arr[0]) - Number(arr[2]) === +arr.at(-1)) answer.push("O");
            else answer.push("X");
        }
    }
    
    return answer;
}