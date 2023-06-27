import Link from 'next/link';
import HorizontalLogo from './HorizontalLogo';

const HeaderInner = () => {
  return (
    <header className="HeaderInner">
      <Link href="/">
        <a aria-label="Visit homepage">
          <HorizontalLogo />
        </a>
      </Link>
    </header>
  );
};

export default HeaderInner;
