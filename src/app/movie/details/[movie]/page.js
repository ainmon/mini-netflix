"use client"

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MovieInfo } from "../../../../components/MovieInfo";
import 'ldrs/ring';

export default function MovieDetails() {
    const params = useParams();
    const movie = params.movie;

    const replacedParam = movie.replace(/%20/g, '+');

    const [movieData, setMovieData] = useState();

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=dc363b84&t=${replacedParam}`)
        .then((res) => res.json())
        .then((data) => setMovieData(data));
    }, [])

    return (
        <main className="movie-page">
            {movieData ? <MovieInfo movie={movieData} /> : <l-ring size="40" stroke="5" bg-opacity="0" speed="2" color="black" ></l-ring>}
        </main>
    )
}