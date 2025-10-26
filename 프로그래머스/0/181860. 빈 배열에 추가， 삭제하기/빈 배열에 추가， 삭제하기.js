function solution(arr, flag) {
    let answer = [];
    
    for(let i in flag) {
        if(flag[i] === true) {
            for(let j = 0; j < arr[i] * 2; j++) {
                answer.push(arr[i]);
            }
        } else {
            if(answer.length < arr[i]) {
                answer = [];
            } else {
                for(let j = 0; j < arr[i]; j++) {
                    answer.pop();
                }
            }
        }
    }
    
    return answer;
}