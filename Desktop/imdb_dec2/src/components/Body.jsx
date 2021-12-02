import React from "react";
import { Link } from 'react-router-dom';

export function Body(props) {
    //const movieData = require('../data.json')

    return (
        <>
            <div className="container-fluid">
                <div className="card">
                    <div className="row">
                        <div className="col-2">
                            <img className="img-fluid" src={`../../images/${props.data.image}`} alt="" />
                        </div>
                        <div className="col-6">
                            <div className="card-body">
                                <h5 className="card-title">Synopsis</h5>
                                <p>{props.data.synopsis}</p>
                                <h5 className="card-title">Cast</h5>
                                <p>{props.data.cast}</p>
                                <h5 className="card-title">Director</h5>
                                <p>{props.data.director}</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <button type="button" className="btn btn-success">Showtimes</button>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/" className="offset-10"><button type="button" className="btn-danger">Return</button></Link>
        </>
    )
}