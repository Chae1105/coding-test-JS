function solution(arr1, arr2) {
    if(arr1.length === arr2.length) {
        const sum1 = arr1.reduce((sum, n) => sum + n, 0);
        const sum2 = arr2.reduce((sum, n) => sum + n, 0)
        
        if(sum1 === sum2) return 0;
        else if(sum1 > sum2) return 1;
        else return -1;
        
    } else if(arr1.length > arr2.length) {
        return 1;
    } else return -1;
}