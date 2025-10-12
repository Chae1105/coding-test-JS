function solution(board) {
    for(let i in board) {
        for(let j in board[i]) {
            if(board[i][j] === 1) {
                for(let k = +i-1; k <= +i+1; k++) {
                    for(let h = +j-1; h <= +j+1; h++) {
                        if(k >= 0 && k < board.length && h >= 0 && h < board.length) {
                            board[k][h] = board[k][h] === 1 ? 1 : 2;
                        }
                    }
                }
            }
        }
    }
    
    return board.flat().filter(x => x === 0).length;
}