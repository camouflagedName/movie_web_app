import { MovieData } from './MovieData'
import { useEffect, useState} from 'react'
import unfilteredMovieList from '../data.json'

function App() {
  const [moviesToRender, setMoviesToRender] = useState(unfilteredMovieList)

  useEffect(() => {
    setMoviesToRender(unfilteredMovieList)
  }, [])

  const handleClick = year => {
    const filteredMovies = unfilteredMovieList.filter((movie) => movie.year === year);
    setMoviesToRender(filteredMovies);
  }

  return (
    <>
      <h1 className="offset-6">Movie Web App</h1>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle offset-11 mb-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Filter by Year
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {unfilteredMovieList.map(val => (
            <li className="dropdown-item"  onClick={() => handleClick(`${val.year}`)}>{val.year}</li>
          ))}
        </ul>
      </div>
      <MovieData movies={moviesToRender} />
    </>
  );
}

export default App;
