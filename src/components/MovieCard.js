

export function MovieCard(props) {

    let movie = props.movie;

    console.log(movie.Title)

    return (
        <div className="card">
            <h1>{movie.Title}</h1>
        </div>
    );
    
}