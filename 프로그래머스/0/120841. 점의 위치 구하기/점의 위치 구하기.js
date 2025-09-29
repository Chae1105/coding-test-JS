function solution(dot) {
    const [x, y] = dot;
    
    return x > 0 && y > 0 ? 1 : x < 0 && y > 0 ? 2 : x < 0 && y < 0 ? 3 : 4;
    
    /*
    const check = x * y > 0;
    return x > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
    */
}