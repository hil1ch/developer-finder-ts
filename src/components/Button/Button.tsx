import styles from "./Button.module.scss";

interface ButtonProps {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};
