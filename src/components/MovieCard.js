'use client'
import styles from '../app/page.module.scss'

export function MovieCard(props) {

    let movie = props.movie;

    let url = props.url

    return (
        <div className={styles.card}>
            <a href={url}>
                <img src={movie.Poster} />
            </a>
        </div>
    );
    
}           