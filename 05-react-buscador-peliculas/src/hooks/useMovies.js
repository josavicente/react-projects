import withResults from '../mocks/results_ok.json'
// eslint-disable-next-line no-unused-vars
import withoutResults from '../mocks/results_ko.json'
import { useState } from 'react'

export function useMovies({ search }) {
  const [responseMovies, setResponseMovies] = useState([])

  const movies = responseMovies.Search

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }))

  const getMovies = () => {
    if (search) {
      setResponseMovies(withResults)
    } else {
      setResponseMovies(withoutResults)
    }
  }
  return { movies: mappedMovies, getMovies }
}
