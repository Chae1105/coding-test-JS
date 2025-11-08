function solution(s, n) {
    // 아스키코드 이용
    // 대문자: A(65) ~ Z(90)
    // 소문자: a(97) ~ z(122)
    // (code - 65 + n) % 26 + 65 : 대문자
    // (code - 97 + n) % 26 + 97 : 소문자
    let answer = "";
    
    for(let c of s) {
        if(c >= "A" && c <= "Z") {
            answer += String.fromCharCode((c.charCodeAt(0) - 65 + n) % 26 + 65);
        } else if (c >= "a" && c <= "z") {
            answer += String.fromCharCode((c.charCodeAt(0) - 97 + n) % 26 + 97);
        } else {
            answer += c;
        }
    }
    
    return answer;
}