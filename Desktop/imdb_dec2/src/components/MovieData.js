import { Link } from 'react-router-dom';


export function MovieData(props) {

    const movieInfo = props.movies.map((val, index) => {
        return (
            <Link
                key={index}
                className="text-decoration-none text-black"
                to="/movieInfo"
                state={{
                    title: val.title,
                    image: val.image,
                    year: val.year,
                    runtime: val.time,
                    synopsis: val.synopsis,
                    cast: val.cast.join(", "),
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
                                <p className="card-text">Release year: {val.year}</p>
                                <p className="card-text">Runtime: {val.time}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        )
    })

    return (
        <>
            {movieInfo}
        </>
    )
}