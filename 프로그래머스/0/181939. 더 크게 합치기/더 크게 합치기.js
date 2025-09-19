function solution(a, b) {
    const aPlusB = Number(String(a) + String(b));
    const bPlusA = Number(String(b) + String(a));
    
    return aPlusB > bPlusA ? aPlusB : bPlusA;
}