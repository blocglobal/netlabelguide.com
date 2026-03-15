import HorizontalLogo from './HorizontalLogo';
import styles from './HeaderInner.module.scss';

const HeaderInner = () => {
  return (
    <header className={styles.HeaderInner}>
      <a href="/" aria-label="Visit homepage">
        <HorizontalLogo />
      </a>
    </header>
  );
};

export default HeaderInner;
