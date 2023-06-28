import React from 'react';
import Logo from './Logo';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.Header}>
      <Logo />
    </header>
  );
};

export default Header;
