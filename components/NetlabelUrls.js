import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBandcamp,
  faFacebook,
  faSoundcloud,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faRss, faGlobe, faLink } from '@fortawesome/free-solid-svg-icons';
import { SquirrelIcon } from '@primer/octicons-react';
import urlKeys from '../utils/urlKeys';
import './NetlabelUrls.scss';

const NetlabelUrls = ({ urls = [] }) => {
  return (
    <ul className="NetlabelUrls">
      {urls[urlKeys.SITE] && urls[urlKeys.BANDCAMP] !== urls[urlKeys.SITE] && (
        <li>
          <FontAwesomeIcon icon={faGlobe} className="icon-link" />
          <a href={urls[urlKeys.SITE]}>{urls[urlKeys.SITE]}</a>
        </li>
      )}
      {urls[urlKeys.RSS] && (
        <li>
          <FontAwesomeIcon icon={faRss} className="icon-link" />
          <a href={urls[urlKeys.RSS]}>{urls[urlKeys.RSS]}</a>
        </li>
      )}
      {urls[urlKeys.BANDCAMP] && (
        <li>
          <FontAwesomeIcon icon={faBandcamp} className="icon-link" />
          <a href={urls[urlKeys.BANDCAMP]}>{urls[urlKeys.BANDCAMP]}</a>
        </li>
      )}
      {urls[urlKeys.SOUNDCLOUD] && (
        <li>
          <FontAwesomeIcon icon={faSoundcloud} className="icon-link" />
          <a href={urls[urlKeys.SOUNDCLOUD]}>{urls[urlKeys.SOUNDCLOUD]}</a>
        </li>
      )}
      {urls[urlKeys.SONICSQUIRREL] && (
        <li>
          <SquirrelIcon className="icon-link" />
          <a href={urls[urlKeys.SONICSQUIRREL]}>
            {urls[urlKeys.SONICSQUIRREL]}
          </a>
        </li>
      )}
      {urls[urlKeys.FACEBOOK] && (
        <li>
          <FontAwesomeIcon icon={faFacebook} className="icon-link" />
          <a href={urls[urlKeys.FACEBOOK]}>{urls[urlKeys.FACEBOOK]}</a>
        </li>
      )}
      {urls[urlKeys.INSTAGRAM] && (
        <li>
          <FontAwesomeIcon icon={faInstagram} className="icon-link" />
          <a href={urls[urlKeys.INSTAGRAM]}>{urls[urlKeys.INSTAGRAM]}</a>
        </li>
      )}
      {urls[urlKeys.TWITTER] && (
        <li>
          <FontAwesomeIcon icon={faTwitter} className="icon-link" />
          <a href={urls[urlKeys.TWITTER]}>{urls[urlKeys.TWITTER]}</a>
        </li>
      )}
      {urls[urlKeys.FMA] && (
        <li>
          <FontAwesomeIcon icon={faLink} className="icon-link" />
          <a href={urls[urlKeys.FMA]}>{urls[urlKeys.FMA]}</a>
        </li>
      )}
      {urls[urlKeys.ARCHIVE] && (
        <li>
          <FontAwesomeIcon icon={faLink} className="icon-link" />
          <a href={urls[urlKeys.ARCHIVE]}>{urls[urlKeys.ARCHIVE]}</a>
        </li>
      )}
    </ul>
  );
};

export default NetlabelUrls;
