function solution (my_string, n) {
    let result = "";
    for (let a of my_string) {
        result += a.repeat(n);
    }
    return result;
}