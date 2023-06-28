import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SquirrelIcon } from '@primer/octicons-react';
import {
  faBandcamp,
  faFacebook,
  faSoundcloud,
  faTwitter,
  faInstagram,
  faGoogle,
  faApple,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faRss, faGlobe, faLink } from '@fortawesome/free-solid-svg-icons';
import styles from './IconLink.module.scss';

const IconLink = ({ href, icon = null, text = null }) => {
  const label = text ? text : href;

  const NormalizedIcon = icon => {
    let normalized;

    switch (icon) {
      case 'squirrel':
        normalized = <SquirrelIcon className={styles.Icon} />;
        break;
      case 'bandcamp':
        normalized = (
          <FontAwesomeIcon icon={faBandcamp} className={styles.Icon} />
        );
        break;
      case 'facebook':
        normalized = (
          <FontAwesomeIcon icon={faFacebook} className={styles.Icon} />
        );
        break;
      case 'soundcloud':
        normalized = (
          <FontAwesomeIcon icon={faSoundcloud} className={styles.Icon} />
        );
        break;
      case 'twitter':
        normalized = (
          <FontAwesomeIcon icon={faTwitter} className={styles.Icon} />
        );
        break;
      case 'instagram':
        normalized = (
          <FontAwesomeIcon icon={faInstagram} className={styles.Icon} />
        );
        break;
      case 'rss':
        normalized = <FontAwesomeIcon icon={faRss} className={styles.Icon} />;
        break;
      case 'globe':
        normalized = <FontAwesomeIcon icon={faGlobe} className={styles.Icon} />;
        break;
      case 'link':
        normalized = <FontAwesomeIcon icon={faLink} className={styles.Icon} />;
        break;
      case 'google-podcasts':
        normalized = (
          <FontAwesomeIcon icon={faGoogle} className={styles.Icon} />
        );
        break;
      case 'apple-podcasts':
        normalized = <FontAwesomeIcon icon={faApple} className={styles.Icon} />;
        break;
      case 'youtube':
        normalized = (
          <FontAwesomeIcon icon={faYoutube} className={styles.Icon} />
        );
        break;
      default:
        normalized = <FontAwesomeIcon icon={faLink} className={styles.Icon} />;
    }

    return normalized;
  };

  return (
    <span className={styles.IconLink}>
      {NormalizedIcon(icon)}
      <a href={href}>{label}</a>
    </span>
  );
};

export default IconLink;
