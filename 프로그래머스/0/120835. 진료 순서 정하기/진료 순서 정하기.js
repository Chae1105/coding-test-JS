function solution(emergency) {
    const arr = [...emergency].sort((a, b) => b - a);
    let result = [];
    
    for(let j = 0; j < emergency.length; j++) {
        for(let i = 0; i < arr.length; i++) {
            if(emergency[j] === arr[i]) { 
                result[j] = i+1;
            }
        }
    }
    return result;
}