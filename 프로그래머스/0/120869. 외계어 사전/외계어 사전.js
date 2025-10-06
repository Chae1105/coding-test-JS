function solution(spell, dic) {
    /*
    let dicArr = [];
    
    for(let str of dic) {
        if(str.length === spell.length) {
            dicArr.push(str.split(''));
        }
    }
    
    let answer = 0;
    for(let arr of dicArr) {
        for(let i = 0; i < spell.length; i++) {
            if(arr.includes(spell[i])) answer++;
        }
        if(answer === spell.length) break;
        else answer = 0;
    }
    
    return answer ? 1 : 2;
    */
    
    return dic.some(str => spell.sort().toString() === [...str].sort().toString()) ? 1 : 2;
}