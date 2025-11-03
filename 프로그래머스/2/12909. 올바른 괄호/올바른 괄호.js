function solution(s) {
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
}