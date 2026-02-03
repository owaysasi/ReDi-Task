import styles from "./Button.module.css";

const Button = ({ isSelected, name, onClick, className, children }) => {
  const buttonStyles = [styles.button];

  if (isSelected) {
    buttonStyles.push(styles.selected);
  }

  return (
    <button className={[...buttonStyles, className].join(" ")} onClick={() => onClick(name)}>
      {children}
    </button>
  );
};

export default Button;
