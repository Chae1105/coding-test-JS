function solution(code) {
    let ret = ""
    let mode = false;
    
    for(let i = 0; i < code.length; i++) {
        if(code[i] === "1") {
            mode = !mode;
        } else if((mode && i%2===1) || (!mode && i%2===0)) {
            ret += code[i];
        }
    }
    
    return ret ? ret : "EMPTY";
}