import { Link } from "@tanstack/react-router";
import styles from "./navigation.module.css";
import { useEffect } from "react";
import { getGenres } from "../../api/getGenres";

export const Navigation = () => {
  useEffect(() => {
    getGenres()
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }, []);
  return (
    <nav className={styles.container}>
      <Link
        to="/"
        activeProps={{
          style: {
            backgroundColor: "#1A1A1A",
            color: "white",
          },
        }}
      >
        Home
      </Link>
      <Link
        to="/movies"
        activeProps={{
          style: {
            backgroundColor: "#1A1A1A",
            color: "white",
          },
        }}
      >
        Movies
      </Link>
      <Link
        to="/about"
        activeProps={{
          style: {
            backgroundColor: "#1A1A1A",
            color: "white",
          },
        }}
      >
        About
      </Link>
    </nav>
  );
};
