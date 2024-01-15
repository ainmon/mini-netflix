'use client'

import { useEffect } from "react"
import { MovieCard } from "./MovieCard";



export function MovieList(props) {

    let movieArr = props.movies.Search

    let display = [];

    movieArr.forEach((movie, index) => {
        display.push(<MovieCard key={index} movie={movie} />)
    })

    return (
        <div>
            <h1>Movies</h1>
            <div className="card-container">
                {display}
            </div>
        </div>
    )
}