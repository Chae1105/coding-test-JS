function solution(num_list) {
    // return num_list.reverse();
    
    // 함수를 안 쓴다면
    let reverse_num = [];
    
    for(let i = num_list.length - 1; i >= 0; i--) {
        reverse_num.push(num_list[i]);
    }
    
    return reverse_num;
}