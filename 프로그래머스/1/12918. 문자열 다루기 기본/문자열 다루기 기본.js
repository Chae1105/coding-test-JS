function solution(s) {
    if(s.length !== 4 && s.length !== 6) {
        return false;
    } else {
        if(s.replace(/[0-9]/g, "").length === 0) return true;
        else return false;
    }
}