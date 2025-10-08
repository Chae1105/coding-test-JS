function solution(array, n) {
    let answer = Math.abs(array[0]-n);
    let idx = 0;
    
    for(let i = 1; i < array.length; i++) {
        let x = Math.abs(array[i]-n);
        if(answer > x) {
            answer = x;
            idx = i;
        } else if (answer === x) {
            if(array[idx] > array[i]) idx = i;
        }
    }
    
    return array[idx];
}