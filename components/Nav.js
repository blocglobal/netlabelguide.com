import Link from 'next/link';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="Nav center">
      <Link href="/netlabels">
        <a>Netlabels</a>
      </Link>
      <Link href="/resources">
        <a>Resources</a>
      </Link>
    </nav>
  );
};

export default Nav;
