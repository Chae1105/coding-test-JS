function solution(age) {
    const letters = 'abcdefghij';
    const obj = {};
    for(let i = 0; i <= 9; i++) {
        obj[i] = letters[i];
    }
    
    let result = "";
    for(let a of String(age)) {
        result += obj[a];
    }
    return result;
}