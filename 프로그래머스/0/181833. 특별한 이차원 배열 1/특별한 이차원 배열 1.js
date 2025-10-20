function solution(n) {
    let answer = Array.from({length : n}, () => Array(n).fill(0));
    let i = 0;
    
    for(let arr of answer) {
        console.log(arr);
        arr[i] = 1;
        i++;
        console.log(arr);
    }
    
    return answer;
}