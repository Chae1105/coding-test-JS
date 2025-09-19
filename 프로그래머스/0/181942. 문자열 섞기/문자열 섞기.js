function solution(str1, str2) {
    var answer = '';
    let str = "";
    for(let i = 0; i < str1.length; i++) {
        str = str1[i] + str2[i];
        answer += str;
    }
    
    return answer;
}