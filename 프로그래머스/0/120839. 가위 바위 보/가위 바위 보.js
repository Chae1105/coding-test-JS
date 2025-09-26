function solution(rsp) {
    const rspObj = { 2: "0", 0: "5", 5: "2"};
    return rsp.split('').reduce((prev, curr) => prev + rspObj[curr], '');
}