import { useEffect, useState, useRef } from 'react'

export const useSearch = () => {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)
  const lastQuery = useRef(query)


  const handleSubmit = (e, callback) => {
    e.preventDefault()
    if (query === "")
      return
    if(query === lastQuery.current)
      return
    lastQuery.current = query
    callback(query)
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
