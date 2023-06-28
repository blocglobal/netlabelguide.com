import Link from 'next/link';
import styles from './Breadcrumbs.module.scss';

const Breadcrumbs = ({ links = [] }) => {
  let position = 2;
  return (
    <ol
      vocab="http://schema.org/"
      typeof="BreadcrumbList"
      className={styles.Breadcrumbs}
    >
      <li property="itemListElement" typeof="ListItem">
        <Link href="/" property="item" typeof="WebPage">
          <span property="name">Home</span>
        </Link>
        <meta property="position" content="1" />
      </li>
      {links.map(link => {
        const linkEl = (
          <li property="itemListElement" typeof="ListItem" key={link.href}>
            <Link href={link.href} property="item" typeof="WebPage">
              <span property="name">{link.name}</span>
            </Link>
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
