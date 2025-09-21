function solution(array) {
    const countObj = {};
    let maxCount = 0;
    let num = [];
    
    for(let num of array) {
        countObj[num] = countObj[num] + 1 || 1;
        maxCount = Math.max(maxCount, countObj[num]);
    }
    
    for(let count in countObj) {
        if(countObj[count] === maxCount) {
            num.push(count);
        }
    }
    
    return num.length === 1 ? +num[0] : -1;
}