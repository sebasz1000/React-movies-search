export function Form({ query, onSubmit, onChange, sort, error, getMovies, onSort }) {

  return (
    <>
      <form onSubmit={(e) => onSubmit(e, getMovies)}
        className='flex-column'>
        <div className='d-flex '>
          <div className="input-text-container">
            <input type="text"
              placeholder="Parasite, Titanic, Soul..."
              name='query'
              value={query}
              style={{ border: error && '1px  #ff4e4e solid' }}
              onChange={(e) => onChange(e, getMovies)} />
            <div className="input-error">
              {
                error
                  ? <small>{error}</small>
                  : null
              }
            </div>
          </div>
          <button type='submit' id="search-btn">
            SEARCH
          </button>
        </div>
        <div className='filters-box'>
          <label htmlFor="filter" className='pr-3'>
            Sort by title
          </label>
          <input type="checkbox"
            onChange={() => onSort()}
            checked={sort}
            id="filter" />
        </div>

      </form>

    </>
  )
}