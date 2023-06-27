import Link from 'next/link';

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
