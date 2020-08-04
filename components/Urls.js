import IconLink from './IconLink';
import urlKeys from '../utils/urlKeys';
import './Urls.scss';

const Urls = ({ urls = [] }) => {
  return (
    <ul className="Urls">
      {urls[urlKeys.SITE] && urls[urlKeys.BANDCAMP] !== urls[urlKeys.SITE] && (
        <li>
          <IconLink icon="globe" href={urls[urlKeys.SITE]} />
        </li>
      )}
      {urls[urlKeys.RSS] && (
        <li>
          <IconLink icon="rss" href={urls[urlKeys.RSS]} />
        </li>
      )}
      {urls[urlKeys.BANDCAMP] && (
        <li>
          <IconLink icon="bandcamp" href={urls[urlKeys.BANDCAMP]} />
        </li>
      )}
      {urls[urlKeys.SOUNDCLOUD] && (
        <li>
          <IconLink icon="soundcloud" href={urls[urlKeys.SOUNDCLOUD]} />
        </li>
      )}
      {urls[urlKeys.SONICSQUIRREL] && (
        <li>
          <IconLink icon="squirrel" href={urls[urlKeys.SONICSQUIRREL]} />
        </li>
      )}
      {urls[urlKeys.FACEBOOK] && (
        <li>
          <IconLink icon="facebook" href={urls[urlKeys.FACEBOOK]} />
        </li>
      )}
      {urls[urlKeys.INSTAGRAM] && (
        <li>
          <IconLink icon="instagram" href={urls[urlKeys.INSTAGRAM]} />
        </li>
      )}
      {urls[urlKeys.TWITTER] && (
        <li>
          <IconLink icon="twitter" href={urls[urlKeys.TWITTER]} />
        </li>
      )}
      {urls[urlKeys.FMA] && (
        <li>
          <IconLink href={urls[urlKeys.FMA]} />
        </li>
      )}
      {urls[urlKeys.ARCHIVE] && (
        <li>
          <IconLink href={urls[urlKeys.ARCHIVE]} />
        </li>
      )}
      {urls[urlKeys.YOUTUBE] && (
        <li>
          <IconLink icon="youtube" href={urls[urlKeys.YOUTUBE]} />
        </li>
      )}
      {urls[urlKeys.APPLE_PODCASTS] && (
        <li>
          <IconLink icon="apple-podcasts" href={urls[urlKeys.APPLE_PODCASTS]} />
        </li>
      )}
      {urls[urlKeys.GOOGLE_PODCASTS] && (
        <li>
          <IconLink
            icon="google-podcasts"
            href={urls[urlKeys.GOOGLE_PODCASTS]}
          />
        </li>
      )}
    </ul>
  );
};

export default Urls;
