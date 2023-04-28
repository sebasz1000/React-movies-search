function List({ items }) {
  return (
    <ul>
      {
        items.map(item => {
          return <li key={item.id}>
            <h3> {item.title} </h3>
            <p> {item.year}</p>
            <img src={item.poster} alt={item.title} />
          </li>
        })
      }
    </ul>
  )
}

function MoviesNotFound() {
  return (
    <p>Movies not Found</p>
  )
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ? <List items={movies} />
      : <MoviesNotFound />
  )


}