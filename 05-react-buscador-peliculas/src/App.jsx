import { useState } from 'react'
import './App.css'
// import { useRef } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const { movies: mappedMovies } = useMovies()
  const [query, setQuery] = useState('')

  // const inputRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    // Unicampo
    // Con useRef
    // const { value } = inputRef.current
    // console.log(value)
    // Con FormData un solo campo
    // const fields = new FormData(event.target)
    // const query = fields.get('query')

    // Multicampos
    // const { query } = Object.fromEntries(new window.FormData(event.target))
    console.log(query)
  }

  const handleChange = (event) => {
    // Controlar el formulario viendo como cambia el estado
    setQuery(event.target.value)
  }

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            value={query}
            name="query"
            onChange={handleChange}
            // ref={inputRef}
            placeholder="Avengers, Star Wars, ..."
          />
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  )
}

export default App
