function solution(nums) {
    /* 배열의 길이와, 배열 내 요소들에 종류의 수를 비교해서 더 적은 값을 리턴
    const obj = {};
    
    for(let num of nums) {
        obj[num] = (obj[num] || 0) + 1;
    }
    
    let keys = Object.keys(obj).length;
    let num = nums.length/2
    
    return Math.min(keys, num);
    */
    
    // 이게 시간을 훨씬 더 적게 소요
    const num = new Set(nums).size; // set: 중복값 제거
    
    return Math.min(num, nums.length/2); 
}