function solution(bin1, bin2) {
    // return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
    
    const n1 = bin1.split('').reverse().reduce((sum, n, idx) => sum += n * Math.pow(2, idx), 0);
    const n2 = bin2.split('').reverse().reduce((sum, n, idx) => sum += n * Math.pow(2, idx), 0);
    
    let sum = n1 + n2;
    
    let answer = '';

    if(sum === 0) {
        return "0";
    }
    
    for(let i = 11; i >= 0; i--) {
        const n = Math.pow(2, i)
        
        if(sum >= n) {
            answer += "1";
            sum -= n;
        } else if(answer.length !== 0) answer += "0";
    }
    
    return answer;
}