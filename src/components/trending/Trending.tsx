import { useEffect, useState } from "react";
import styles from "./trending.module.css";
import { getPopularMovies, TrendingMovie } from "../../api/getPopularMovies";
import { TrendingCard } from "../trendingCard/TrendingCard";

export const Trending = () => {
  const [trendingMovies, setTrendingMovies] = useState<TrendingMovie[]>([]);

  useEffect(() => {
    getPopularMovies()
      .then((data) => setTrendingMovies(data))
      .catch((err) => console.error(err));
  });
  return (
    <div className={styles.container}>
      <header>
        <h3>Trending Now</h3>
      </header>
      <div className={styles.list}>
        {trendingMovies.map((movie) => (
          <TrendingCard
            key={movie.id}
            id={movie.id}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
            title={movie.title}
            vote_average={movie.vote_average}
          />
        ))}
      </div>
    </div>
  );
};
