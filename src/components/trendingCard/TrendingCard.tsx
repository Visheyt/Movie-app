import { FC } from "react";
import styles from "./trendingCard.module.css";
import { getImgUrl } from "../../utils/getImgUrl";

type TrendingCardProps = {
  id: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
};

export const TrendingCard: FC<TrendingCardProps> = ({
  poster_path,
  release_date,
  title,
  vote_average,
}) => {
  return (
    <div className={styles.card}>
      <img
        src={getImgUrl(poster_path)}
        alt={`${title} poster image`}
        className={styles.img}
      />
      <div className={styles.info}>
        <span>{release_date}</span>
        <span>{vote_average}</span>
      </div>
    </div>
  );
};
