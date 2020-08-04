import Link from 'next/link';
import './Breadcrumbs.scss';

const Breadcrumbs = ({ links = [] }) => {
  let position = 2;
  return (
    <ol
      vocab="http://schema.org/"
      typeof="BreadcrumbList"
      className="Breadcrumbs"
    >
      <li property="itemListElement" typeof="ListItem">
        <Link href="/">
          <a property="item" typeof="WebPage">
            <span property="name">Home</span>
          </a>
        </Link>
        <meta property="position" content="1" />
      </li>
      {links.map(link => {
        const linkEl = (
          <li property="itemListElement" typeof="ListItem" key={link.href}>
            <a property="item" typeof="WebPage" href={link.href}>
              <span property="name">{link.name}</span>
            </a>
            <meta property="position" content={position} />
          </li>
        );
        position += 1;

        return linkEl;
      })}
    </ol>
  );
};

export default Breadcrumbs;
