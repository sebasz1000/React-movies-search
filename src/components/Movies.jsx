function List({ items }) {
  return (
    <ul className="list">
      {
        items.map(item => {
          return <li className="list-item" key={item.id}>
            <img src={item.poster} alt={item.title} />
            <h3> {item.title} </h3>
            <p> {item.year}</p>
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