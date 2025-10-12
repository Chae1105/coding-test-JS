function solution(my_string) {
    let str =  my_string.replace(/[a-zA-Z]/g, " ");
    
    let num = "";
    let answer = [];
    
    for(let i in str) {
        if(str[i] === " ") {
            if(num !== "") answer.push(+num);
            num = "";
        } else {
            num += str[i];
        }
    }
    
    answer.push(+num); // for문에서 마지막에 위치한 숫자는 push를 못 해줌
    
    return answer.reduce((sum, n) => sum += n, 0);
    
}