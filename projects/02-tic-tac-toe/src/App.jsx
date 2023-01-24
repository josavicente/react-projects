import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'

import { TURNS } from './constants'
import { checkEndGame, checkWinner } from './board'
import { WinnerModal } from './components/WinnerModal.jsx'
import { Square } from './components/Square'
function App() {
  const [score, setScore] = useState(() => {
    const scoreFromStorage = window.localStorage.getItem('score')
    if (scoreFromStorage) return JSON.parse(scoreFromStorage)
    return Array(2).fill(0)
  })

  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  // null no hay ganador, false es que hay empate
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setScore(Array(2).fill(0))
    setTurn(TURNS.X)
    setWinner(null)
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
    window.localStorage.removeItem('score')
  }

  const updateBoard = (index) => {
    console.log(index)
    console.log(board[index])

    if (board[index] || winner) return

    const newScore = [...score]
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
    if (newWinner) {
      confetti()
      setWinner(newWinner)
      if (turn === TURNS.X) {
        newScore[0]++
      } else {
        newScore[1]++
      }
      setScore(newScore)
      window.localStorage.setItem('score', JSON.stringify(newScore))
      // TODO: Check if game is over
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          )
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <h1>SCORE</h1>
      <section className="score">
        <h2>Player {TURNS.X}</h2>
        <h2>Player {TURNS.O}</h2>
      </section>
      <section className="score">
        <Square>{score[0]}</Square>
        <Square>{score[1]}</Square>
      </section>
      <section>
        <WinnerModal resetGame={resetGame} winner={winner} />
      </section>
    </main>
  )
}
export default App
