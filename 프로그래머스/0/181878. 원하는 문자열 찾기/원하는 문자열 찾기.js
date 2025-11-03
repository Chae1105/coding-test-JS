function solution(myString, pat) {
    return myString.toLowerCase().indexOf(pat.toLowerCase()) < 0 ? 0 : 1;
}