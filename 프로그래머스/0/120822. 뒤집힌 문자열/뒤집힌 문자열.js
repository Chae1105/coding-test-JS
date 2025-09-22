function solution(my_string) {
    let reverse_string = "";
    
    for (let i = my_string.length - 1; i >= 0; i--) {
        reverse_string += my_string[i];
    }
    
    return reverse_string;
}