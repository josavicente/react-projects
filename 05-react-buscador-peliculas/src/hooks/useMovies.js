// import withResults from '../mocks/results_ok.json'
// eslint-disable-next-line no-unused-vars
// import withoutResults from '../mocks/results_ko.json'
import { useRef, useState, useMemo } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null)

  const previouseSearch = useRef(search)

  const getMovies = useMemo(() => {
    return async ({ search }) => {
      if (search === previouseSearch.current) return
      try {
        setLoading(true)
        setError(null)
        previouseSearch.current = search
        const newMovies = await searchMovies({ search })
        setMovies(newMovies)
      } catch (e) {
        setError(e)
      } finally {
        // Tanto en el try como en el catch, siempre se ejecuta el finally
        setLoading(false)
      }
    }
  }, [search])

  // const sortedMovies = sort
  //   ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
  //   : movies

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [movies, sort])
  return { movies: sortedMovies, loading, getMovies }
}
