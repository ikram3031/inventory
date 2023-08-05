import styles from './sections.module.scss';

const NavBar = () => {
  return (
    <nav 
      className={styles.nav}
      style={{ width: "calc(100vw - 40px)" }}
    >NavBar</nav>
  )
}

export default NavBar;