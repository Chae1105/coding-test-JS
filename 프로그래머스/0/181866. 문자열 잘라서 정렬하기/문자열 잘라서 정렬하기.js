function solution(myString) {
    return myString.split("x").filter(s => s !== "").sort((a, b) => a > b ? 1 : -1);
}