import './App.css'

import { useMovies, useSearch } from './hooks'
import { Loader, Movies, Form } from './components'
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
        <img src="/public/movies2.svg"
          width="150px"
          id="app-logo"
          alt="Movies Search logo" />
        <h1>Buscador de Peliculas</h1>
        <Form query={query}
          error={error}
          sort={sort}
          getMovies={getMovies}
          onSort={handleSort}
          onSubmit={handleSubmit}
          onChange={handleChange} />
      </header>
      <main>
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
