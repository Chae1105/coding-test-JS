function solution(numbers, direction) {
    let answer = [];
    if(direction === "right") {
        answer = numbers.slice(0, numbers.length-1);
        answer.unshift(numbers[numbers.length-1]);
    } else {
        answer = numbers.slice(1, numbers.length);
        answer.push(numbers[0]);
    }
    
    return answer;
}