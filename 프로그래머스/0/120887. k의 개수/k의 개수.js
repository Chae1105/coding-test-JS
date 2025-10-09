function solution(i, j, k) {
    // 정수들을 문자열로 변환한 뒤, k를 제외한 문자들을 제거한 후 남은 문자열의 길이로 k의 개수 찾기
    let answer = 0;
    let regexp = new RegExp(`[^${k}]`, 'g');
    for(let n = i; n <= j; n++) {
        answer += n.toString().replace(regexp, '').length;
    }
    
    return answer;
}