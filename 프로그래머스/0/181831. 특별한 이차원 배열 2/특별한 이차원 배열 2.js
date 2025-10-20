function solution(arr) {
    let answer = true;
    for(let i in arr) {
        for(let j in arr[i]) {
            if(arr[i][j] !== arr[j][i]) answer = false;
        }
    }
    
    return answer ? 1 : 0;
}