function solution(A, B) {
    /*
    let answer = 0;
    let arrA = A.split('');
    
    for(let i = 0; i < A.length; i++) {
        if(arrA.join('') === B) break;
        answer++;
        arrA.unshift(arrA.pop());
    }
    
    return arrA.join('') === B ? answer : -1;
    */
    
    // ex) 1번 케이스 - B+B = "ohellohell"
    // 여기서 A("hello")가 B+B의 1번 인덱스에 위치, 만약에 "hello"가 B+B 내에 없다면 -1 반환
    return (B+B).indexOf(A);
}