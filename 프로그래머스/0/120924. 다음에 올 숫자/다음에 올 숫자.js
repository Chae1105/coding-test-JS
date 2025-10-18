function solution(common) {
    const [x, y, z] = common;
    
    return y - x === z - y ? common.at(-1) + (y - x) : common.at(-1) * (y / x);
}