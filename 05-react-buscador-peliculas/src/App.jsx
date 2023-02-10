import './App.css'
import responseMovies from './mocks/results_ok.json'
import withoutResults from './mocks/results_ko.json'

function App() {
  const movies = responseMovies.Search
  const hasMovies = movies?.length > 0

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className="form">
          <input placeholder="Avengers, Star Wars, ..." />
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        {hasMovies ? (
          <ul>
            {movies.map((movie) => (
              <li key={movie.imdbID}>
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
                <img src={movie.Poster} alt={movie.Title} />
              </li>
            ))}
          </ul>
        ) : (
          <p>No he encontrado películas</p>
        )}
      </main>
    </div>
  )
}

export default App
