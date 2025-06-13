import styles from "./Header.module.scss";
import { ThemeSwitcher } from "components/ThemeSwitcher";

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  return (
    <div className={styles.header} data-testid="Header">
      <div className={styles.logo}>
        devFinder
      </div>
      <ThemeSwitcher />
    </div>
  );
};
