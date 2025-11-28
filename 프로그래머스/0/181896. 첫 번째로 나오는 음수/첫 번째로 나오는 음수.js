function solution(num_list) {
    /*
    for(let idx in num_list) {
        if(num_list[idx] < 0) return +idx
    }
    
    return -1;
    */
    
    return num_list.findIndex(n => n < 0);
}