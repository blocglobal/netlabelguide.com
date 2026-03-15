import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={`${styles.Nav} center`}>
      <a href="/netlabels">Netlabels</a>
      <a href="/resources">Resources</a>
    </nav>
  );
};

export default Nav;
