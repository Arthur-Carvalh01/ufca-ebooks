import { Link } from 'react-router-dom';
import styles from './HeaderPublico.module.css';

export function HeaderPublico() {
  return (
    <header className={styles.headerContainer}>
      
      <div className={styles.logoBox}>
        <h1 className={styles.logoTitle}>E-Books</h1>
        <p className={styles.logoSubtitle}>
          UNIVERSIDADE<br />FEDERAL DO CARIRI
        </p>
      </div>

      <nav>
        <ul className={styles.navMenu}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}>Início</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/catalogo" className={styles.navLink}>Catálogo</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/login" className={styles.navLink}>Login</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/faq" className={styles.navLink}>Dúvidas Frequentes</Link>
          </li>
        </ul>
      </nav>

    </header>
  );
}