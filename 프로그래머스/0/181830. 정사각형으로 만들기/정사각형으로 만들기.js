function solution(arr) {
    const row = arr.length;
    const col = arr[0].length;
    
    if(row < col) {
        for(let i = 0; i < col - row; i++) {
            arr.push(new Array(col).fill(0));
        }
    } else {
        for(let a of arr) {
            for(let j = 0; j < row - col; j++) {
                a.push(0);
            }
        }
    }
    
    return arr;
}