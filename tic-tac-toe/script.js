function createBoard() {
    let board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]

    const getBoard = () => board;
    const setBoard = (row, col, symbol) => {
        if (board[row--][col--] == null) {
            board[row--][col--] = symbol;
        }
        else {
            console.log("Invalid placement (non-empty).")
            return null
        }
        return board

    }
    const checkIfWin = () => {
        for (let i = 0; i < 3; i++) {
            if (board[0][i] == board[1][i] == board [2][i]) {
                return board[0][i]
            }
            if (board[i][0] == board[i][1] == board [i][2]) {
                return board[i][0]
            }
            return null
        }
    }

    return {getBoard, setBoard, checkIfWin}
}

function createPlayer(name, symbol) {
    const getName = () => name;
    const getSymbol = () => symbol;
    const playOnce = (row, col) => {
        return board.setBoard(row, col, symbol)
    }

    return {getName, getSymbol, playOnce};
}

function createGame() {
    const playGame = () => {
        // ! rethink the game playing logic
        playerList = [playerOne, playerTwo]
        for (let i = 0; i < 9; i++) {
            let currentPlayer = playerList[i % 2]
            while (true) {
                alert(`Round ${i}, current player: ${currentPlayer.getName()}`)
                output = currentPlayer.playOnce(prompt(), prompt())
                if (output != null) {
                    break
                }
            }
            if (board.checkIfWin() != null) {
                game.checkWhoWin(board.checkIfWin())
                break
            }
        }
    }
    const checkWhoWin = () => {
        // TODO: figure out the function logic
        // check which player has each symbol form the checkIfWin
    }

    return {playGame, checkWhoWin}
}

const game = createGame()
const board = createBoard()
const playerOne = createPlayer('p1', 'X')
const playerTwo = createPlayer('p2', 'O')
