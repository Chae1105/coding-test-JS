function solution(n) {
    /* 제한사항이 n에 대한 제한이었단 걸 몰랐음.. 잘못 봄
    let nums = [];
    for(let i = 1; i <= 100; i++) {
        if(i%3 !== 0 && !String(i).includes("3")) nums.push(i);
    }
    
    console.log(nums);
    return nums[n-1];
    */
    
    let num = 0;
    let i = 1;
    let count = 0;
    
    while(count < n) {
        if(i % 3 !== 0 && !String(i).includes("3")) {
            num = i;
            count++;
        }
        i++;
    }
    
    return num;
}