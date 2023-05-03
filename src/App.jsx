import './App.css'

import { useMovies, useSearch } from './hooks'
import { Loader, Movies } from './components'
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


  const { query, error, handleSubmit, handleChange } = useSearch()
  const { movies, getMovies, movieError, loading } = useMovies({ query })


  return (
    <div className="page">
      <header>
        <h1>Buscador de Peliculas</h1>
        <form onSubmit={(e) => handleSubmit(e, getMovies)}>
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
