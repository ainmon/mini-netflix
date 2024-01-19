'use client'

import styles from '../app/page.module.scss'

export function MovieInfo({ movie }) {

    return (
        <article className="movie-details">
          <div className="movie-info">
            <img src={movie.Poster} alt={`${movie.Title} Poster`} className="movie-poster" />
            <div className={styles.details}>
                <div className={styles.imdb}>
                  <h2 className={styles.title}>{movie.Title}</h2>
                  <p className={styles.description}>{movie.Plot}</p>
                  <p className={styles.rating}>IMDB Rating: {movie.imdbRating}</p>
                  <div className={styles.btncontainer}>
                    <a href="/">Back to Home</a>
                  </div>
                </div>
            </div>
          </div>
        </article>
    );
  };
  