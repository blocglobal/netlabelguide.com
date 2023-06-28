import Link from 'next/link';
import HorizontalLogo from './HorizontalLogo';
import styles from './HeaderInner.module.scss';

const HeaderInner = () => {
  return (
    <header className={styles.HeaderInner}>
      <Link href="/" aria-label="Visit homepage">
        <HorizontalLogo />
      </Link>
    </header>
  );
};

export default HeaderInner;
