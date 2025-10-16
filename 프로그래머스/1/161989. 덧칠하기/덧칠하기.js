function solution(n, m, section) {
    let answer = 1;
    let last = section[0] + m - 1;
    
    for(let i = 0; i < section.length; i++) {
        if(i !== 0 && last < section[i]) {
            answer++;
            last = section[i] + m - 1;
        } 
    }
    
    return answer;
    
    /*
    let arr = new Array(n).fill(1);
    for(let idx of section) {
        arr[idx-1] = 0;
    }
    
    let answer = 0;
    
    // fill(ele, startIndex, lastIndex) -> fill(1, 0, 3) = 인덱스 0 ~ 2의 요소를 1로 변경
    for(let i = 0; i < arr.length; i++) {
        console.log(arr, i, i+m)
        if(arr[i] === 0) {
            if(i+m < arr.length) {
                arr.fill(1, i, i+m);
            } else {
                arr.fill(1, i, arr.length);
            }
            answer++;
            i += m - 1;
        }
    }
    
    return answer;
    */
}