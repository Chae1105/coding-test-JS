function solution(s){
    let p = 0;
    let y = 0;
    
    for(let c of s) {
        if(c === "p" || c === "P") p++;
        else if(c === "y" || c === "Y") y++;
    }
    
    return p === 0 && y === 0 ? true : (p === y ? true : false);
}