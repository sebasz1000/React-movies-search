import './App.css'

import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'
import { useEffect, useState, useRef } from 'react'
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
  const isFirstInput = useRef(true)


  const handleSubmit = (e) => {
    e.preventDefault()
    if (query === "")
      return
  }
  const handleChange = ({ target }) => {
    const newQuery = target.value
    setQuery(newQuery)
  }

  useEffect(() => {
    //avoids input validation before user start searching for first time!
    if (isFirstInput.current) {
      isFirstInput.current = query === ''
      return
    }

    if (query.length < 1) {
      setError('Cannot search a empty movie')
      return
    }
    if (query.startsWith('2')) {
      setError('Cannot have 2 at start')
      return
    }
    setError(null)
  }, [query])


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

