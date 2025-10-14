function solution(str1, str2) {
    return str1.split(str2).join('') === str1 ? 2 : 1;
}