function solution(my_string) {
    /*
    return my_string.split('').map(x => x.toLowerCase()).sort().join('');
    */
    
    /*
    return my_string.toLowerCase().split('').sort().join('');
    */
    
    return [...my_string.toLowerCase()].sort().join('');
}
