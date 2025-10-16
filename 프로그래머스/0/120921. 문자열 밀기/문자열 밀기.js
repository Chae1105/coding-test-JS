function solution(A, B) {
    let answer = 0;
    let arrA = A.split('');
    
    for(let i = 0; i < A.length; i++) {
        if(arrA.join('') === B) break;
        answer++;
        arrA.unshift(arrA.pop());
    }
    
    return arrA.join('') === B ? answer : -1;
}