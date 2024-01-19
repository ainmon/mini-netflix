'use client'

export function MovieInfo({ movie }) {

  console.log(movie);

    return (
        <article className="movie-details">
          <div className="movie-info">
            <img src={movie.Poster} alt={`${movie.Title} Poster`} className="movie-poster" />
            <div className="movie-details">
              <h2 className="movie-title">{movie.Title}</h2>
                <p className="movie-description">{movie.Plot}</p>
                <p className="movie-rating">IMDB Rating: {movie.imdbRating}</p>
            </div>
          </div>
        </article>
    );
  };
  