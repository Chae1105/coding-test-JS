function solution(s) {
    /*
    if(s[0] === ")" || s[s.length - 1] === "(") return false;

    const stack = [];
    
    for(let c of s) {
        stack.push(c);
        
        if(stack.length >= 2 && stack.at(-2)+stack.at(-1) === "()") {
            stack.pop();
            stack.pop();
        }
    }
    
    return stack.length === 0 ? true : false;
    */
    
    let answer = 0;
    
    for(let c of s) {
        answer += c === "(" ? 1 : -1;
        
        if(answer < 0) return false;
    }
    
    return answer === 0 ? true : false;
}