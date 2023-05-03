import noResults from '../mocks/no-results.json'

const API_KEY = '4287ad07'
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=`

export const fetchMovies = async (query) => {

  if(query  === '') 
    return null

    try{
      const res = await fetch(API_URL + query)
      
      if(!res.ok){
        throw new Error('Error fetching movie data')
      }
      const data = await res.json()
      const movies = data.Search
      const mappedMovies = movies?.map( movie => {
        return {
          id: movie.imdbID,
          title: movie.Title,
          year: movie.Year,
          poster: movie.Poster
        }
      })
      return mappedMovies
     }catch(e){
      throw new Error('Error searching movies')
    }
  
}