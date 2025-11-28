function solution(arr, idx) {
    for(let i in arr) {
        if(+i >= idx && arr[i] === 1) return +i;
    }
    
    return -1;
}