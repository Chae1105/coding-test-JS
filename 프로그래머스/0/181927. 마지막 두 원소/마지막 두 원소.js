function solution(num_list) {
    const last1 = num_list[num_list.length - 1];
    const last2 = num_list[num_list.length - 2];
    
    num_list.push(last1 > last2 ? last1 - last2 : last1 * 2)
    
    return num_list;
}