function solution(arr, k) {
    const arrSet = [...new Set(arr)];
    const result = [];
    
    for(let i = 0; i < k; i++) {
        result.push(arrSet[i] ?? -1);
    }
    
    return result;
}