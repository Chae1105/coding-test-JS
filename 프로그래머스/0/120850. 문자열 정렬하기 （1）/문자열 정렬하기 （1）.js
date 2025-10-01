function solution(my_string) {
    // Array.from으로 각 요소를 숫자 형태로 변환한 배열 만들기
    let numbers = Array.from(my_string.replace(/[^0-9]/g, ''), Number);
    
    return numbers.sort((a, b) => a-b);
    
    /* 한 자리 숫자만 있어서 문자열 상태에서 sort 사용 가능
    // \d : 0부터 9까지, 각각의 숫자 문자 하나를 의미
    // match : 일치하는 문자들로만 이루어진 새 문자열을 반환
     return my_string.match(/\d/g).sort((a, b) => a - b).map(n => Number(n));
     
     return my_string.match(/\d/g).map(n => Number(n)).sort((a, b) => a - b);
    */
}