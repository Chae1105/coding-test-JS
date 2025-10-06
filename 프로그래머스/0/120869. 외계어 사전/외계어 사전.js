function solution(spell, dic) {
    // 일단, dic의 요소들을 각각 배열로 만들기
    // spell과 길이가 같은 것들만 배열로!
    // 그 뒤에, filter로 새 배열 만든 뒤에, spell과 같은지 비교하면 되지 않을까?
    
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
}