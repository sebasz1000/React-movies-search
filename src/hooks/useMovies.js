import responseMovies from '../mocks/results.json'
import noResults from '../mocks/no-results.json'
import {useRef} from 'react'
export const useMovies = () => {
  const API_KEY = '4287ad07'
  const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=Avengers`
  const movies = responseMovies.Search
  //converts(maps) fetched data to properly manage on front
  const mappedMovies = movies?.map(movie => {
    return {
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }
  })

  return {
    movies: mappedMovies,
  }
}
