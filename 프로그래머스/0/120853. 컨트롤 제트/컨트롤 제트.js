function solution(s) {
    let arr = s.split(' ');
    let answer = [];
    
    for(let i in arr) {
        if(arr[i] !== "Z") {
            answer.push(arr[i]);
        } else {
            answer.pop();
        }
    }
    return answer.map(n => Number(n)).reduce((sum, num) => sum += num, 0);
}