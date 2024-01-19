'use client'

export function MovieInfo({ movie }) {

    return (
        <article className="movie-details">
          <div className="movie-info">
            <img src={movie.Poster} alt={`${movie.Title} Poster`} className="movie-poster" />
            <div className="movie-details">
                <div className="imdb-info">
                  <h2 className="movie-title">{movie.Title}</h2>
                  <p className="movie-description">{movie.Plot}</p>
                  <p className="movie-rating">IMDB Rating: {movie.imdbRating}</p>
                  <div className="btn-container">
                    <a href="/">Back to Home</a>
                  </div>
                </div>
            </div>
          </div>
        </article>
    );
  };
  