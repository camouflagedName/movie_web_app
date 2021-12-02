import { MovieData } from './MovieData'
import { useEffect, useState } from 'react'
import unfilteredMovieList from '../data.json'

function App() {
  //const [filteredMovieList, setfilteredMovieList] = useState(null)
  const [moviesToRender, setMoviesToRender] = useState(unfilteredMovieList)
  //const [isFiltered, setIsFiltered] = useState(false)
  // let moviesToRender = isFiltered ? filteredMovies : unfilteredMovieList

  useEffect(() => {
    console.log(unfilteredMovieList)
    setMoviesToRender(unfilteredMovieList)
  }, [])

  const handleClick = year => {
    const filteredMovies = unfilteredMovieList.filter((movie) => movie.year === year);
    setMoviesToRender(filteredMovies)
  }

  return (
    <>
      <h1 className="offset-6">Movie Web App</h1>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle offset-11 mb-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Filter by Year
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a className="dropdown-item" href="/" onClick={() => handleClick('2011')}>2011</a></li>
          <li><a className="dropdown-item" href="/" onClick={() => handleClick("2019")}>2019</a></li>
          <li><a className="dropdown-item" href="/" onClick={() => handleClick("2021")}>2021</a></li>
        </ul>
      </div>
      <MovieData movies={moviesToRender} />
    </>
  );
}

export default App;