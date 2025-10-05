function solution(keyinput, board) {
    let x = 0;
    let y = 0;
    const maxX = (board[0] - 1) / 2;
    const maxY = (board[1] - 1) / 2;
   
    for(let key of keyinput) {
        if(key[0] === "u" && y !== maxY) y++;
        else if(key[0] === "d" && y !== -maxY) y--;
        else if(key[0] === "r" && x !== maxX) x++;
        else if(key[0] === "l" && x !== -maxX) x--;
    }
    
    return [x, y];
}