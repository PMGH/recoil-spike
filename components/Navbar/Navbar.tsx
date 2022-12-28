import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navlist}>
        <li className={styles.navlistitem}>
          <Link href="/" className={styles.navlistitemlink}>Home</Link>
        </li>
        <li className={styles.navlistitem}>
          <Link href="/beers" className={styles.navlistitemlink}>Beers</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar;
