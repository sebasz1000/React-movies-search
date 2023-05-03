//import responseMovies from '../mocks/results.json'
import { useState, useMemo, useCallback, useEffect } from 'react'
import { fetchMovies } from '../services/fetch-movies'

export const useMovies = ( { query = '', sort = false } ) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [movieError, setError] = useState(null)

  
  const getMovies = useMemo( function() {
    return ( query ) => {
      console.log('geting movies...')  
      setLoading(true)
      setError(null)
        fetchMovies(query)
          .then( (data) => {
            setMovies(data)
          })
          .catch( e => {
            setError(e.message)
          })
          .finally( () => {
            setLoading(false)
          })
    }
  }, [])

  useEffect( () => {
    console.log('get movies fucking')
  }, [getMovies])
   
  const sortedMovies = useMemo(
    () => {
      console.log('calling sortedMovies')
      return sort 
              ? [...movies].sort( (a, b ) => a.title.localeCompare(b.title) )
              : movies
  }, [sort, movies])

  return {
    movies: sortedMovies ,
    getMovies,
    loading,
     movieError
  }
}
