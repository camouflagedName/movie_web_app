import React from "react";

export function Title(props) {

    return(
        <div className="container-fluid ms-5">
            <h1 className="row">{props.data.title}</h1>
            <div className="row">
                <ul className="list-group list-group-horizontal border-0">
                    <li className="list-group-item border-0">Release: {props.data.year}</li>
                    <li className="list-group-item border-0">Rating: {props.data.rating}</li>
                    <li className="list-group-item border-0">Runtime: {props.data.runtime}</li>
                </ul>
            </div>
        </div>
    )

}

