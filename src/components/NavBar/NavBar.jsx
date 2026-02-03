import styles from "./NavBar.module.css";

const NavBar = ({ className, children }) => {
  return (
    <div className={`${styles.navBar} ${className}`}>
      <div className={styles.navBarContentWrapper}>{children}</div>
    </div>
  );
};

export default NavBar;
