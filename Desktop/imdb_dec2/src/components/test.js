import React from "react";
import { MovieData } from './MovieData'
import { Link } from "react-router-dom";
import data from "../data.json"

export default class Test extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movieList: [],
            unfilteredMovieList: data,
        }
    }

    handleClick = year => {
        let filteredMovies = this.state.unfilteredMovieList.filter((movie) => movie.year === year);
        this.setState({ movieList: filteredMovies })
    }

    componentDidMount() {
        this.setState({ movieList: this.state.unfilteredMovieList })
    }

    render() {
        const moviesToRender = this.state.movieList.map((val, index) => (
                <Link
                    className="text-decoration-none text-black"
                    key={val.title}
                    href="/movieInfo"
                    state={{
                        title: val.title,
                        image: val.image,
                        year: val.year,
                        runtime: val.time,
                        synopsis: val.synopsis,
                        cast: val.cast,
                        director: val.director
                    }}
                >
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-2">
                                <img className="img-fluid" src={require(`../../public/images/${val.image}`).default} alt="" />
                            </div>
                            <div className="col-8">
                                <div className="card-body">
                                    <h5 className="card-title">{val.title}</h5>
                                    <p className="card-text">Release Year: {val.year}</p>
                                    <p className="card-text">Runtime: {val.time}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
        ))
            return (
                <>
                    <h1 className="offset-6">Movie Web App</h1>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle offset-11 mb-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Filter by Year
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="/" onClick={() => this.handleClick('2011')}>2011</a></li>
                            <li><a className="dropdown-item" href="/" onClick={() => this.handleClick("2019")}>2019</a></li>
                            <li><a className="dropdown-item" href="/" onClick={() => this.handleClick("2021")}>2021</a></li>
                        </ul>
                    </div>
                    {moviesToRender}
                </>
            )
        }

}