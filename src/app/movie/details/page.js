"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MovieInfo } from '../../../components/MovieInfo';
import 'ldrs/ring';

export default function MovieDetails() {

    const searchParams = useSearchParams();
    const search = searchParams.get("movieId")

    const [movie, setMovie] = useState(null);

    console.log(search);

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=dc363b84&i=${search}`)
        .then((res) => res.json())
        .then((data) => setMovie(data));
    }, [])
    
    return (
        <main className="movie-page">
            <h1>Movie Details</h1>
            {movie ? <MovieInfo movie={movie}/> : <l-ring size="40" stroke="5" bg-opacity="0" speed="2" color="black" ></l-ring>}
        </main>
    )
}