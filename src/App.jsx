import './App.css'

import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'
import { useEffect, useState } from 'react'
/*
  MOVIES LIST

  Create a search movies app.

  API: https://www.omdbapi.com/
  API_KEY: 4287ad07

  Requirements:
   - Show an input to look for a move and a search button
   - List movies results and show their title, year and poster
   - Movies should be shown on a responsive grid

*/

const useSearch = () => {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)


  const handleSubmit = (e) => {
    e.preventDefault()
    if (query === "")
      return
  }
  const handleChange = ({ target }) => {
    setQuery(target.value)
  }

  return {
    query,
    error,
    handleSubmit,
    handleChange
  }
}

function App() {


  const { movies } = useMovies()
  const { query, error, handleSubmit, handleChange } = useSearch()


  return (
    <div className="page">
      <header>
        <h1>Buscador de Peliculas</h1>
        <form onSubmit={handleSubmit}>
          <input type="text"
            placeholder="Parasite, Titanic, Soul..."
            name='query'
            value={query}
            style={{ border: error && '1px red solid' }}
            onChange={handleChange} />
          <button type='submit' >
            SEARCH
          </button>
        </form>
      </header>
      <main>
        {
          error
            ? <p>{error}</p>
            : null
        }
        {<Movies movies={movies} />}
      </main>
    </div>
  )
}

export default App

