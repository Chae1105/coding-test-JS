function solution(numbers) {
    const num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    let str = "";
    let answer = "";
    for(let i = 0; i < numbers.length; i++) {
        str += numbers[i];
        if(num.includes(str)) {
            answer += num.indexOf(str).toString();
            str = "";
        }
    }
    
    return Number(answer);
}