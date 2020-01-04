exports.isWonState = (board, player = 1) => {

    const checkRow = (board, i, j, player) => {
        return (j <=3 && board[i][j] == player
            && board[i][j+1] == player
            && board[i][j+2] == player
            && board[i][j+3] == player)
    }

    const checkCol = (board, i, j, player) => {
        return (i <= 2 && board[i][j] == player
            && board[i+1][j] == player
            && board[i+2][j] == player
            && board[i+3][j] == player)
    }

    const checkDiag1 = (board, i, j, player) => {
        return (j <=3 && i <= 2
            && board[i][j] == player
            && board[i+1][j+1] == player
            && board[i+2][j+2] == player
            && board[i+3][j+3] == player)
    }

    const checkDiag2 = (board, i, j, player) => {
        return (j <=3 && i >= 3 
            && board[i][j] == player
            && board[i-1][j+1] == player
            && board[i-2][j+2] == player
            && board[i-3][j+3] == player)
    }

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            if (checkRow(board, i, j, player) ||
                checkCol(board, i, j, player) ||
                checkDiag1(board, i, j, player) ||
                checkDiag2(board, i, j, player)) {
                    return true
                }
        }
    }
    return false
}

exports.canPlay = (board, column) => {
    return board[0][column] > 0
}

exports.playMove = (board, column, player) => {
    for (let i = 1; i < 5; i++) {
        if (board[i][column] > 0) {
            board[i-1][column] = player
            return board
        }
    }
    board[5][column] = player
    return board
}