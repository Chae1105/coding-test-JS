function solution(strings, n) {
    // sort((a, b) => 콜백함수) : 반환값이 음수면 a가 앞으로, 양수면 b가 앞으로, 0이면 순서 유지
    /*
    return strings.sort((a,b) => {
        if(a[n] !== b[n]) return a[n] > b[n] ? 1 : -1;
        else return a > b ? 1 : -1;
    });
    */
    
    // 시간 훨씬 오래 걸림!
    return strings.sort((a,b) => a[n] !== b[n] ? a[n].localeCompare(b[n]) : a.localeCompare(b));
}
