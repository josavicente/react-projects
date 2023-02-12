import './App.css'
import { useEffect, useState } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const {
    movies: mappedMovies,
    loading,
    getMovies,
  } = useMovies({ search, sort })
  // const [query, setQuery] = useState('')

  // const inputRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
    //   // Unicampo
    //   // Con useRef
    //   // const { value } = inputRef.current
    //   // console.log(value)
    //   // Con FormData un solo campo
    //   // const fields = new FormData(event.target)
    //   // const query = fields.get('query')

    //   // Multicampos
    //   // const { query } = Object.fromEntries(new window.FormData(event.target))
    console.log(search)
  }

  const handleChange = (event) => {
    // Controlar el formulario viendo como cambia el estado
    updateSearch(event.target.value)
  }

  useEffect(() => {}, [getMovies])
  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            value={search}
            name="query"
            onChange={handleChange}
            // ref={inputRef}
            placeholder="Avengers, Star Wars, ..."
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        {loading ? <p>Cargando...</p> : <Movies movies={mappedMovies} />}
      </main>
    </div>
  )
}

export default App
