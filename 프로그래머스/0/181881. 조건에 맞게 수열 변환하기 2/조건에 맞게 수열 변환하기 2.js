function solution(arr) {
    let answer = 0;
    
    while(true) {
        let count = 0;
        
        for(let i in arr) {
            if(arr[i] < 50 && arr[i]%2 === 1) arr[i] = arr[i] * 2 + 1;
            else if(arr[i] >= 50 && arr[i]%2 === 0) arr[i] = arr[i] / 2;
            else count++;
        }
        if(count === arr.length) break;
        answer++;
    }
    
    return answer;
}

