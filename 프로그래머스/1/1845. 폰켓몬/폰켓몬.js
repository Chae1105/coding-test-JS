function solution(nums) {
    /*
    const obj = {};
    
    for(let num of nums) {
        obj[num] = (obj[num] || 0) + 1;
    }
    
    let keys = Object.keys(obj).length;
    
    return Math.min(keys, nums.length/2);
    */
    
    const numSet = new Set(nums).size;
    
    return Math.min(numSet, nums.length/2)
}