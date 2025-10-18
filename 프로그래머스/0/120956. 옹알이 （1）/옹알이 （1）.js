function solution(babbling) {
    /*
    let can = ["aya", "ye", "woo", "ma"];
    let answer = 0;
    
    for(let s of babbling) {
        let str = "";
        
        for(let i = 0; i < s.length; i++) {
            str += s[i];
            if(can.includes(str)) {
                str = "";
            }
        }
        if(str.length === 0) answer++;
    }
    
    return answer;
    */
    
    let answer = 0;
    const reg = /^(aya|ye|woo|ma)+$/;
    
    babbling.forEach(word => {
        if(reg.test(word)) answer++;
    })
    
    return answer;
}