'use client'

import { MovieCard } from "./MovieCard";


export function MovieList(props) {

    let movieArr = props.movies.Search

    let display = [];

    movieArr.map((movie, index) => {
        const generateUrl = index % 2 === 0 ? '/movie/details?movieId=' + movie.imdbID : '/movie/details/' + movie.Title;
        display.push(<MovieCard key={index} movie={movie} url={generateUrl} />)
    })

    return (
        <section className="parent-container">
            <section className="card-container">
                {display}
            </section>
        </section>
    )
}