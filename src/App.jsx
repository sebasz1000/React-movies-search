import './App.css'

import { useMovies, useSearch } from './hooks'
import { Loader, Movies } from './components'
import { useState } from 'react'
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


function App() {

  const [sort, setSort] = useState(false)
  const { query, error, handleSubmit, handleChange } = useSearch()
  const { movies, getMovies, movieError, loading } = useMovies({ query, sort })

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className="page">
      <header>
        <h1>Buscador de Peliculas</h1>
        <form onSubmit={(e) => handleSubmit(e, getMovies)}
          className='flex-column'>
          <div className='d-flex '>
            <input type="text"
              placeholder="Parasite, Titanic, Soul..."
              name='query'
              value={query}
              style={{ border: error && '1px red solid' }}
              onChange={handleChange} />
            <button type='submit' >
              SEARCH
            </button>
          </div>
          <div>
            <label htmlFor="filter">
              Sort by title
            </label>
            <input type="checkbox"
              onChange={handleSort}
              checked={sort}
              id="filter" />
          </div>
        </form>
      </header>
      <main>
        {
          error
            ? <p>{error}</p>
            : null
        }
        {
          loading
            ? <Loader />
            : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
