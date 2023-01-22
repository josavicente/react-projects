import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'

import { TURNS } from './constants'
import { checkEndGame, checkWinner } from './board'
import { WinnerModal } from './components/WinnerModal.jsx'
import { Square } from './components/Square'
function App() {

  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  }
  )

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  // null no hay ganador, false es que hay empate
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const updateBoard = (index) => {
    console.log(index)
    console.log(board[index])
    
    if (board[index] || winner) return

    // Actualizar tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
// Guardar partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
// Revisar so hay ganador
    const newWinner = checkWinner(newBoard)
    if(newWinner){
      confetti()
      setWinner(newWinner)
      // TODO: Check if game is over
    }else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  
  } 

  return (


    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        {
          board.map((square, index) => {
            return(
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
                >
                  {square}
                </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <section>
        <WinnerModal resetGame={resetGame} winner={winner}/>
      </section>
    </main>
    
  )
}
export default App
