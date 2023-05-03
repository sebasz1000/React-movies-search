//import responseMovies from '../mocks/results.json'
import { useState } from 'react'
import { fetchMovies } from '../services/fetch-movies'

export const useMovies = ( { query = '' } ) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [movieError, setError] = useState(null)

  
  const getMovies = () => {
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

  return {
    movies,
    getMovies,
    loading,
     movieError
  }
}
