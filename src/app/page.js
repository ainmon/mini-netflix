'use client';

import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { MovieList } from '../components/MovieList';

export default function Home() {

  let [movieArr, setMovieArr] = useState(null);

  useEffect(() => {
    fetch('https://www.omdbapi.com/?apikey=dc363b84&s=Bat')
    .then((res) =>res.json())
    .then((data => setMovieArr(data)))
  }, []);


  return (
    <main className={styles.main}>
    
      <header className={styles.header}>Mini Netflix</header>


      {movieArr ? <MovieList movies={movieArr} /> : null}
    </main>
  )
}
