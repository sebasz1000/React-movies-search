import { useEffect, useState, useRef, useCallback} from 'react'
import debounce from 'just-debounce-it'

export const useSearch = () => {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)
  const lastQuery = useRef(query)

 
  const debouncedGetMovies = useCallback( 
    debounce((query, callback) =>  callback(query), 500)
  , [])

  const handleSubmit = (e, callback) => {
    e.preventDefault()
    if (query === "")
      return
    if(query === lastQuery.current)
      return
    lastQuery.current = query
    callback(query)
  }

  const handleChange = (e, callback) => {
    const newQuery = e.target.value

    setQuery(newQuery)

    debouncedGetMovies(newQuery, callback)

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
