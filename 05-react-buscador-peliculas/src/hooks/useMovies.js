import responseMovies from '../mocks/results_ok.json'
// eslint-disable-next-line no-unused-vars
import withouResults from '../mocks/results_ko.json'

export function useMovies() {
  const movies = responseMovies.Search

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }))

  return { movies: mappedMovies }
}
