import styles from "./styles.module.css";
import Link from "next/link";
export function Header() {
    return (
        <header>
            <nav className={styles.navbar}>
              <Link className={styles.navButton} href="/">Home</Link>
              <Link className={styles.navButton} href="/sobre">Sobre</Link>
              <Link className={styles.navButton} href="/projetos">Projetos</Link>
              <Link className={styles.navButton} href="/contato">Contato</Link>
            </nav>
          </header>
    );
}