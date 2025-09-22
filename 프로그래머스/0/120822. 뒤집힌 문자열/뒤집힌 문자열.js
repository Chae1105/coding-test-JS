function solution(my_string) {
    // return [...my_string].reverse().join('');
    
    // reverse 함수 안 쓴다면
    let reverse_string = "";
    
    for (let i = my_string.length - 1; i >= 0; i--) {
        reverse_string += my_string[i];
    }
    
    return reverse_string;
}