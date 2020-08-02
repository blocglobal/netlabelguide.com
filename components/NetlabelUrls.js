import urlKeys from '../utils/urlKeys';
import './NetlabelUrls.scss';

const NetlabelUrls = ({ urls = [] }) => {
  return (
    <ul className="NetlabelUrls">
      {urls[urlKeys.SITE] && urls[urlKeys.BANDCAMP] !== urls[urlKeys.SITE] && (
        <li>
          <a href={urls[urlKeys.SITE]}>{urls[urlKeys.SITE]}</a>
        </li>
      )}
      {urls[urlKeys.RSS] && (
        <li>
          <a href={urls[urlKeys.RSS]}>{urls[urlKeys.RSS]}</a>
        </li>
      )}
      {urls[urlKeys.BANDCAMP] && (
        <li>
          <a href={urls[urlKeys.BANDCAMP]}>{urls[urlKeys.BANDCAMP]}</a>
        </li>
      )}
      {urls[urlKeys.SOUNDCLOUD] && (
        <li>
          <a href={urls[urlKeys.SOUNDCLOUD]}>{urls[urlKeys.SOUNDCLOUD]}</a>
        </li>
      )}
      {urls[urlKeys.SONICSQUIRREL] && (
        <li>
          <a href={urls[urlKeys.SONICSQUIRREL]}>
            {urls[urlKeys.SONICSQUIRREL]}
          </a>
        </li>
      )}
      {urls[urlKeys.FACEBOOK] && (
        <li>
          <a href={urls[urlKeys.FACEBOOK]}>{urls[urlKeys.FACEBOOK]}</a>
        </li>
      )}
      {urls[urlKeys.TWITTER] && (
        <li>
          <a href={urls[urlKeys.TWITTER]}>{urls[urlKeys.TWITTER]}</a>
        </li>
      )}
      {urls[urlKeys.FMA] && (
        <li>
          <a href={urls[urlKeys.FMA]}>{urls[urlKeys.FMA]}</a>
        </li>
      )}
      {urls[urlKeys.ARCHIVE] && (
        <li>
          <a href={urls[urlKeys.ARCHIVE]}>{urls[urlKeys.ARCHIVE]}</a>
        </li>
      )}
    </ul>
  );
};

export default NetlabelUrls;
