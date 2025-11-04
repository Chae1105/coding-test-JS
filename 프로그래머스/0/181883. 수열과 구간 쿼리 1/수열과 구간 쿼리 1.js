function solution(arr, queries) {
    for(let q of queries) {
        for(let i in arr) {
            if(q[0] <= i && i <= q[1]) arr[i] += 1;
        }
    }
    
    return arr;
}