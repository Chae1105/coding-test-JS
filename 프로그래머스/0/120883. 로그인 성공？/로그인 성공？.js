function solution(id_pw, db) {
    /*
    for(let user of db) {
        if(user[0] === id_pw[0]) {
            if(user[1] === id_pw[1]) return "login";
            else return "wrong pw";
        } 
    }
    return "fail";
    */
    
    const [id, pw] = id_pw;
    
    const map = new Map(db);
    
    return map.has(id) ? (map.get(id) === pw ? "login" : "wrong pw") : "fail";
}