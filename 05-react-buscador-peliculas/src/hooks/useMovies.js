// import withResults from '../mocks/results_ok.json'
// eslint-disable-next-line no-unused-vars
// import withoutResults from '../mocks/results_ko.json'
import { useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies({ search }) {
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    const newMovies = await searchMovies({ search })
    setMovies(newMovies)
  }
  return { movies, getMovies }
}
