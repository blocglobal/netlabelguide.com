import dayjs from 'dayjs';
import he from 'he';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import sluggify from '../utils/sluggify';
import './ReleaseList.scss';

dayjs.extend(advancedFormat);

const ReleaseList = ({ releases }) => {
  return releases ? (
    <div className="ReleaseList">
      <h2>Recent Releases</h2>
      <ul>
        {releases.map(release => {
          const slug = sluggify(release.title);
          return (
            <li key={`release-${slug}`}>
              <a href={release.link}>{he.unescape(release.title)}</a>
              {release.pubDate && (
                <span>{` - ${dayjs(release.pubDate).format(
                  'MMMM Do, YYYY'
                )}`}</span>
              )}
            </li>
          );
        })}
      </ul>
      <p>
        <strong>
          If you’d like your netlabel to have a recent release list like the
          above, please{' '}
          <a href="https://blocsonic.com/contact">contact us here</a> and
          provide us with an RSS feed url that only lists music releases.
        </strong>
      </p>
    </div>
  ) : null;
};

export default ReleaseList;
