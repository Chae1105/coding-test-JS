function solution(num_list) {
    /*
    return [
        num_list.filter((num) => num%2 === 0).length, 
        num_list.filter((num) => num%2 === 1).length
    ]
    */
    
    let result = [0, 0];
    
    for(let num of num_list) {
        result[num%2] += 1;
    }
    
    return result;
}