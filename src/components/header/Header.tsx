import { SearchIcon } from "../../shared/icons/search";
import { Logo } from "../logo/Logo";
import { Navigation } from "../navigation/Navigation";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
      <div>
        <SearchIcon />
      </div>
    </header>
  );
};
