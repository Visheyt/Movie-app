import { LogoIcon } from "../../shared/icons/logo";
import styles from "./logo.module.css";

export const Logo = () => {
  return (
    <div className={styles.container}>
      <LogoIcon />
      <h1>MovieVibe</h1>
    </div>
  );
};
