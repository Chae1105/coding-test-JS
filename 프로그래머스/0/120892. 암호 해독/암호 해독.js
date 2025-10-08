function solution(cipher, code) {
    let answer = "";
    for(let i in cipher) {
        if((Number(i)+1) % code === 0) answer += cipher[i];
    }
    return answer;
}