function solution(myStr) {
    /*
    const answer = myStr.split(/[abc]/).filter(str => str !== "");
    return answer.length !== 0 ? answer : ["EMPTY"];
    */
    
    return myStr.match(/[^a-c]+/g) || ["EMPTY"];
}