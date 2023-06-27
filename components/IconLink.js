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

const IconLink = ({ href, icon = null, text = null }) => {
  const label = text ? text : href;

  const NormalizedIcon = icon => {
    let normalized;

    switch (icon) {
      case 'squirrel':
        normalized = <SquirrelIcon className="icon-link" />;
        break;
      case 'bandcamp':
        normalized = <FontAwesomeIcon icon={faBandcamp} className="icon" />;
        break;
      case 'facebook':
        normalized = <FontAwesomeIcon icon={faFacebook} className="icon" />;
        break;
      case 'soundcloud':
        normalized = <FontAwesomeIcon icon={faSoundcloud} className="icon" />;
        break;
      case 'twitter':
        normalized = <FontAwesomeIcon icon={faTwitter} className="icon" />;
        break;
      case 'instagram':
        normalized = <FontAwesomeIcon icon={faInstagram} className="icon" />;
        break;
      case 'rss':
        normalized = <FontAwesomeIcon icon={faRss} className="icon" />;
        break;
      case 'globe':
        normalized = <FontAwesomeIcon icon={faGlobe} className="icon" />;
        break;
      case 'link':
        normalized = <FontAwesomeIcon icon={faLink} className="icon" />;
        break;
      case 'google-podcasts':
        normalized = <FontAwesomeIcon icon={faGoogle} className="icon" />;
        break;
      case 'apple-podcasts':
        normalized = <FontAwesomeIcon icon={faApple} className="icon" />;
        break;
      case 'youtube':
        normalized = <FontAwesomeIcon icon={faYoutube} className="icon" />;
        break;
      default:
        normalized = <FontAwesomeIcon icon={faLink} className="icon" />;
    }

    return normalized;
  };

  return (
    <span className="IconLink">
      {NormalizedIcon(icon)}
      <a href={href}>{label}</a>
    </span>
  );
};

export default IconLink;
