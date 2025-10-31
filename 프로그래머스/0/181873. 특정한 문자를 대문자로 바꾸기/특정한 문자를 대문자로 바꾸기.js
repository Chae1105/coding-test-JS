function solution(my_string, alp) {
    const reg = new RegExp(alp, "g");
    
    //return my_string.replace(reg, alp.toUpperCase());
    return my_string.replaceAll(alp, alp.toUpperCase());
}