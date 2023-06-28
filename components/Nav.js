import Link from 'next/link';
import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={`${styles.Nav} center`}>
      <Link href="/netlabels">Netlabels</Link>
      <Link href="/resources">Resources</Link>
    </nav>
  );
};

export default Nav;
