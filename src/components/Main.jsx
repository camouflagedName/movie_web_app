import { MovieData } from './MovieData'
import { useEffect, useState } from 'react'
import unfilteredMovieList from '../data.json'
const sortedMovieData = [...unfilteredMovieList].sort((a, b) => (a.title > b.title ? 1 : -1))

function App() {
  const [moviesToRender, setMoviesToRender] = useState(unfilteredMovieList)
  const [sortIsTrue, setSortIsTrue] = useState(true)
  const [sortIcon, setSortIcon] = useState("Sort")
  const [icon, setIcon] = useState("bi bi-sort-alpha-down me-3")

  useEffect(() => {
    setMoviesToRender(unfilteredMovieList)
  }, [])

  const handleClick = year => {
    if (year) {
      const filteredMovies = unfilteredMovieList.filter((movie) => movie.year === year);
      setMoviesToRender(filteredMovies);
    }
    else {
      setMoviesToRender(unfilteredMovieList)
    }
  }

  const handleSort = () => {
    setMoviesToRender(sortIsTrue ? sortedMovieData : unfilteredMovieList)
    setSortIcon(prev => prev === "Sort" ? "Unsort" : "Sort")
    setSortIsTrue(prev => !prev)
  }

  return (
    <>
      <h1 className="offset-5">Movie Web App</h1>
      <div className="row">
        <button className="btn btn-primary offset-3 col-1" type="button" onClick={handleSort}>
          {sortIsTrue ? <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-sort-alpha-down me-3" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z" />
            <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z" />
          </svg> : <></>}
          {sortIcon}
        </button>
        <div className="dropdown col-1 offset-4 mb-3">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Filter by Year
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {unfilteredMovieList.map(val => (
              <li className="dropdown-item" onClick={() => handleClick(`${val.year}`)}>{val.year}</li>
            ))}
            <li className="dropdown-item" onClick={() => handleClick(false)}>All</li>
          </ul>
        </div>
      </div>

      <MovieData movies={moviesToRender} />
    </>
  );
}

export default App;
