function solution(myString, pat) {
    let end = 0;
    
    for(let i = 0; i <= myString.length - pat.length; i++) {
        if(myString.slice(i, pat.length + i) === pat) end = pat.length + i;
    }
    
    return myString.slice(0, end);
}