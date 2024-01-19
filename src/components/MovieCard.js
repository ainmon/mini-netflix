'use client'

export function MovieCard(props) {

    let movie = props.movie;

    let url = props.url

    return (
        <div className="card">
            <a href={url}>
                <img src={movie.Poster} />
            </a>
        </div>
    );
    
}           